import App from "../App.vue"
import { createRouter, createWebHistory } from 'vue-router';
import Notes from '../components/Notes.vue';
 
const routes = [
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
