const numeros = [1, 2, 3, 4];

// sumar listas
// const suma = numeros.reduce((acc, el) => {
//     return acc + el; 
// }, 0);
// console.log(suma);

// reducir listas
// const anidado = [[1, 2], 3, [4, 5]];
// const plano = anidado.reduce((acc, el) => acc.concat(el), []);
// console.log(plano);

const usuarios = [
    { edad: 17, nombre: 'Nico'},
    { edad: 13, nombre: 'Chanchito'},
    { edad: 25, nombre: 'Felipe'},
    { edad: 32, nombre: 'Oto'},
];

// indexado 
const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}),{});

console.log(indexado);