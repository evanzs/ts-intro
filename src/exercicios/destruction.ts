interface Repo {
    volume:number,
    second:number,
    music:string,
    details:Details

}

interface Details {
    auto: string,
    year:number;
}

const reprodut:Repo ={
    volume: 10,
    second: 20,
    music: "Seila",
    details: {
     auto:'Ele',
     year:2015  
    }
}

const auto = "fulano"
const { volume,second,music,details:{auto:autorDetales}} = reprodut
//const {auto,year} = reprodut.details;

console.log(volume,second,music,autorDetales,auto);

const dbz:string[] = ["Goku","Vegeta","Gohan"]

const [goku,vegeta,gohan] = dbz;
const [,,gohann] = dbz;

console.log(goku,vegeta,gohan,gohann)
