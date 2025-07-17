<template>
  <v-app>
    <ApplicationBar />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import ApplicationBar from '@/components/ApplicationBar.vue'
import Footer from '@/components/Footer.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    ApplicationBar,
    Footer
  },
    computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount'])
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['incrementAsync'])
  }
}
</script>


<style>
body {
  margin: 0;
}
</style>
