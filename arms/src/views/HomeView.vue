<template>
	<div class="background landing">
		<div class="container">
			<HomeHeader />
			<HomeSlider />
		</div>
		<HomeContent />
		<h2 class="thanks text-align-center">Thanks for watching!</h2>
		<p class="lead text-align-center">
			<a class="back-to-top" href="/">
				back to top <i class="fa fa-angle-up"></i
			></a>
		</p>
	</div>
</template>

<script lang="ts">
import "../assets/css/normalize.css";
import "../assets/css/application.min.css";
import "../assets/css/override.css";
import HomeHeader from "../components/Home/HomeHeader.vue";
import HomeSlider from "../components/Home/HomeSlider.vue";
import HomeContent from "../components/Home/HomeContent.vue";

export default {
	components: {
		HomeHeader,
		HomeSlider,
		HomeContent,
	},
};
</script>
<style>
body {
	padding-bottom: 0;
}
</style>
