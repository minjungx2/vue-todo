import { createWebHistory, createRouter } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import('./components/Home.vue')
	},
	{
		path: "/todo",
		name: "Todo",
		component: () => import('./components/Todo/Todo.vue')
	},
	{
		path: "/calendar",
		name: "Calendar",
		component: () => import('./components/Calendar/Calendar.vue')
	},
	{
		path: "/myinfo",
		name: "MyInfo",
		component: () => import('./components/MyInfo/MyInfo.vue')
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;