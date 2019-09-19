interface Persona {
    id: number;
    nombre: string;
    correo: string;
    direccion: string;
    edad: number;
}

const Ramon: Persona = {
    id: 1,
    nombre: "Ramon",
    correo: "Ramon@dddasf.gmail",
    direccion: "San blas",
    edad: 22
}

console.log(Ramon.nombre);

function printObjeto(persona: Persona){
    return "Hola" + persona.nombre;
}

document.body.textContent = printObjeto(Ramon);

