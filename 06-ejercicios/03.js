// Mi respuesta
function similares(obj1, obj2){
    if (Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }
    for(let i = 0; i <= Object.keys.length; i++){
        if (Object.entries(obj1)[i][0] != Object.entries(obj2)[i][0] || Object.entries(obj1)[i][1] != Object.entries(obj2)[i][1]){
            return false;
        }
    }
    return true;
}

// Respuesta del profesor (se pude hackear)
function similares(obj1, obj2){
    let distintos = false;
    for (let llave in obj1){
        if (obj1[llave] !== obj2[llave]){
            distintos = true;
        }
    }
    return !distintos;
}


let resultado = similares(
{id:1, name:'Nico'},
{id:1, name:'Nico'}
)

console.log(resultado);