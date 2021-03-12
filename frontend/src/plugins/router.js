import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import Page from "../views/Page";
import NotFound from "../views/NotFound";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/u/:token",
      name: "page",
      component: Page,
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;
