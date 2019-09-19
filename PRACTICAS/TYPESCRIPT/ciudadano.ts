class Ciudadano{
    public nombreCompleto:string;
    public FechaDeNacimiento:string;
    public Correo:string;
    constructor(nombreCompleto: string, FechaDeNacimiento: string, Correo: string ){
        this.nombreCompleto = nombreCompleto;
        this.FechaDeNacimiento = FechaDeNacimiento;
        this.Correo = Correo;
    }
}

interface Policia extends Ciudadano{
    categoria: string;
    Numplaca: string;
}

interface Soldado extends Ciudadano{
    celulaDeID: string;
    TipoDeSangre: string;
}

function Perfiles(ciudadanos1: Policia, ciudadanos2: Soldado){
    console.log("Policia " + ciudadanos1.nombreCompleto +" , " + "Categoria: " + ciudadanos1.categoria +" , " + " Numero de placa: " + ciudadanos1.Numplaca + " , "  + "Fecha de nacimiento: " + ciudadanos1.FechaDeNacimiento + " , " + " Correo:" + ciudadanos1.Correo);
    return "Soldado " + ciudadanos2.nombreCompleto +" , " + "Celula: " + ciudadanos2.celulaDeID +" , " +" Tipo de sangre: " + ciudadanos2.TipoDeSangre + " , "  + " Fecha de nacimiento: " + ciudadanos2.FechaDeNacimiento + " , " + " Correo:" + ciudadanos2.Correo;
}

let pol: Policia ={nombreCompleto:"Raul Hernandez", categoria:"Agrupamiento Condores", Numplaca:"1154346", FechaDeNacimiento: "05/03/1985",Correo: "RaulH@gmail.com"};
let sol: Soldado={nombreCompleto: "Rodrigo Perez", celulaDeID: "DS451568656DS", TipoDeSangre:"O+ ",FechaDeNacimiento: "20/10/1975",Correo: "RodrigoP@gmail.com"};

document.body.textContent = Perfiles(pol,sol);

