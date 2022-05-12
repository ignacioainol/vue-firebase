import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddCity from '../views/AddCity.vue';
import EditCity from '../views/EditCity.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-city',
    name: 'addcity',
    component: AddCity
  },
  {
    path: '/cities/:cityId',
    name: 'editcity',
    component: EditCity
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;