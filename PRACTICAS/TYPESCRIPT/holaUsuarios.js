function saludo(persona, edad, deporte) {
    var cadena = 'hola, ' + persona + ', tu tienes' + edad + ", años de edad." + '¿ Practicas deporte? ' + deporte;
    return cadena;
}
var persona = "Ramon";
var edad = 22;
var deporte = true;
document.body.textContent = saludo(persona, edad, deporte);
