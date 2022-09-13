<template>
  <v-main>
    <PageBar />
    <router-view />
    <PageFooter />
  </v-main>
</template>

<script>
import PageBar from '@/components/PageBar.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  data: () => ({}),
  components: {
    PageBar,
    PageFooter,
  },
}
</script>
