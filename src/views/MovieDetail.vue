<template>
  <v-container fluid class="movie-detail-page">
    <div class="content-wrapper" v-if="movie">
      <h1>{{ movie.title }}</h1>
      <v-img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" height="400px" />
      <p><strong>Rating:</strong> {{ movie.vote_average }}</p>
      <p>{{ movie.overview }}</p>
      <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
    </div>
  </v-container>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      movie: null
    };
  },
  async created() {
    const id = this.$route.params.id;
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc0NzI3MWNjZmJmNDViNTdhN2ExMWE2ZmY2MWFjOSIsIm5iZiI6MTc1MTM2NTk2Ni43NDcsInN1YiI6IjY4NjNiOTRlMzg2OWIwYTg1ZDJiZTFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0iG24p7Jo9HfIZetaLosQpbF57KyVsbcnl2MT-ovW6A'
      }
    });
    this.movie = res.data;
  }
};
</script>
<style scoped>
.movie-detail-page {
  background-color: #141414;
  min-height: 100vh;
  padding-top: 40px;
  padding-bottom: 40px;
  color: #ffffff;
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
  color: #ffffff;
}

.v-img {
  border-radius: 12px;
  margin: 0 auto 24px auto;
  max-width: 100%;
  object-fit: cover;
}

p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
  color: #dddddd;
}

p strong {
  color: #ffffff;
}
</style>

