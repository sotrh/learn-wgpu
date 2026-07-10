<template>
    <div class="note" :class="{ hidden: hidden }" v-on:click="toggle">
        <div class="header">
            <div :class="{ arrow: true, down: hidden }"></div>
            <div class="grow">Note</div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="js">
export default {
    name: "Note",
    data() {
        return {
            hidden: true
        }
    },
    methods: {
        toggle() {
            this.hidden = !this.hidden;
        }
    }
}
</script>
<style scoped>
.note {
    border-left: 4px solid var(--vp-c-accent);
    padding: 1rem;
    max-height: fit-content;
    background: linear-gradient(to bottom, transparent, rgba(60, 60, 60, 50%))
}

.header {
    color: var(--vp-c-accent);
}

.note.hidden {
    max-height: 2rem;
    overflow: hidden;
}

.header {
    display: flex;
    flex-direction: row-reverse;
}

.header>.grow {
    flex-grow: 1;
}
</style>