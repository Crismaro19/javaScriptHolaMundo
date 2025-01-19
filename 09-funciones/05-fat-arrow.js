// Fat Arrow functions
// No tienen ARGUMENTS
// super this 

const suma = (a, b) => {
    return Array.from(arguments).reduce((acc, el) => acc + el);
     
}

console.log(suma(1, 2, 3, 4));