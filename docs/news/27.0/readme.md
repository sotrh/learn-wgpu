# Update to 27.0!

Pretty quick update just two main things

* `wgpu::DeviceDescriptor` now has an `experimental_features` field that tells
WGPU if we want to use features that haven't been stablized. For the tutorial
we set this to `wgpu::ExperimentalFeatures::disabled()`
* `PollType::Wait` now has fields: `submission_index` and `timeout`. We can get
the submission index from `Queue::submit`, but we only use
this in a couple places so we'll just use `PollType::wait_indefinitely()`.

## Thanks to my patrons!

If you like what I do, and want to support me check out my [patreon](https://patreon.com/sotrh)!
A special shoutout to these members!

* David Laban
* Bernard Llanos
* papyDoctor
* Ian Gowen
* Aron Granberg
* 折登 樹
* Julius Liu
* Lennart
* Jani Turkia
* Feng Liang
* Paul E Hansen
* Lions Heart
* Gunstein Vatnar
* Nico Arbogast
* Dude
* Youngsuk Kim
* Alexander Kabirov
* charlesk
* Danny McGee
* yutani
* Eliot Bolduc
* Filip
* Ben Anderson
* Thunk
* Craft Links
* Zeh Fernando
* Ken K
* Ryan
* Felix
* Tema
* 大典 加藤
* Andrea Postal
* IC
* Davide Prati
* dadofboi