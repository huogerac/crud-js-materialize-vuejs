<template>
  <div id="app">
    <nav class="orange darken-2">
      <div class="nav-wrapper"></div>
    </nav>

    <div class="container">
      <div v-show="exibir.lista" class="section task-list">
        <div class="row">
          <div class="col s12">
            <input
              type="text"
              class="search"
              placeholder="Pesquisar tarefa..."
              name="pesquisar"
            />
          </div>
        </div>
        <!--   Icon Section   -->
        <div class="row">
          <div class="col s12">
            <!-- New tasks area-->

            <tarefa-list
              :tasks="tasks"
              @editarClick="mostrarTarefa"
              @excluirClick="mostrarTarefaExcluir"
            ></tarefa-list>
          </div>
        </div>
      </div>

      <!-- FORM DE TAREFA -->
      <div v-show="exibir.forms" class="section task-add">
        <tarefa-form
          :task="form"
          :btnLabel="form.btn"
          :cabecalho="form.cabecalho"
          :projects="projects"
          @criarTarefaClick="salvarNovaTarefa"
          @salvarTarefaClick="salvarTarefa"
          @excluirTarefaClick="excluirTarefa"
        ></tarefa-form>
      </div>
      <!-- FIM ADD-->
      <div class="add" v-show="!exibir.forms">
        <button
          class="btn-floating btn-large waves-effect waves-light red"
          @click="mostrarNovaTarefa"
        >
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TaskApi from "../taskApi.js";
import ProjetoApi from "../projetoApi.js";
import TarefaList from "../components/TarefaList.vue";
import TarefaForm from "../components/TarefaForm.vue";

export default {
  name: "HomeTarefa",
  components: {
    TarefaList,
    TarefaForm,
  },
  data: function () {
    return {
      tasks: [],
      projects: [],
      form: {
        cabecalho: "Nova tarefa",
        btn: "Adicionar",
        title: "",
        project: "",
        date: new Date().toLocaleString("pt").split(" ")[0],
      },
      exibir: {
        lista: true,
        forms: false,
      },
    };
  },
  methods: {
    obterTarefas() {
      TaskApi.getTasks((tasks) => {
        this.tasks = tasks;
      });
    },
    obterProjetos() {
      ProjetoApi.getProjects((projetos) => {
        this.projects = projetos;
      });
    },
    mostrarNovaTarefa() {
      this.exibir.forms = true;
      this.exibir.lista = false;
      this.form.cabecalho = `Nova tarefa`;
      this.form.btn = "Adicionar";
      this.form.title = "";
      this.form.date = new Date().toLocaleString("pt").split(" ")[0];
    },
    mostrarTarefa(tarefaId) {
      this.exibir.forms = true;
      this.exibir.lista = false;
      this.form.btn = "Alterar";
      TaskApi.getTask(tarefaId, (tarefa) => {
        this.form.cabecalho = `Alterar tarefa #${tarefa.id}`;
        this.form.title = tarefa.title;
        this.form.project = tarefa.project;
        this.form.date = tarefa.date;
        this.form.id = tarefa.id;
      });
    },
    mostrarTarefaExcluir(tarefaId) {
      this.exibir.forms = true;
      this.exibir.lista = false;
      this.form.btn = "Excluir";
      TaskApi.getTask(tarefaId, (tarefa) => {
        this.form.cabecalho = `Confirma excluir a tarefa #${tarefa.id}`;
        this.form.title = tarefa.title;
        this.form.project = tarefa.project;
        this.form.date = tarefa.date;
        this.form.id = tarefa.id;
      });
    },
    salvarNovaTarefa(task) {
      TaskApi.createTask(task.title, task.project, task.date, () => {
        this.obterTarefas();
        this.exibir.forms = false;
        this.exibir.lista = true;
      });
    },
    salvarTarefa(task) {
      console.log("recebendo:", task);
      TaskApi.updateTask(
        task.id,
        task.title,
        task.project,
        task.date,
        (tarefa) => {
          console.log(`tarefa alterada: ${tarefa.id}`);
          this.obterTarefas();
          this.exibir.forms = false;
          this.exibir.lista = true;
        }
      );
    },
    excluirTarefa(task) {
      TaskApi.deleteTask(task.id, (tarefa) => {
        console.log(`tarefa deletada: ${tarefa.id}`);
        this.obterTarefas();
        this.exibir.forms = false;
        this.exibir.lista = true;
      });
    },
  },
  created() {
    this.obterTarefas();
    this.obterProjetos();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
