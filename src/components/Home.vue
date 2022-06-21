<template>
	<div class="common-layout">
		<el-container>
			<el-header>header</el-header>
			<el-container>
				<el-aside width="200px">aside</el-aside>
				<el-main>main</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import {ElHeader, ElContainer,ElAside, ElMain} from 'element-plus'

export default {
	name: 'Home',
	components: {
		ElHeader,
		ElContainer,
		ElAside,
		ElMain
	}
}
</script>