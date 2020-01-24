import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Photo from "../components/Photo";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/#",
      name: "Home",
      component: Home
    },
    {
      path: "/#/projects/",
      name: "Projects",
      component: Projects
    },
    {
      path: "/#/about/",
      name: "About",
      component: About
    },
    {
      path: "/#/photo/",
      name: "Photo",
      component: Photo
    }
  ]
});
