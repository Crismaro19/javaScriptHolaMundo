// sin usar ... ni Object.assign
let obj1 = {id:1, name:'chanchito'};
function crearCopia(obj){
    objCopia = {};
    for (let prop in obj){
        objCopia[prop] = obj[prop];
    }
    return objCopia;
}

let obj2 = crearCopia(obj1);
console.log({obj1, obj2});