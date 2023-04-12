interface Direction{
    state:string,
    country:string,
    city:string;
};

interface SuperHeroe {
 name:string,
 age:number,
 direction:Direction,
 showDirecton: () => string;
}


const direction:Direction ={
    state: "SP",
    country: "BR",
    city: "SP"
}
const superHeroe:SuperHeroe ={
    name: "Evandro",
    age: 10,
    direction: direction,
    showDirecton: function (): string {
        return this.name + ', '+ this.direction.city + ', '+ this.direction.country
    }
}