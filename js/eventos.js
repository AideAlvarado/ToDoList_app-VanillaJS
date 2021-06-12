//capturo los elementos:
let taskInput = document.querySelector("#tituloTarea");
let priority = document.querySelector("#prioridad");
let save = document.querySelector("#guardar");
let parrafo = document.getElementById("mensaje");
let prioSelect = document.getElementById("prioridadSelect");
let search = document.getElementById("buscar");

//guardo la tarea:

function addTask(event) {
  /* console.log(event); */
  event.preventDefault();
  let task = taskInput.value;
  let priorityTask = priority.value;
  if (task == "") {
    parrafo.textContent = "You must enter a task";
  } else if (priorityTask == "") {
    parrafo.textContent = "You must select a priority on the menu";
  } else {
    /* console.log(`task ${task} , prioridad ${priorityTask}`); */
    let maximo = 0;
    for (i = 0; i < listaTareas.length; i++) {
      if (listaTareas[i].idTarea > maximo) {
        maximo = listaTareas[i].idTarea;
      } else {
        /* console.log("elemento ", i, listaTareas[i], listaTareas[i].id); */
      }
    }

    /* console.log("maximo", maximo); */
    listaTareas.push({
      idTarea: maximo + 1,
      titulo: task,
      prioridad: priorityTask,
    });
    /* console.log(listaTareas); */
    localStorage.setItem("modelo", JSON.stringify(listaTareas));
    showList(listaTareas);
  }
}
// limpiar el parrafo si tiene mensajes
function limpiarParrafo() {
  if (parrafo.textContent >= "") {
    parrafo.textContent = "";
  }
}
taskInput.addEventListener("click", limpiarParrafo);
priority.addEventListener("change", limpiarParrafo);

function seleccionPrioridad(event) {
  console.log(event);
  console.log("prioridad >", prioSelect.value, "<");
  let filterT = prioSelect.value;
  filter = filterT.toLowerCase();
  if (filterT != "") {
    const filterList = priorityFilter(filterT, listaTareas);
    console.log(filterList);
    showList(filterList);
  } else {
    showList(listaTareas);
  }
}

// showList(listaTareas);
prioSelect.addEventListener("change", seleccionPrioridad);
guardar.addEventListener("click", addTask);
console.log("search", search);
search.addEventListener("keyup", () => {
  console.log(search.value);
  const filterList = substringFilter(search.value, listaTareas);
  showList(filterList);
});
