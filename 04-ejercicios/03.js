/**
 * indice validar que no sea menor a cero y que el elemento exista en el array
 */
function getbyIdx(arr, idx){
    return idx < 0 || idx >= arr.length ? 'indice no valido' : arr[idx];
}

let resutaldo = getbyIdx([1, 2], 2);
console.log(resutaldo);
