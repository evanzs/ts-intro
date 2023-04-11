let skills:Array<string> = ['Bash','Counter','Healing'];


interface Person {
    name:string,
    hp:number;
    skills:Array<string>
    birth?:string;
}
const person:Person ={
    name:"Strike",
    hp:100,
    skills:['Bash','Counter','Healing']
}

person.birth="10/10/93"

console.table(person)