const usuarios = [
    { edad: 17, nombre: 'Nico'},
    { edad: 13, nombre: 'Chanchito'},
    { edad: 25, nombre: 'Felipe'},
    { edad: 32, nombre: 'Oto'},
];

const mayores = usuarios.filter(usuarios => usuarios.edad > 17);
console.log(mayores);

const menores = usuarios.filter(usuarios => usuarios.edad <= 17);
console.log(menores);
