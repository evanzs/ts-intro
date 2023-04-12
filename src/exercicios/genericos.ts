
function whatsType<T>(args:T) {
    return args
   }
   
   
   //type string
   let imString = whatsType("Olá mundo");
   
   
   //type number
   let imNumber = whatsType(2222);
   
   
   let im2NumberExplicity = whatsType<number>(222)
   
   //retorna erro pq n é um numero de parametro
   //let im2NumberExplicity2 = whatsType<number>('222')