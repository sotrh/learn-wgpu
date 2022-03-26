// Original: https://www.raymondcamden.com/2018/05/09/adding-a-recent-content-component-to-vuepress/

<template>
<div>
	<ul>
		<li v-for="i, post in recentFiles" :key="i">
			<a :href="post.path">{{post.title}}</a>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	name: "RecentArticles",
	data() {
		return {};
	}, 
	computed:{
		recentFiles() {
			let files = this.$site.pages.filter(p => {
				return p.regularPath.includes('beginner')
					|| p.regularPath.includes('intermediate');
			}).sort((a,b) => {
				let aDate = new Date(a.frontmatter.published).getTime();
				let bDate = new Date(b.frontmatter.published).getTime();
				let diff = aDate - bDate;
				if(diff < 0) return -1;
				if(diff > 0) return 1;
				return 0;
			}).slice(0,5);

			return files;
		}
	}
}
</script>
