<template>
  <v-container fluid class="favorites-page">
    <div class="content-wrapper">
      <h1>Favorite Films</h1>

      <!-- Dialog -->
      <v-dialog v-model="confirmDialog" persistent max-width="400">
        <v-card>
          <v-card-text class="text-h5">
            Are you sure you want to remove "{{ filmToRemove?.title }}" from favorites?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="confirmDialog = false">Cancel</v-btn>
            <v-btn color="red" text @click="removeConfirmed">Yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Boş mesaj -->
      <div v-if="favoriteList.length === 0" class="empty-message">
        You haven't added any favorite movies yet.
      </div>

      <!-- Kartlar -->
      <v-row v-else>
        <v-col
          v-for="movie in favoriteList"
          :key="movie.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="d-flex justify-center"
        >
          <Card :movie="movie" @request-remove="onDeleteRequested" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Card from '@/components/Card.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: { Card },
  data() {
    return {
      confirmDialog: false,
      filmToRemove: null
    };
  },
  computed: {
    ...mapGetters(['favoriteList'])
  },
  methods: {
    ...mapActions(['removeFromFavorites']),
    onDeleteRequested(movie) {
      this.filmToRemove = movie;
      this.confirmDialog = true;
    },
    removeConfirmed() {
      this.removeFromFavorites(this.filmToRemove.id);
      this.confirmDialog = false;
    }
  }
};
</script>

<style scoped>
.favorites-page {
  background-color: #141414;
  min-height: 100vh;
  padding-top: 32px;
  padding-bottom: 32px;
  color: #ffffff;
}

.content-wrapper {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 16px;
}

h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
}

.v-row {
  row-gap: 32px;
}

/* Dialog stil */
.v-dialog .v-card {
  background-color: #1e1e1e;
  color: #ffffff;
  border-radius: 12px;
}

.v-dialog .v-card-title {
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}

.v-dialog .v-btn {
  text-transform: none;
  font-weight: 500;
}

.v-dialog .v-btn:hover {
  opacity: 0.8;
}

.empty-message {
  color: #bbbbbb;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-top: 60px;
  font-style: italic;
}
</style>
