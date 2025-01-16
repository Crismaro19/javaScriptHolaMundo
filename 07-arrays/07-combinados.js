let arr1 = [1, 2];
let arr2 = [3, 4];

let combinados = arr1.concat(arr2);
console.log(combinados, arr1, arr2);

let divididos = combinados.slice(1, 3);
console.log(divididos);

let divididos2 = combinados.slice(2);
console.log(divididos2);

let copia = combinados.slice();
console.log(copia);


 
