/**
 * calcular numeros impares
 */
function calcularImpares(rango){
    for (let i = 1; i < rango; i ++){
        if (i%2 != 0){
            console.log('Numero impar: ', i);
        }
    }
}

calcularImpares(100);