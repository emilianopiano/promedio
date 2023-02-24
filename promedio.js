

/*let total=0,numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(a){total += a;});
console.log(total);*/

let numeros = [1,2,3,4,5];
let total = 0

function sumarArray(){



for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    total += element;
    
}
return total;
}
console.log(sumarArray(numeros)/numeros.length);
    
    
   

    


