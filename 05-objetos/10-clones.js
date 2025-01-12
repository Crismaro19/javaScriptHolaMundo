let punto = {
    x: 10,
    y: 15,
};

let clonePunto = Object.assign({}, punto, {z:20, x:1});
console.log(punto, clonePunto);

let copiaPunto = Object.assign({}, punto);
console.log(copiaPunto, punto);

// spread operator ...     (esta es la forma que usa Hans)
let copia3 = {...punto};
console.log(copia3);