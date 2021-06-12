var listaTareas = new Array();
console.log("localStorage", localStorage.getItem("modelo"));
let DEBUG = false;
function logdebug(s) {
  if (DEBUG) {
    console.log(s);
  }
}
if (localStorage.getItem("modelo") && DEBUG === false) {
  listaTareas = JSON.parse(localStorage.getItem("modelo"));
} else {
  listaTareas = [
    {
      idTarea: 1,
      titulo: "keep learning javascript",
      prioridad: "urgent",
    },
    {
      idTarea: 2,
      titulo: "don't get frustrated when trying to code ",
      prioridad: "daily",
    },
    {
      idTarea: 3,
      titulo: "not giving up",
      prioridad: "monthly",
    },
    {
      idTarea: 4,
      titulo: "build something",
      prioridad: "urgent",
    },
  ];
  localStorage.setItem("modelo", JSON.stringify(listaTareas));
  console.log("guardado el modelo");
}
