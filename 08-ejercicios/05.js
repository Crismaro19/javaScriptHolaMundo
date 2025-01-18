const usuarios = [
    {edad: 17, nombre: 'Nico', plan:'premium'},
    {edad: 50, nombre: 'Chanchito', plan:'premium '},
    {edad: 32, nombre: 'Frenanda', plan:'free'},
    {edad: 25, nombre: 'Felipe', plan:'gold'},
];

function obtenerMayor(arr){
    return arr.sort((a, b) => b.edad - a.edad)[0];
}

const mayor = obtenerMayor(usuarios);

console.log(mayor);