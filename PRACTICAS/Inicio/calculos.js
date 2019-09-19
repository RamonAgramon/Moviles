var calificacion = 0;
//materiasEvaluar es un arreglo
var materiasEvaluar = document.getElementsByClassName('materiasEvaluar');
//materias dinamicas espacio de una targeta 
var materias = document.getElementById('materiasDinamicas');
const materiasRegistradas =[];

function promedio() {
    // i posicion
    //for recorre el arreglo dandole el valor a i sumandole una cada vez que lo recorre
    //asta llegar al final de la longitud(length).
    for(var i=0; materiasEvaluar[i]; i++){
        calificacion += parseInt(materiasEvaluar[i].value);
    }

    console.log('Suma es: '+ calificacion);

    var Prom = calificacion / materiasEvaluar.length;
    alert('Tu promedio es: ' + Prom);

    materias.innerHTML = '';
    usuario = document.getElementById('nombre').value;
    carrera = document.getElementById('carrera').value;
    materia1 = document.getElementById('redes').value;
    materia2 = document.getElementById('basesDatos').value;
    materia3 = document.getElementById('matematicas').value;
    materia4 = document.getElementById('movil').value;
    materia5 = document.getElementById('web').value;
//almacena variables de diferente vlaor (NUMEROS Y TEXTOS)
//Alumnos nuevos Objetos ({}= objetos []=Arreglo)
    alumnoNuevo = {
        usuario,
        carrera,
        materia1,
        materia2,
        materia3,
        materia4,
        materia5,
        calificacion,
        Prom
    }
//guarda los objetos el un arreglo
    materiasRegistradas.push(alumnoNuevo);
    materiasRegistradas.forEach(alumno =>{
        const content = '<div class="p-2"> <div class="card" style=" width: 18rem;"> <div class="card-body"> <h5 class="card-title">Usuario:'+ alumno.usuario +'</h5> <h6 class="card-subtitle mb-2 text-muted">Carrera:'+alumno.carrera+'</h6> <p class="card-text">Calificacion redes:'+alumno.materia1+'</p> <p class="card-text">Calificacion base de datos:'+alumno.materia2+'</p> <p class="card-text">Calificacion matematicas:'+alumno.materia3+'</p> <p class="card-text">Calificacion programacion movil:'+alumno.materia4+'</p> <p class="card-text">Calificacion programacion web:'+alumno.materia5+'</p> <p class="card-text">Calificacion:'+alumno.calificacion+'</p> <p class="card-text">Promedio:'+alumno.Prom+'</p> <a href="#" class="card-link">Revisar</a> </div> </div> </div>'
         materias.innerHTML += content;
    });
    calificacion = 0;
    resultado = 0;
}