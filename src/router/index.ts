import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import AboutMe from '../views/AboutMe.vue';
import Contact from '../views/Contact.vue';
import MyProjects from '../views/MyProjects.vue'
import Experience from '../views/Experience.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/my-projects',
    name: 'MyProjects',
    component: MyProjects,
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
