import axios from 'axios';

const API_KEY = 'bf747271ccfbf45b57a7a11a6ff61ac9';
const API_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`;

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.results;
  } catch (error) {
    console.error('Hata:', error);
    return [];
  }
};
