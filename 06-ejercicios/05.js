let objeto = {
    id: 1,
    name: undefined,
    login: function () {},
    logout: function() {},
}

let propiedad = 'name';

// Mi respuesta
// function tieneProp(obj, propiedad){
//     return (obj[propiedad] === undefined ? false : true);
// }

// respuesta profesor (gana profesor)
function tieneProp(obj, propiedad){
    let props = Object.keys(obj);
    for (let prop of props){
        if (propiedad == prop) {
            return true;
        }
    }
    return false;
}

console.log(tieneProp(objeto, propiedad));