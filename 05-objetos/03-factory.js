
function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('Recuperando clave...');
        },
    };  
}

let user1 = crearUsuario('Nicolas', 'Nico@holamundo.io');
let user2 = crearUsuario('Felipe', 'Felipe@holamundo.io');

console.log(user1);
console.log(user2);