import { createRouter, createWebHistory } from "vue-router";
import games from "@/views/GamePage.vue";
import applications from "@/views/ApplicationPage.vue";
import animations from "@/views/AnimationPage.vue";
import integrations from "@/views/IntegrationPage.vue";


const routes = [
    {
        path: "/games",
        name: "games",
        component: games,
    },
    {
        path: "/applications",
        name: "applications",
        component: applications,
    },
    {
        path: "/animations",
        name: "animations",
        component: animations,
    },
    {
        path: "/integrations",
        name: "integrations",
        component: integrations,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
