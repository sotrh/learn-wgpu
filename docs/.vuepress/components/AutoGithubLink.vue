<template>
    <div class="auto-github-link">
        <a :href="link" target="_blank" rel="noopener noreferrer">Check out the code!</a>
        <OutboundLink/>
    </div>
</template>

<script>
const GITHUB_REPO = "https://github.com/sotrh/learn-wgpu/tree/master/code"
export default {
    computed: {
        link() {
            return GITHUB_REPO + this.$page.path;
        }
    }
}
</script>