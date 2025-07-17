import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Favorites from '../views/Favorites.vue';
import MovieDetail from '../views/MovieDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/movie/:id', name: 'MovieDetail', component: MovieDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
