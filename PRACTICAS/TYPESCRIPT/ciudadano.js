var Ciudadano = /** @class */ (function () {
    function Ciudadano(nombreCompleto, FechaDeNacimiento, Correo) {
        this.nombreCompleto = nombreCompleto;
        this.FechaDeNacimiento = FechaDeNacimiento;
        this.Correo = Correo;
    }
    return Ciudadano;
}());
function Perfiles(ciudadanos1, ciudadanos2) {
    console.log("Policia " + ciudadanos1.nombreCompleto + " , " + "Categoria: " + ciudadanos1.categoria + " , " + " Numero de placa: " + ciudadanos1.Numplaca + " , " + "Fecha de nacimiento: " + ciudadanos1.FechaDeNacimiento + " , " + " Correo:" + ciudadanos1.Correo);
    return "Soldado " + ciudadanos2.nombreCompleto + " , " + "Celula: " + ciudadanos2.celulaDeID + " , " + " Tipo de sangre: " + ciudadanos2.TipoDeSangre + " , " + " Fecha de nacimiento: " + ciudadanos2.FechaDeNacimiento + " , " + " Correo:" + ciudadanos2.Correo;
}
var pol = { nombreCompleto: "Raul Hernandez", categoria: "Agrupamiento Condores", Numplaca: "1154346", FechaDeNacimiento: "05/03/1985", Correo: "RaulH@gmail.com" };
var sol = { nombreCompleto: "Rodrigo Perez", celulaDeID: "DS451568656DS", TipoDeSangre: "O+ ", FechaDeNacimiento: "20/10/1975", Correo: "RodrigoP@gmail.com" };
document.body.textContent = Perfiles(pol, sol);
