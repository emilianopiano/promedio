

/*let total=0,numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(a){total += a;});
console.log(total);*/
/*
let numeros = [1,2,3,4,5];
let total = 0

function sumarArray(lista){
*/


// for (let i = 0; i < numeros.length; i++) {
//     const element = numeros[i];
//     total += element;
    
// }
/*
function sumarTodosElementos(valorAcumulado, nuevoValor){

    return valorAcumulado + nuevoValor;
}

const sumaLista = lista.reduce(sumarTodosElementos);

const promedio = sumaLista/lista.length;
console.log(promedio);
return promedio
 }*/

 let valorMedia;
let valorMediaPar;
let valor;
let valor1;
let valor2;

 let numeros = [10, 20, 50, 50, 50, 45 , 60, 40, 40];
let total = numeros.reduce((a, b) => a + b, 0);

console.log("Suma de todos los elementos de la lista:" + " " + total)

console.log()


function deterPar_Ipar(lista){

    

    if(lista.length % 2){

        console.log("El numero de la lista de elementos es Impar");

        return valor = 1;
    }
    else{
        console.log("El numero de la lista de elementos es Par");

        

        return valor = 0;
    }
}

deterPar_Ipar(numeros);



function media(arreglo){

    


    if(valor===1){

        valorMedia = arreglo[Math.floor((arreglo.length/2) )];
        
        console.log(valorMedia)
        return valorMedia;

    }
    else{

        valor1 = (arreglo.length/2)-1;
        valor2 = arreglo.length/2

        valorMediaPar = arreglo[valor1] + arreglo[valor2]

        
        return valorMediaPar/2
    }


}

const ordenada = numeros.sort((a,b)=>a-b);

console.log(ordenada);

console.log( + deterPar_Ipar(ordenada));

console.log("La media de la lista es: " + media(ordenada))

function calcularModa(listaArray){

    const listaObjeto = {};

    for (let i = 0; i < listaArray.length; i++) {
        const element = listaArray[i];

        if(listaObjeto[element]){

            listaObjeto[element] += 1;
        }
        else {

            listaObjeto[element] = 1;
        }
        
    }
    
    const objetoArreglado = Object.entries(listaObjeto);
    return objetoArreglado;
    
}

const arregloBidimencional = calcularModa(ordenada);


console.log(calcularModa(ordenada));

const arreglolisto = arregloBidimencional.sort((a,b)=> a[1] - b[1]);

console.log(arreglolisto);

const indiceModa = arreglolisto[arreglolisto.length-1];

const moda = arreglolisto[indiceModa];
console.log(indiceModa[0]);

console.log(ordenada[5,0,1]);



















    
    
   

    


