import { createRouter, createWebHistory } from "vue-router";

const AboutView = () => import("../views/AboutView.vue");
const HomeView = () => import("../views/HomeView.vue");
const CreateView = () => import("../views/CreateView.vue");
const EditView = () => import("../views/EditView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: HomeView,
      meta: { title: "SupportApp" },
    },
    {
      path: "/home",
      name: "Home",
      component: AboutView,
      meta: { title: "SupportApp" },
    },
    {
      path: "/new-request",
      name: "NewRequest",
      component: CreateView,
      meta: { title: "New Request" },
    },
    {
      path: "/edit-request/:id",
      name: "EditRequest",
      component: EditView,
      props: true,
      meta: { title: "Edit Request" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "SupportApp";
  next();
});

export default router;