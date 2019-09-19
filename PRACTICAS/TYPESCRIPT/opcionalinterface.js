var superman = {
    nombre: 'Super Man',
    poder: 'Super fuerza'
};
var iroman = {
    nombre: 'iroman',
    arma: 'Mark-39'
};
function getHeroe(heroe) {
    var mensaje;
    if (heroe.poder && heroe.arma) {
        return mensaje = heroe.nombre + " tiene el poder de: " + heroe.poder + " y un arma: " + heroe.arma;
    }
    else if (heroe.arma) {
        return mensaje = heroe.nombre + " tiene el " + heroe.arma + " de arma";
    }
    else if (heroe.poder) {
        return mensaje = heroe.nombre + " tiene el poder de: " + heroe.poder;
    }
}
document.body.textContent = getHeroe(iroman);
