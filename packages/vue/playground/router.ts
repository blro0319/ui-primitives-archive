import { createRouter, createWebHistory } from "vue-router";

const components = import.meta.glob("./pages/component/*.vue");

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("./pages/index.vue") },
    ...Object.entries(components).map(([path, component]) => ({
      path: path.replace(/^\.\/pages(\/component\/[a-z]+)\.vue/, "$1"),
      component,
    })),
  ],
});
