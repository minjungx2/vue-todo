<template>
	<div class="common-layout">
		home
		<router-link to="/todo">Todo</router-link>
	</div>
	<router-view></router-view>
</template>

<script>
export default {
	name: 'Home'
}
</script>