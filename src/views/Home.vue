<template>
  <v-container fluid class="home-container">
    <div class="content-wrapper">
      <v-row class="card-grid">
        <template v-if="isLoading">
          <v-col
            v-for="n in 8"
            :key="n"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="d-flex justify-center"
          >
            <CardSkeleton />
          </v-col>
        </template>

        <template v-else>
          <v-col
            v-for="movie in movieList"
            :key="movie.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="d-flex justify-center"
          >
            <Card :movie="movie" @added="onAdded" @removed="onRemoved" />
          </v-col>
        </template>
      </v-row>
    </div>

    <v-snackbar v-model="showSnackbar" :timeout="5000" :color="snackbarColor">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<script>
import Card from '@/components/Card.vue';
import CardSkeleton from '@/components/CardSkeleton.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: { Card, CardSkeleton },
  data() {
    return {
      showSnackbar: false,
      snackbarMessage: '',
      snackbarColor: 'green'
    };
  },
  computed: {
    ...mapGetters(['movieList', 'isLoading'])
  },
  methods: {
    ...mapActions(['loadMovies']),
    onAdded(title) {
      this.snackbarMessage = `"${title}" Added to favorites!`;
      this.snackbarColor = 'green';
      this.showSnackbar = false;
      setTimeout(() => {
        this.showSnackbar = true;
      }, 10);
    },
    onRemoved(title) {
      this.snackbarMessage = `"${title}" Removed from favorites!`;
      this.snackbarColor = 'red';
      this.showSnackbar = false;
      setTimeout(() => {
        this.showSnackbar = true;
      }, 10);
    }
  },
  created() {
    this.loadMovies();
  }
};
</script>

<style scoped>
.v-row {
  row-gap: 32px;
  justify-content: center;
}

.v-snackbar {
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 16px;
  max-width: 320px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.v-snackbar.green {
  background-color: #2e7d32 !important;
  color: #ffffff;
}

.v-snackbar.red {
  background-color: #c62828 !important;
  color: #ffffff;
}

.home-container {
  background-color: #141414;
  min-height: 100vh;
  padding-top: 32px;
  padding-bottom: 32px;
  color: #ffffff;
}

.content-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}

.card-grid {
  row-gap: 24px;
  column-gap: 16px;
}
</style>
