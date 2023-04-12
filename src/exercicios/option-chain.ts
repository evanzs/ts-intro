interface Traveler{
    name:string;
    child?:string[]
}



const t1:Traveler ={
    name:'evans'
}

const t2:Traveler={
    name:'evaans',
    child :['childOne','chidlTwo']
}


const showChild = (traveler:Traveler):void =>{
    const qtd = traveler.child?.length || 0;
    console.log(qtd)
} 

showChild(t1);
showChild(t2);