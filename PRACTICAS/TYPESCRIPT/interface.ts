interface Persona{
    primerNombre: string;
    segundoNombre: string;
}

function saludo(persona: Persona){
    return "hola," + persona.primerNombre + " " + persona.segundoNombre;
}

let llamarUsuario ={primerNombre:"Jose", segundoNombre:"Ramon"};
let segundoUsuario ={primerNombre:"cesar", segundoNombre:"Daniel"};

document.body.textContent = saludo(llamarUsuario);