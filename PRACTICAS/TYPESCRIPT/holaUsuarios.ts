function saludo(persona, edad,deporte){
    const cadena: any = 'hola, ' + persona + ', tu tienes' + edad + ", años de edad." + '¿ Practicas deporte? ' + deporte;
    return cadena;
}

let persona: string = "Ramon";
let edad: number = 22;
let deporte: boolean = true;

document.body.textContent = saludo(persona, edad, deporte);