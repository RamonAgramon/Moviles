interface Heroe {
    nombre:string;
    poder?:string;
    arma?:string;
}

let superman: Heroe = {
    nombre: 'Super Man',
    poder: 'Super fuerza'
}
let iroman: Heroe = {
    nombre: 'iroman',
    arma: 'Mark-39'
} 
let thor: Heroe = {
    nombre: 'iroman',
    arma: 'Mark-39'
}

function getHeroe(heroe: Heroe){
    let mensaje:string;

    if (heroe.poder && heroe.arma){
        return mensaje = `${heroe.nombre} tiene el poder de: ${heroe.poder} y un arma: ${heroe.arma}`
    }else if(heroe.arma){
        return mensaje = `${heroe.nombre} tiene el ${heroe.arma} de arma`
    }else if(heroe.poder){
        return mensaje = `${heroe.nombre} tiene el poder de: ${heroe.poder}`
    }
}

document.body.textContent = getHeroe(iroman);