<template>
    <div class="layout-container">
        <el-container>
            <el-header class="layout-header">
                <el-menu
                  mode="horizontal"
                  router="true"
                  style="width:100%"
                >
                  <el-menu-item index="0">Tools</el-menu-item>
                  <el-sub-menu index="1">
                    <template #title>My</template>
                    <el-menu-item index="2-1" route="/myInfo">내 정보</el-menu-item>
                </el-sub-menu>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside class="layout-aside" width="200px">
                    <el-scrollbar>
                        <el-menu mode="vertical" router="true">
                            <el-menu-item index="1" route="/todo">
                                <el-icon><icon-menu/></el-icon>
                                <span>Todo</span>
                            </el-menu-item>
                            <el-menu-item index="2" route="/calendar">
                                <el-icon><icon-menu/></el-icon>
                                <span>Calendar</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <el-icon><icon-menu/></el-icon>
                                <span>Memo</span>
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

</style>