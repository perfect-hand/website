import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Imprint from "./components/Imprint.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/imprint",
      name: "Imprint",
      component: Imprint,
    },
  ],
});

export default router;
