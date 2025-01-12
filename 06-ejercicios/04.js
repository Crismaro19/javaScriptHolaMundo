let objeto = {
    id: 1,
    name: 'chanchito',
    login: function () {},
    logout: function() {},
}
// Mi respuesta
function cualesMetodo(obj){
    for (prop of Object.entries(obj)){
        if (typeof prop[1] == 'function'){
            console.log(prop[0]);
        }
    }
}

// Respuesta del profesor (empate)
function cualesMetodo(obj){
    for (let llave in obj){
        if (typeof obj[llave] == 'function'){
            console.log(llave);
        }
    }
}

cualesMetodo(objeto);