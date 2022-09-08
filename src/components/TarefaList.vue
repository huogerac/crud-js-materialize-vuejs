<template>
  <ul class="collection">
    <li v-for="task in tasks" :key="task.id" class="collection-item">
      <h5>
        {{ task.title }}
        <span class="task-badge right-align">{{ task.project }}</span>
      </h5>

      <p>
        <button
          @click="editar(task.id)"
          class="waves-effect waves-light btn-small"
        >
          Editar
        </button>
        <button
          @click="excluir(task.id)"
          class="waves-effect waves-light btn-small"
        >
          Excluir
        </button>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TarefaList",
  props: ["tasks"],
  methods: {
    editar(tarefaId) {
      this.$emit("editarClick", tarefaId);
    },
    excluir(tarefaId) {
      this.$emit("excluirClick", tarefaId);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-badge {
  background-color: #929292;
  color: white;
  padding: 6px;
  border-radius: 6px;
  font-size: 0.8rem;
  vertical-align: middle;
}
</style>
