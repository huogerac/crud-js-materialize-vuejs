
// GET lista de projetos
function getProjects(cb) {
  axios
    .get("/projects")
    .then((response) => {
      cb(response.data)
    })
    .catch((error) => {
      console.log("error:", error);
    });
}
