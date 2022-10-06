import { createRouter, createWebHistory } from 'vue-router';
import Prueba from '../components/Prueba.vue'
 
const routes = [
  {
    path: '/prueba',
    name: 'Prueba',
    component: Prueba,
  },
];
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
 
export default router;
