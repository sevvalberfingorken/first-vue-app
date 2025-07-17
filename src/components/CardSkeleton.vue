<!-- components/CardSkeleton.vue -->
<template>
  <v-card class="skeleton-card" max-width="344" outlined>
    <v-skeleton-loader type="image" height="200px" />

    <v-card-title>
      <v-skeleton-loader type="text" width="60%"></v-skeleton-loader>
    </v-card-title>

    <v-card-subtitle>
      <v-skeleton-loader type="text" width="40%"></v-skeleton-loader>
    </v-card-subtitle>

    <v-card-text>
      <v-skeleton-loader type="text" width="100%"></v-skeleton-loader>
      <v-skeleton-loader type="text" width="90%"></v-skeleton-loader>
      <v-skeleton-loader type="text" width="80%"></v-skeleton-loader>
    </v-card-text>

    <v-card-actions>
      <v-skeleton-loader type="button" width="120px"></v-skeleton-loader>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.skeleton-card {
  background-color: #1e1e1e;
  border-radius: 12px;
}
</style>
