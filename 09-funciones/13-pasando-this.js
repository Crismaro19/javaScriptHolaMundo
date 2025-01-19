function saludar (...rest){
    console.log(this, rest);
}

// saludar.call({ propiedad: 'Hola mundo!'}, 1, 5);
// saludar.apply({ propiedad: 'Hola mundo!'}, [1, 5]); // Diferencia entre apply y call : en apply los argumenteos van como un array
saludar.bind({ propiedad: 'Hola mundo!'})(3, 5);
