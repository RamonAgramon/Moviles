var Estudiante = /** @class */ (function () {
    function Estudiante(primerNombre, segundoNombre, apellidos) {
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.apellidos = apellidos;
        this.nombreCompleto = primerNombre + " " + segundoNombre + " " + apellidos;
    }
    return Estudiante;
}());
function Saludo(usuario) {
    return "Hola, " + usuario.primerNombre + " " + usuario.segundoNombre + " " + usuario.apellidos;
}
var usuarioCompleto = new Estudiante("Jose", "Ramon", "Agramon Esparza");
document.body.textContent = Saludo(usuarioCompleto);
