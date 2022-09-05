var app = new Vue({
  el: "#app",
  data: {
    tasks: [],
    projects: [],
    form: {
        cabecalho: 'Nova tarefa',
        btn: 'Adicionar',
        title: '',
        project: '',
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
    obterProjetos() {
      getProjects((projetos) => {
        this.projects = projetos
      })
    },
    mostrarNovaTarefa() {
      this.exibir.forms = true
      this.exibir.lista = false
      this.form.cabecalho = `Nova tarefa`
      this.form.btn = 'Adicionar'
      this.form.title = ''
      this.form.date = new Date().toLocaleString('pt').split(' ')[0]
    },
    mostrarTarefa(tarefaId) {
      this.exibir.forms = true
      this.exibir.lista = false
      this.form.btn = 'Alterar'
      getTask(tarefaId, (tarefa) => {
        this.form.cabecalho = `Alterar tarefa #${tarefa.id}`
        this.form.title = tarefa.title
        this.form.project = tarefa.project
        this.form.date = tarefa.date
        this.form.id = tarefa.id
      })
    },
    mostrarTarefaExcluir(tarefaId) {
      this.exibir.forms = true
      this.exibir.lista = false
      this.form.btn = 'Excluir'
      getTask(tarefaId, (tarefa) => {
        this.form.cabecalho = `Confirma excluir a tarefa #${tarefa.id}`
        this.form.title = tarefa.title
        this.form.project = tarefa.project
        this.form.date = tarefa.date
        this.form.id = tarefa.id
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
    },
    excluirTarefa(tarefaId) {
      deleteTask(tarefaId, (tarefa) => {
        console.log(`tarefa deletada: ${tarefa.id}`)
        this.obterTarefas()
        this.exibir.forms = false
        this.exibir.lista = true
      })
    }
  },
  created() {
    this.obterTarefas()
    this.obterProjetos()
  },
});
