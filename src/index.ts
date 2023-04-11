function somar(a:number,b:number):number{
    return a+b;
}

const somarFlecha  = (a:number,b:number):number =>{
    return a+b;
}

function mult (numero:number,outro?:number,base:number =2){
    return numero*base;
}

const result = somar(2,3) 
const somarFlechaResult = somarFlecha(2,3)
const multResult = mult(2,3)


console.log(result,somarFlechaResult,multResult)