import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import Schedule from "../views/Schedule.vue";
import FindUs from "../views/FindUs.vue";
import Activities from "../views/Activities.vue";
import Login from "../views/Login.vue";
import Prices from "../views/Prices.vue";
import NewMember from '../views/NewMember.vue';
import HikariDo from '../views/HikariDo.vue';
import Projects from '../views/Projects.vue';
import Partners from '../views/Partners.vue';
import Policies from '../views/Policies.vue'
import Covid from "../views/Covid.vue";

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
  },
  {
    path: "/ny-deltagare",
    name: "ny-deltagare",
    component: NewMember,
  },
  {
    path: "/hikari-do",
    name: "hikarido",
    component: HikariDo
  },
  {
    path: "/projekt",
    name: "projekt",
    component: Projects
  },
  {
    path: "/partners",
    name: "partners",
    component: Partners
  },
  {
    path: "/it-policies",
    name: "policy",
    component: Policies
  },
  {
    path: "/covid-19",
    name: "covid-19",
    component: Covid
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
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
