import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  getTasks: (callback) => {
    axios
      .get("/tasks")
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
  getTask: (taskId, callback) => {
    axios
      .get(`/tasks/${taskId}`)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
  createTask: (title, project, date, callback) => {
    console.log(`${title}, ${project}, ${date}`);
    const taskData = {
      title: title,
      project: project,
      dueTo: date,
    };
    axios
      .post(`/tasks`, taskData)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("erro:", error);
      });
  },
  updateTask: (taskId, title, project, date, callback) => {
    const taskData = {
      title: title,
      project: project,
      dueTo: date,
    };
    axios
      .put(`/tasks/${taskId}`, taskData)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("erro:", error);
      });
  },
  updateTaskDate: (taskId, date) => {
    const taskData = {
      dueTo: date,
    };
    axios
      .patch(`/tasks/${taskId}`, taskData)
      .then((response) => {
        console.log("Tarefa salva", response.data);
      })
      .catch((error) => {
        console.log("erro:", error);
      });
  },
  deleteTask: (taskId, callback) => {
    axios
      .delete(`/tasks/${taskId}`)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("erro:", error);
      });
  },
};
