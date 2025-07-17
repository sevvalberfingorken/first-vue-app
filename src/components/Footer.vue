<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
This website is designed by @sevvalberfingorken as her first ever vue project.</div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>
<script setup>
  const icons = [
    'mdi-linkedin',
    'mdi-github',
  ]
</script>
<style scoped>
.v-footer {
  background-color: #141414 !important;
  color: #dddddd;
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.v-footer .v-btn {
  color: #ffffff;
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.2s ease;
}

.v-footer .v-btn:hover {
  opacity: 1;
  transform: scale(1.2);
}

.v-divider {
  background-color: rgba(255, 255, 255, 0.2);
  margin-top: 16px;
  margin-bottom: 16px;
}

.text-caption {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
  color: #aaaaaa;
}

.v-footer div:last-child {
  margin-top: 16px;
  font-size: 13px;
  color: #888888;
}
</style>
