<template>
  <v-main class="overflow-hidden">
    <v-container>
      <v-row>
        <v-col class="pa-1" cols="12" v-for="task in tasks" :key="task.id">
          <v-card>
            <v-card-text>
              <div>#{{ task.id }}</div>
              <p class="ma-0 pa-0 text-h5 text--primary">{{ task.title }}</p>
            </v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-row align="center" justify="end">
                  <v-btn icon color="grey"><v-icon>fas fa-pen</v-icon></v-btn>
                  <v-btn icon color="grey"
                    ><v-icon>far fa-trash-alt</v-icon></v-btn
                  >
                </v-row>
              </v-list-item>
            </v-card-actions>
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
      tasks: [
        {
          id: 1,
          title: 'Task 1',
        },
        {
          id: 2,
          title: 'Task Two',
        },
      ],
    }
  },
}
</script>
