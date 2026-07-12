<template>
    <div class="note" :class="{ hidden: is_hidden }" v-on:click="toggle">
        <div class="header">
            <div :class="{ arrow: true, down: is_hidden }"></div>
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
    props: {
        hidden: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            is_hidden: this.hidden
        }
    },
    methods: {
        toggle() {
            this.is_hidden = !this.is_hidden;
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
    max-height: 1rem;
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