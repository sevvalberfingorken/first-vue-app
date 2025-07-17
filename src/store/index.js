// src/store/index.js
import { createStore } from 'vuex';
import { fetchPopularMovies } from '@/services/api';

export default createStore({
  state: {
    movies: [],
    isLoading: false,
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
    ADD_TO_FAVORITES(state, movie) {
      state.favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    REMOVE_FROM_FAVORITES(state, movieId) {
      state.favorites = state.favorites.filter((m) => m.id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }
  },
  actions: {
    async loadMovies({ commit }) {
      commit('SET_LOADING', true);
      const data = await fetchPopularMovies();
      commit('SET_MOVIES', data);
      commit('SET_LOADING', false);
    },
    addToFavorites({ commit }, movie) {
      commit('ADD_TO_FAVORITES', movie);
    },
    removeFromFavorites({ commit }, movieId) {
      commit('REMOVE_FROM_FAVORITES', movieId);
    }
  },
  getters: {
    movieList: (state) => state.movies,
    isLoading: (state) => state.isLoading,
     favoriteList: (state) => state.favorites,
    isFavorite: (state) => (id) => state.favorites.some((m) => m.id === id)
  }
});
