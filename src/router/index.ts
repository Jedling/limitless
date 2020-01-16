import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import Schedule from "../views/Schedule.vue";
import FindUs from "../views/FindUs.vue";
import Activities from "../views/Activities.vue";
import Login from "../views/Login.vue";
import Prices from "../views/Prices.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/om-limitless",
    name: "om-limitless",
    component: AboutUs
  },
  {
    path: "/schema",
    name: "schema",
    component: Schedule,
  },
  {
    path: "/hitta-oss",
    name: "hitta-oss",
    component: FindUs,
  },
  {
    path: "/traningspass",
    name: "traningspass",
    component: Activities,
  },
  {
    path: "/inloggning",
    name: "inloggning",
    component: Login,
  },
  {
    path: "/priser",
    name: "priser",
    component: Prices,
  }
  
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  // scrollBehavior() {
  //   window.scrollTo(0, 0);
  // },
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
