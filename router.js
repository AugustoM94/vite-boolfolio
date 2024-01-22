import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./src/pages/AppHome.vue";
import AppProjects from "./src/pages/AppProjects.vue";
import SingleProject from "./src/pages/SingleProject.vue";
import NotFound from "./src/pages/NotFound.vue";


const router = createRouter({
    history: createWebHistory(),
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
            name: "single-project",    
            component: SingleProject

        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        }
    ]
});

export default router;
