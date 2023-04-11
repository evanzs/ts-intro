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

interface PersonLor{
    nome:string,
    pv:number;
    mostrarPv: () => void;
}

function curar(person:PersonLor,curarX:number):void{

    person.pv += curarX;

    console.table(person);

}


const novoPerson :PersonLor ={
    nome:"Evan",
    pv:15,

    mostrarPv(){
        console.log('Pontos de vida',this.pv)
    }
}

curar(novoPerson,10);
console.log(result,somarFlechaResult,multResult)
console.table(novoPerson)
novoPerson.mostrarPv();