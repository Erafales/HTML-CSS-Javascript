const btn = document.getElementById("btnAñadir")
const listaTareas = document.getElementById("listaTareas")
const contenidoTarea = document.getElementById("nombreTarea")
    
btn.addEventListener('click', function(){
    if (contenidoTarea.value === "") {
        alert('Inserta un valor para añadir una tarea')
    } else {
        var tarea = document.createElement('p')
        tarea.innerHTML = contenidoTarea.value.toUpperCase()
        listaTareas.appendChild(tarea)
        contenidoTarea.value=""
        tarea.addEventListener('click', function(){
            tarea.style.textDecoration = 'line-through'
        })
        tarea.addEventListener('dblclick', function(){
            listaTareas.removeChild(tarea)
        })
    }
    
})
