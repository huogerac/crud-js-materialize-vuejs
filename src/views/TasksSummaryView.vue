<template>
  <v-main class="overflow-hidden mt-4">
    <v-container>
      <h2>Resumo das tarefas</h2>
      <div v-for="item in data" :key="item.group">
        <h3>
          {{ item.group }} <v-chip class="ma-2"> {{ item.tasks }} </v-chip>
        </h3>
        <v-progress-circular
          :rotate="360"
          :size="100"
          :width="15"
          :value="item.percent"
          color="pink"
        >
          {{ value }}
        </v-progress-circular>
      </div>
      <div class="my-4">
        <v-btn rounded color="primary" dark :to="{ name: 'taskList' }">
          Ver todas tarefas
        </v-btn>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import TasksApi from '@/api/tasks.api.js'

export default {
  data: () => {
    return {
      summary: {},
      data: [],
    }
  },
  methods: {
    getSummary() {
      TasksApi.summary().then((data) => {
        console.log('carregando 2', data)
        this.summary = data
        for (const [key, value] of Object.entries(data)) {
          const totalTasks = value.pending + value.working + value.done
          let obj = {
            group: key,
            tasks: totalTasks,
            percent: 100 - (value.pending / totalTasks) * 100,
          }
          this.data.push(obj)
        }
      })
    },
  },
  created() {
    console.log('carregando 1')
    this.getSummary()
  },
}
</script>
