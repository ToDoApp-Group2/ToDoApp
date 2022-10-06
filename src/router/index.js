import { createRouter, createWebHistory } from 'vue-router';
import Prueba from '../views/PruebaView.vue';
 
const routes = [
  {
    path: '/prueba',
    name: 'Prueba',
    component: Prueba,
  },
];
 
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});
 
export default router;
