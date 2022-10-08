import App from "../App.vue"
import { createRouter, createWebHistory } from 'vue-router';
import Notes from '../components/Notes.vue';
import Auths2 from '../components/Auths2.vue'
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Auths2
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes,
  },
  
];
 
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});
 
export default router;
