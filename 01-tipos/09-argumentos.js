function suma(a, b){
    console.log(arguments);
    
    return b + a ;
}

let resultado = suma(5, 6);
console.log(resultado);
console.log(typeof suma);