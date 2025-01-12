console.log(
    Math.PI, // Genera el numero pi
    Math.abs(-15), // Retorna el valor absoluto
    Math.round(15.5), // Retorna el numero redondeado a el mas cercano
    Math.round(15.4), // Retorna el numero redondeado a el mas cercano
    Math.floor(15.9), // Retorna el redondeo al numero mas pequeno 
    Math.ceil(15.0000001), // Retorna el redondeo al numero mas grande
    Math.pow(2, 3), // Retorna la potenciacion
    Math.sqrt(9), // Retorna la raiz cuadrada
);

console.log(Math.random()); // Retorna un numero seudo aleatorio

function getRandom (min, max) {
    return Math.round(Math.random() * (max - min) + min) ;
}

console.log(getRandom(1, 10));