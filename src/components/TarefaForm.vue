<template>
  <div>
    <h2>{{ cabecalho }}</h2>
    <div class="row">
      <div class="input-field col s12">
        <input
          placeholder="Entre com uma tarefa"
          id="title"
          type="text"
          class="validate"
          :value="task.title"
          @input="title = $event.target.value"
          :disabled="btnLabel == 'Excluir'"
        />
        <label for="title">Tarefa</label>
      </div>
      <div class="input-field col s6">
        <input
          placeholder="Entre com um projeto"
          id="project"
          type="text"
          class="validate"
          :value="task.project"
          @input="project = $event.target.value"
          :list="'projectsList'"
          :disabled="btnLabel == 'Excluir'"
        />
        <label for="project">Project</label>
        <datalist id="projectsList">
          <option v-for="p in projects" :key="p.id" :value="p.project"></option>
        </datalist>
      </div>
      <div class="input-field col s6">
        <input
          type="text"
          class="datepicker"
          :value="task.date"
          @input="date = $event.target.value"
          :disabled="btnLabel == 'Excluir'"
        />
        <label for="date">Data Vencimento</label>
      </div>
      <div class="col s12">
        <button
          v-if="btnLabel == 'Adicionar'"
          @click="criarTarefa"
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          {{ btnLabel }}
        </button>
        <button
          v-else-if="btnLabel == 'Excluir'"
          @click="excluirTarefa"
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          {{ btnLabel }}
        </button>
        <button
          v-else
          @click="salvarTarefa"
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          {{ btnLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarefaList",
  props: ["task", "btnLabel", "cabecalho", "projects"],
  data: () => {
    return {
      title: "",
      project: "",
      date: "",
    };
  },
  methods: {
    criarTarefa() {
      this.$emit("criarTarefaClick", this.taskData);
    },
    salvarTarefa() {
      this.$emit("salvarTarefaClick", this.taskData);
    },
    excluirTarefa() {
      this.$emit("excluirTarefaClick", this.taskData);
    },
  },
  computed: {
    taskData() {
      return {
        id: this.task.id,
        title: this.title,
        project: this.project,
        date: this.date,
      };
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
