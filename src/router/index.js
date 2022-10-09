import App from "../App.vue"
import { createRouter, createWebHistory } from 'vue-router';
import Notes from '../components/Notes.vue';
import Auths2 from '../components/Auths2.vue'
import Auths3 from '../components/Auths3.vue'
import Profile2 from '../components/Profile2.vue'
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Auths3
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile2,
  }
];
 
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});
 
export default router;
