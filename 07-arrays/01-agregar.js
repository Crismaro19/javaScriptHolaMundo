const letras = ['a', 'b'];

// agregar al final del array
letras.push('c');

// agregar al comienzo
letras.unshift('y', 'z');

// agregar en un indice especifico
letras.splice(3, 0, 1, 2);

console.log(letras);