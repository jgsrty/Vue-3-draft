import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Users from "./components/Users.vue";
import News from "./components/News.vue";
import NewsContent from "./components/NewsContent.vue";

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/users", component: Users },
    { path: "/news", component: News },
    { path: "/content", component: NewsContent },
  ],
});

export default router
