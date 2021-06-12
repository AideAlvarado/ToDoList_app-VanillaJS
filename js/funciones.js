let taksList = document.querySelector("#tareas");

//para eliminar tarea:

function deleteTask(event) {
  /* console.log(event); */
  // arreglamos el bug sutil, de hacer click en el icono
  let deleteT =
    event.target.nodeName === "A"
      ? event.target.parentNode
      : event.target.parentNode.parentNode;

  console.log(event.target.nodeName);
  console.log("borro una tarea", deleteT);
  deleteT.parentNode.removeChild(deleteT); //
  console.log("buscando el delete", event.target);
  console.log("Event target id", event.parentNode);

  let positionDelete = listaTareas.findIndex((item) => {
    return item.idTarea === parseInt(deleteT.id);
  });
  logdebug(`positionDelete : ${positionDelete}`);
  listaTareas.splice(positionDelete, 1);
  localStorage.setItem("modelo", JSON.stringify(listaTareas));
}

//pinto la lista de tareas:

function showList(plistaTareas) {
  // console.log("showList plistaTareas", plistaTareas);
  taksList.innerHTML = "";
  for (let tarea of plistaTareas) {
    let article = document.createElement("article");
    article.id = tarea.idTarea;
    article.classList.add(tarea.prioridad, "paper");
    let header = document.createElement("h2");
    header.innerHTML = tarea.titulo;
    article.appendChild(header);
    let a = document.createElement("a");
    let textoEnlace = document.createTextNode("");

    let icono = document.createElement("i");
    icono.id = tarea.idTarea + "i";
    icono.classList.add("fa", "fa-trash-alt");

    a.appendChild(icono);
    a.appendChild(textoEnlace);
    a.href = "#";
    a.addEventListener("click", deleteTask);
    article.appendChild(a);
    taksList.appendChild(article);
    /* console.log(a); */
  }
}
showList(listaTareas);

//filtrar tarea por prioridad:

function priorityFilter(pPrioridad, pListaTareas) {
  let listaFiltrada = new Array();
  listaFiltrada = pListaTareas.filter(
    (tarea) => tarea.prioridad === pPrioridad
  );

  return listaFiltrada;
}

//filtrar tarea por subcadena

function substringFilter(pString, pListaTareas) {
  let listaFiltrada = new Array();
  listaFiltrada = pListaTareas.filter(
    (tarea) => tarea.titulo.indexOf(pString) != -1
  );

  return listaFiltrada;
}
