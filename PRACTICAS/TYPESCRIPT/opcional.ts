function getHeroe(nombre: string, poder?: string, arma: string = "martillo"){
    let mensaje:string;

    if (poder){
        return mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`
    }else{
        return mensaje = `${nombre} tiene el ${arma} de arma`
    }


    

}

document.body.textContent = getHeroe('thor','rayo');