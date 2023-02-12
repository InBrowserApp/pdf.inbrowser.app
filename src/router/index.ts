import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RemoveOwnerPasswordView from "../views/RemoveOwnerPasswordView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tools/remove-owner-password",
      name: "remove-owner-password",
      component: RemoveOwnerPasswordView,
    },
  ],
});

export default router;
