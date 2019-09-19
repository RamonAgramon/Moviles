function saludo(persona) {
    return "hola," + persona.primerNombre + " " + persona.segundoNombre;
}
var llamarUsuario = { primerNombre: "Jose", segundoNombre: "Ramon" };
document.body.textContent = saludo(llamarUsuario);
