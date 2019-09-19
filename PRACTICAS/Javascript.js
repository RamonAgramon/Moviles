function saludos(nombre){
    if(document.getElementById('r1').checked){
        valueTipo = document.getElementById('r1').value; 
    }else{
        valueTipo = document.getElementById('r2').value;
    }

    if(document.getElementById('m1').checked){
        valueMateria = document.getElementById('m1').value + '  '; 
    }if(document.getElementById('m2').checked){
        valueMateria = valueMateria + document.getElementById('m2').value + '  ';
    }if(document.getElementById('m3').checked){
        valueMateria = valueMateria + document.getElementById('m3').value + '  ';
    }if(document.getElementById('m4').checked){
        valueMateria = valueMateria + document.getElementById('m4').value + '  ';
    }if(document.getElementById('m5').checked){
        valueMateria = valueMateria + document.getElementById('m5').value + '  ';
    }
    document.getElementById('p1').innerHTML = 'hola  ' + nombre;
    document.getElementById('p2').innerHTML = 'Tu eres  ' + valueTipo;
    document.getElementById('p3').innerHTML = 'Tus materias son:    ' +  valueMateria;
}