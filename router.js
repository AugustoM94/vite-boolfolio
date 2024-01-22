import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./src/pages/AppHome.vue";
import AppProjects from "./src/pages/AppProjects.vue";
import SingleProject from "./src/pages/SingleProject.vue";
import NotFound from "./src/pages/NotFound.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome
        },
        {
            path: "/projects",
            name: "projects",
            component: AppProjects
        },
        {
            path: "/projects/:slug",
            name: "single-post",    
            component: SingleProject

        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-fount",
            component: NotFound
        }
    ]
});

export default router;
