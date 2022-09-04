var app = new Vue({
  el: "#app",
  data: {
    tasks: [],
    projects: [],
    form: {
        cabecalho: 'Nova tarefa',
        btn: 'Adicionar',
        title: '',
        project: 1,
        date: new Date().toLocaleString('pt').split(' ')[0]
    },
    exibir: {
      lista: true,
      forms: false,
    }
  },
  methods: {
    obterTarefas() {
      getTasks((tasks) => {
        this.tasks = tasks;
      });
    },
    mostrarNovaTarefa() {
      this.exibir.forms = true
      this.exibir.lista = false
    },
    mostrarTarefa(tarefaId) {
      getTask(tarefaId, (tarefa) => {
        this.form.title = tarefa.title
        this.form.project = tarefa.project
        this.form.date = tarefa.date
        this.form.id = tarefa.id
        this.exibir.forms = true
        this.exibir.lista = false
        this.form.cabecalho = `Alterar tarefa #${tarefa.id}`
        this.form.btn = 'Alterar'
      })
    },
    salvarNovaTarefa() {
      const { title, project, date } = this.form
      createTask(title, project, date, (data) => {
        this.obterTarefas()
        this.exibir.forms = false
        this.exibir.lista = true
      })
    },
    salvarTarefa(tarefaId) {
      const { title, project, date } = this.form
      updateTask(tarefaId, title, project, date, (tarefa) => {
        console.log(`tarefa alterada: ${tarefa.id}`)
        this.obterTarefas()
        this.exibir.forms = false
        this.exibir.lista = true
      })
    }
  },
  created() {
    this.obterTarefas()
  },
});
