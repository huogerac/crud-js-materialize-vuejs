import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  getProjects: (callback) => {
    axios
      .get("/projects")
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
};
