class Estudiante {
    nombreCompleto:string;

    constructor(public primerNombre:string, public segundoNombre:string, public apellidos:string){
        this.nombreCompleto = primerNombre + " " + segundoNombre + " " +apellidos;
    }
}

interface Usuario {
    primerNombre: string;
    segundoNombre: string;
    apellidos: string;
}

function Saludo(usuario: Usuario) {
    return "Hola, " + usuario.primerNombre + " " + usuario.segundoNombre + " " + usuario.apellidos;
}

let usuarioCompleto = new Estudiante("Jose", "Ramon", "Agramon Esparza");

document.body.textContent = Saludo(usuarioCompleto);