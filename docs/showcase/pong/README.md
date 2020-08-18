# Pong

![](./pong.png)

Practically the "Hello World!" of games. Pong has been remade thousands of times. I know Pong. You know Pong. We all know Pong. That being said, this time I wanted to put a little more effort than most people do. This showcase has a basic menu system, sounds, and different game states.

The architecture is not the best as I prescribed to the "get things done" mentality. If I were to redo this project, I'd change a lot of things. Regardless, let's get into the postmortem.

## The Architecture

I was messing around with separating state from the render code. It ended up similar to an entity component system.

I had a `State` class with all of the objects in the scene. This included the ball and the paddles, as well as the text for the scores and even the menu. `State` also included a `game_state` field of type `GameState`.

```rust
#[derive(Debug, Copy, Clone, Eq, PartialEq)]
pub enum GameState {
    MainMenu,
    Serving,
    Playing,
    GameOver,
    Quiting,
}
```

The `State` class didn't have any methods on it as I was taking a more data oriented approach. Instead I created a `System` trait, and created multiple structs that implemented it.

```rust
pub trait System {
    #[allow(unused_variables)]
    fn start(&mut self, state: &mut state::State) {}
    fn update_state(
        &self, 
        input: &input::Input, 
        state: &mut state::State, 
        events: &mut Vec<state::Event>,
    );
}
```

The systems would be in charge of controlling updating the different objects state (position, visibility, etc), as well as updating the `game_state` field. I created all the systems on startup, and used a `match` on `game_state` to determine which ones should be allow to run (the `visiblity_system` always runs as it is always needed).

```rust
visiblity_system.update_state(&input, &mut state, &mut events);
match state.game_state {
    state::GameState::MainMenu => {
        menu_system.update_state(&input, &mut state, &mut events);
        if state.game_state == state::GameState::Serving {
            serving_system.start(&mut state);
        }
    },
    state::GameState::Serving => {
        serving_system.update_state(&input, &mut state, &mut events);
        play_system.update_state(&input, &mut state, &mut events);
        if state.game_state == state::GameState::Playing {
            play_system.start(&mut state);
        }
    },
    state::GameState::Playing => {
        ball_system.update_state(&input, &mut state, &mut events);
        play_system.update_state(&input, &mut state, &mut events);
        if state.game_state == state::GameState::Serving {
            serving_system.start(&mut state);
        } else if state.game_state == state::GameState::GameOver {
            game_over_system.start(&mut state);
        }
    },
    state::GameState::GameOver => {
        game_over_system.update_state(&input, &mut state, &mut events);
        if state.game_state == state::GameState::MainMenu {
            menu_system.start(&mut state);
        }
    },
    state::GameState::Quiting => {},
}
```

It's definitely not the cleanest code, but it works.

I ended up having 6 systems in total.

1. I added the `VisibilitySystem` near the end of development. Up to that point, all the systems had to set the `visible` field of the objects. That was a pain, and cluttered the logic. Instead I decided to create the `VisiblitySystem` to handle that.

2. The `MenuSystem` handled controlling what text was focused, and what would happen when the user pressed the enter key. If the `Play` button was focused, pressing enter would change `game_state` to `GameState::Serving` which would start the game. The `Quit` button would shift to `GameState::Quiting`.

3. The `ServingSystem` sets the balls position to `(0.0, 0.0)`, updates the score texts, and shifts into `GameState::Playing` after a timer.

4. The `PlaySystem` controls the players. It allows them to move, and keeps them from leaving the play space. This system runs on both `GameState::Playing` as well as `GameState::Serving`. I did this to allow the players to reposition themselves before the serve. The `PlaySystem` also will shift into `GameState::GameOver` when on of the players scores is greater than 2.

5. The `BallSystem` system controls the balls movement as well as its bouncing of walls/players. It also updates the score and shifts to `GameState::Serving` when the ball goes off the side of the screen.

6. The `GameOver` system updates the `win_text` and shifts to `GameState::MainMenu` after a delay.

I found the system approach to quite nice to work with. My implementation wasn't the best, but I would like working with it again. I might even implement my own ECS.

## Input

The `System` trait, originally had a `process_input` method. This became a problem when I was implementing allowing players to move between serves. The players would get stuck when the `game_state` switched from `Serving` to `Playing` as the inputs were getting stuck. I only called `process_input` on systems that were currently in use.  Changing that would be finicky, so I decided to move all the input code into its own struct.

