let usuarios = [
    {id:1, activo: true},
    {id:2, activo: true},
    {id:3, activo: true},
];

// let todoasActivos = usuarios.every(u => {
//     console.log('todoas activos', u.id);
//     return u.activo;

// });

// console.log(todoasActivos);

let algunoActivo = usuarios.some(u => {
    console.log(u.id);
    return u.activo;
});

console.log(algunoActivo);