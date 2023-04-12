import { Product, calculaISV } from './exercicios/destruction-arg';
const cart:Product[] =[
    {
        desc:'telefone',
        price:122
    },
    {
        desc:'telefone 1',
        price:132
    },
    {
        desc:'telefone 2',
        price:142
    },
    {
        desc:'telefone 3',
        price:152
    },
]
const total = calculaISV(cart);

console.log(total)