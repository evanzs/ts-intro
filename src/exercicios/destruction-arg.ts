export interface Product{
    desc:string;
    price:number;
}

const telefone:Product ={
    desc: "Nokia",
    price: 20
}

const tablet:Product ={
    desc: "Ipad Air",
    price: 222222222
}


export const calculaISV = (products:Product[]) =>{
    let total = 0;

    products.forEach( ({price}) => {
        total += price;
    })

    return total*0.14;
}

const articulos = [telefone,tablet]
const isv = calculaISV(articulos)

console.log(isv)