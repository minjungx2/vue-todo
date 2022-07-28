<template>
	<div class="common-layout">
		<nav-bar></nav-bar>
		<main-section></main-section>
	</div>
</template>

<script>
import NavBar from './NavBar.vue'
import MainSection from './MainSection.vue'

export default {
	name: 'Home',
	components: {
		NavBar,
		MainSection
	}
}
</script>