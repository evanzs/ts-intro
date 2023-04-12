class Heroe {
    //visivel somando nessa clase
    private name:string;

    // visivel em todo lugar
    public realName:string;

    
    static age:number=10;

    //pode-se usar sem criar uma instancia da classe.
    static getAge =()=>{
        return this.age;
    }

}

const age = Heroe.getAge();
console.log(age)

class NormalPerson {
    constructor( public name:string,public direction:string) {
        
    }
}
class Heroes extends NormalPerson{

   constructor(
    public age:number,
    public name:string,
    public realName: string)
    {
        super(name,'New York');
    }


}

const ironMan = new Heroes(45,'IronMan','Tony')

console.log(ironMan)