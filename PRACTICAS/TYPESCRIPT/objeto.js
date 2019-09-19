var Ramon = {
    id: 1,
    nombre: "Ramon",
    correo: "Ramon@dddasf.gmail",
    direccion: "San blas",
    edad: 22
};
console.log(Ramon.nombre);
function printObjeto(persona) {
    return "Hola" + persona.nombre;
}
document.body.textContent = printObjeto(Ramon);
