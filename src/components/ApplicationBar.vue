<template>
  <v-app-bar app color="#141414" dark flat>
    <v-toolbar-title class="app-title">MOVIES</v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- Favoriler Kalp İkonu -->
    <v-btn icon class="icon-btn" @click="goToFavorites">
      <v-icon color="red lighten-2">mdi-heart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goToFavorites() {
      this.$router.push('/favorites');
    }
  }
};
</script>

<style scoped>
.app-title {
  font-size: 20px;
  font-weight: bold;
  padding-left: 16px;
  color: white;
  letter-spacing: 1px;
}

.icon-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease;
}
</style>