<template>
  <v-main class="overflow-hidden mt-4">
    <v-container>
      <v-row>
        <v-col class="pa-1" cols="12">
          <v-card>
            <v-card-text>
              <div>#{{ taskId }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => {
    return {
      taskId: 0,
    }
  },
  created() {
    this.taskId = this.$route.params.id || 0
  },
}
</script>
