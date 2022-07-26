import { createWebHistory, createRouter } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import('./components/Home.vue'),
		children: [
			{
				path: "todo",
				component: () => import('./components/Todo/Todo.vue')
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;