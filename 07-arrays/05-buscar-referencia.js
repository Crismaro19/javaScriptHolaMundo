const usuarios = [
    {id: 1, name: 'Chanchito'},
    {id: 3, name: 'Chanchito'},
    {id: 2, name: 'Feliz'},
];

// const resultado = usuarios.indexOf({ id: 1, name: 'Chanchito'});

// Predicate = funcion que retorna true o false
const resultado = usuarios.find(function(usuario) {
    return usuario.id === 1;
});
console.log(resultado);
 
const resultadoArrow = usuarios.find(usuarioArrow => 
    usuarioArrow.name === 'Chanchito');
console.log(resultadoArrow);

 
const resultadoArrowIndex = usuarios.findIndex(usuarioArrow => 
    usuarioArrow.name === 'Chanchito');
console.log(resultadoArrowIndex);
