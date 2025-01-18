const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    {id: 15},
    ['lala'],
]

// respuesta "yo" - esta tambien es la respuesta para el ejercicio 6
function dividePorTipo(arr) {
    return arr.reduce((acc, ele) => {
        const tipo = typeof ele;
        acc[tipo] = acc[tipo] || [];
        acc[tipo].push(ele);
        return acc;
    }, {});
}

// Me gusta mas esta, mucho mas - para el ejercicio 2
function dividePorTipo2(arr) {
    return {
        numeros: arr.filter(n => typeof n === "number"),
        strings: arr.filter(n => typeof n === "string"),
        objetos: arr.filter(n => typeof n === "object"),
    }
}


const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);