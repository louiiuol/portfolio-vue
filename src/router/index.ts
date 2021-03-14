import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		//* this generates a separate chunk for this route
		//* which is lazy-loaded when the route is visited.
		component: () => import("../views/pages/About.vue")
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
