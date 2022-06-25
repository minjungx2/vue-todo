<template>
    <div class="layout-container">
        <el-container>
            <el-header class="layout-header">
                <el-menu
                  :default-active="activeIndex"
                  class="el-menu-demo"
                  mode="horizontal"
                  :ellipsis="false"
                >
                  <el-menu-item index="0">로고</el-menu-item>
                  <div class="flex-grow"/>
                  <el-menu-item index="1">My</el-menu-item>
                  <el-sub-menu index="2">
                    <template>Workspace</template>
                    <el-menu-item index="2-1">내 정보</el-menu-item>
                    <el-sub-menu index="2-2">
                        <template>item four</template>
                        <el-menu-item index="2-2-1">item one</el-menu-item>
                        <el-menu-item index="2-2-2">item two</el-menu-item>
                        <el-menu-item index="2-2-3">item three</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside class="layout-aside" width="200px">
                    <el-scrollbar>
                        <el-menu mode="vertical" router="true">
                            <el-menu-item index="1" route="/todo">
                                <el-icon><icon-menu/></el-icon>
                                <span>투두리스트</span>
                            </el-menu-item>
                            <el-menu-item index="2" route="/calendar">
                                <el-icon><icon-menu/></el-icon>
                                <span>일정관리</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <el-icon><icon-menu/></el-icon>
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
    import {
        ElHeader,
        ElContainer,
        ElAside,
        ElMain,
        ElMenu,
        ElSubMenu,
        ElMenuItem,
        ElIcon,
        ElScrollbar
    } from 'element-plus'

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

<style scoped="scoped">
    .layout-header {
        background-color: darkgrey;
    }
    .layout-aside {
        background-color: blanchedalmond;
    }
</style>