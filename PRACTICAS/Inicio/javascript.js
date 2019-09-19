const salones = [{
    nombreAula: 'B1',
    capacidadAula: '20',
    grupoAsignado: 'ISDI'
},{
    nombreAula: 'B2',
    capacidadAula: '30',
    grupoAsignado: 'Fisicos'
}]
//eres = true;
dato = true;
const alumnosRegistrados = [];
const container = document.getElementById('tarjetasDinamicas')
const alumnoDinamico = document.getElementById('alumnoDinamicos')
const materias = document.getElementsByClassName('clasesEscuela')

function Saludos(nombre){
    var checkedvalue = '';
    if(document.getElementById('r1').checked){
        valueTipo = document.getElementById('r1').value; 
    }else{
        valueTipo = document.getElementById('r2').value;
    }
    var clasesEscuela = document.getElementsByClassName('clasesEscuela');
    for (var i = 0; clasesEscuela[i]; ++i){
        if(clasesEscuela[i].checked){
            checkedvalue = checkedvalue + clasesEscuela[i].value + ', ';
        }
    }
        

    if (dato != false ) {
        salones.forEach(salon => {
            const content = '<div class="p-2"><div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Salon:'+salon.nombreAula+'</h5> <h6 class="card-subtitle mb-2 text-muted" >Grupo Asignado:'+salon.grupoAsignado+'</h6><p class="card-text"> Capacidad del Salon :'+salon.capacidadAula+'</p><a href="#" class="card-link">Revisar</a> </div></div></div>'
            container.innerHTML +=content;
            
        })
    }
    dato = false;
        
    
    
    //if (eres != false) {
        document.getElementById('p1').innerHTML = 'hola  ' + nombre;     
        document.getElementById('p2').innerHTML = 'Tu eres  ' + valueTipo;    
        document.getElementById('p3').innerHTML = 'Tus Clases Son:   ' + checkedvalue;
    //}
    //eres = false;
}
function Registrar(){
    alumnoDinamico.innerHTML = ' '; 
    usuario = document.getElementById('nombre').value;
    correo = document.getElementById('Email').value;
    password = document.getElementById('password').value;
    var materiasSeleccionadas = " ";

    for (var i = 0; materias[i]; i++){
        if (materias[i].checked){
            materiasSeleccionadas = materiasSeleccionadas + materias[i].value + "  ";
        }
    }
    alumnoNuevo = {
        usuario,
        correo,
        password,
        materiasSeleccionadas
    }
    alumnosRegistrados.push(alumnoNuevo);
    alumnosRegistrados.forEach(alumno => {
        const content = '<div class="p-2"><div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Usuario:  '+alumno.usuario+'</h5> <h6 class="card-subtitle mb-2 text-muted" >Correo:  '+alumno.correo+'</h6><p class="card-text"> Materias:  '+alumno.materiasSeleccionadas+'</p><a href="#" class="card-link">Revisar</a> </div></div></div>'
        alumnoDinamico.innerHTML +=content;
        
        
    }); 
}