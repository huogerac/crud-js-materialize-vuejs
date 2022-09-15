<template>
  <v-main class="gradiente-bg">
    <router-view />
    <PageFooter />
  </v-main>
</template>

<script>
import PageFooter from '@/components/PageFooter.vue'

export default {
  data: () => ({}),
  components: {
    PageFooter,
  },
}
</script>

<style scoped>
.gradiente-bg {
  background-image: linear-gradient(
    to left top,
    #fb6376,
    #e05781,
    #c05087,
    #9d4b88,
    #794782,
    #6c4681,
    #5e457e,
    #50437b,
    #544682,
    #584988,
    #5c4c8f,
    #604f96
  );
}
</style>