```rust
use winit::event::{VirtualKeyCode, ElementState};

#[derive(Debug, Default)]
pub struct Input {
    pub p1_up_pressed: bool,
    pub p1_down_pressed: bool,
    pub p2_up_pressed: bool,
    pub p2_down_pressed: bool,
    pub enter_pressed: bool,
}

impl Input {
    pub fn new() -> Self {
        Default::default()
    }

    pub fn update(&mut self, key: VirtualKeyCode, state: ElementState) -> bool {
        let pressed = state == ElementState::Pressed;
        match key {
            VirtualKeyCode::Up => {
                self.p2_up_pressed = pressed;
                true
            }
            VirtualKeyCode::Down => {
                self.p2_down_pressed = pressed;
                true
            }
            VirtualKeyCode::W => {
                self.p1_up_pressed = pressed;
                true
            }
            VirtualKeyCode::S => {
                self.p1_down_pressed = pressed;
                true
            }
            VirtualKeyCode::Return => {
                self.enter_pressed = pressed;
                true
            }
            _ => false
        }
    }

    pub fn ui_up_pressed(&self) -> bool {
        self.p1_up_pressed || self.p2_up_pressed
    }

    pub fn ui_down_pressed(&self) -> bool {
        self.p1_down_pressed || self.p2_down_pressed
    }
}
```

This works really well. I simply pass this struct into the `update_state` method.

## Render

I used [wgpu_glyph](https://docs.rs/wgpu_glyph) for the text, and white quads for the ball and paddles. There's not much to say here, it's Pong after all.

I did mess around with batching however. It was totally overkill for this project, but it was a good learning experience. Here's the code if you're interested.

```rust
pub struct QuadBufferBuilder {
    vertex_data: Vec<Vertex>,
    index_data: Vec<u32>,
    current_quad: u32,
}

impl QuadBufferBuilder {
    pub fn new() -> Self {
        Self {
            vertex_data: Vec::new(),
            index_data: Vec::new(),
            current_quad: 0,
        }
    }

    pub fn push_ball(self, ball: &state::Ball) -> Self {
        if ball.visible {
            let min_x = ball.position.x - ball.radius;
            let min_y = ball.position.y - ball.radius;
            let max_x = ball.position.x + ball.radius;
            let max_y = ball.position.y + ball.radius;
    
            self.push_quad(min_x, min_y, max_x, max_y)
        } else {
            self
        }
    }

    pub fn push_player(self, player: &state::Player) -> Self {
        if player.visible {
            self.push_quad(
                player.position.x - player.size.x * 0.5, 
                player.position.y - player.size.y * 0.5, 
                player.position.x + player.size.x * 0.5,
                player.position.y + player.size.y * 0.5, 
            )
        } else {
            self
        }
    }

    pub fn push_quad(mut self, min_x: f32, min_y: f32, max_x: f32, max_y: f32) -> Self {
        self.vertex_data.extend(&[
            Vertex {
                position: (min_x, min_y).into(),
            },
            Vertex {
                position: (max_x, min_y).into(),
            },
            Vertex {
                position: (max_x, max_y).into(),
            },
            Vertex {
                position: (min_x, max_y).into(),
            },
        ]);
        self.index_data.extend(&[
            self.current_quad * 4 + 0,
            self.current_quad * 4 + 1,
            self.current_quad * 4 + 2,
            self.current_quad * 4 + 0,
            self.current_quad * 4 + 2,
            self.current_quad * 4 + 3,
        ]);
        self.current_quad += 1;
        self
    }

    pub fn build(self, device: &wgpu::Device) -> (StagingBuffer, StagingBuffer, u32) {
        (
            StagingBuffer::new(device, &self.vertex_data),
            StagingBuffer::new(device, &self.index_data),
            self.index_data.len() as u32,
        )
    }
}
```

## Sound

I used [rodio](https://docs.rs/rodio) for sound. I created a `SoundPack` class to store the sounds. Deciding how to get the sounds to play took some thinking. I chose to pass in a `Vec<state::Event>` into the `update_state` method. The system would then push an event to the `Vec`. The `Event` enum is listed below.

```rust
#[derive(Debug, Copy, Clone)]
pub enum Event {
    ButtonPressed,
    FocusChanged,
    BallBounce(cgmath::Vector2<f32>),
    Score(u32),
}
```

I was going to have `BallBounce` play a positioned sound using a `SpatialSink`, but I was getting clipping issues, and I wanted to be done with the project. Aside from that, the events system worked nicely.

## Summary

A fun project to work on. It was overly architected, and kinda hard to make changes, but a good experience none the less.
