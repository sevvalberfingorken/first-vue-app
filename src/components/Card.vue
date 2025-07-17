<template>
<!--   {{ movie }} -->
    <v-card class="movie-card" max-width="344" outlined>
        <v-img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" height="200px" />
         <v-icon :icon="isInFavorites ? 'mdi-heart' : 'mdi-heart-outline'" @click.stop="toggleFavorite" color="red" 
                class="favorite-icon " />
        <v-card-title>
            {{ movie.title }}
            <v-spacer />
           
        </v-card-title>
        <v-card-subtitle>Rating: {{ movie.vote_average }}</v-card-subtitle>
        <v-card-text>{{ movie.overview.slice(0, 100) }}...</v-card-text>
        <v-card-actions>
            <v-btn color="primary" @click="goToDetail">Take a look at the details</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    movie: Object
  },
  computed: {
    ...mapGetters(['isFavorite']),
    isInFavorites() {
      return this.isFavorite(this.movie.id);
    }
  },
  methods: {
    ...mapActions(['addToFavorites', 'removeFromFavorites']),
    toggleFavorite() {
      if (this.isInFavorites) {
        this.removeFromFavorites(this.movie.id);
        this.$emit('removed', this.movie.title);
      } else {
        this.addToFavorites(this.movie);
        this.$emit('added', this.movie.title);
      }
    },
    goToDetail() {
      this.$router.push(`/movie/${this.movie.id}`);
    }
  }
};
</script>

<style scoped>
.movie-card {
  background-color: #1e1e1e;
  color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  overflow: hidden;
}

.movie-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.v-img {
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin-top: 8px;
}

.v-card-title {
  font-weight: bold;
  font-size: 16px;
  align-items: center;
}

.v-card-subtitle {
  font-size: 14px;
  color: #b0b0b0;
  margin-top: -8px;
}

.v-card-text {
  font-size: 14px;
  color: #dddddd;
  line-height: 1.4;
  max-height: 60px;
  /* overflow: hidden; */
}

.v-card-actions {
  justify-content: flex-end;
  margin-top: 12px;
}

.v-btn {
  text-transform: none;
  font-weight: 500;
  font-size: 14px;
}

.v-icon {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.v-icon:hover {
  transform: scale(1.2);
}
.movie-card {
  position: relative;
}

.favorite-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  font-size: 28px;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0.8;
}

.favorite-icon:hover {
  opacity: 1;
  transform: scale(1.1);
}

</style>

