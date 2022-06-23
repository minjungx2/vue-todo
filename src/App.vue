<template>
<div class="layout-container">
		<el-container>
			<el-header class="layout-header">header</el-header>
			<el-container>
				<el-aside class="layout-aside" width="200px">
          <el-scrollbar>
            <el-menu mode="vertical" router="true">
              <el-menu-item index="1" route="/todo">
                <el-icon><icon-menu /></el-icon>
                <span>투두리스트</span>
              </el-menu-item>
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>일정관리</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon><icon-menu /></el-icon>
                <span>가계부</span>
              </el-menu-item>
          </el-menu>
          </el-scrollbar>
        </el-aside>
				<el-main class="layout-main">
          <router-view></router-view>
        </el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import {ElHeader, ElContainer,ElAside, ElMain, ElMenu, ElSubMenu, ElMenuItem, ElIcon, ElScrollbar} from 'element-plus'

export default {
	name: "App",
	components: {
		ElHeader,
		ElContainer,
		ElAside,
		ElMain,
    ElMenu,
    ElSubMenu,
    ElIcon,
    ElMenuItem,
    ElScrollbar
	}
};
</script>

<style scoped>
.layout-header {
  background-color: darkgrey;
}
.layout-aside {
  background-color: blanchedalmond;
}
</style>