// short-circuit

// falsy (Falso): 
// false
// 0
// ''
// null
// undefined
// NaN


// || ejecuta el segundo argumento si el primero cataloga en los valores falsy
let nombre = 'Chanchito feliz';
let username =  nombre || 'anonimo';
console.log(username);


// && ejecuta el segundo argumento si el primero es true
function fn1(){
    console.log('soy funcion 1');
    return false;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();