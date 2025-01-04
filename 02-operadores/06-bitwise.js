// bit: 0 1
// Byte: 8 bits
// Bye: 00000000 -> 0
// Bye: 00000001 -> 1
// Bye: 00000010 -> 2
// Bye: 00000011 -> 3
// Bye: 00000100 -> 4
// Bye: 00000101 -> 5
// Bye: 00000110 -> 6

// el operador OR de bitwise toma la posicion de los 1 binarios de ambos argumentos y las superpone para crear un nuevo binario
console.log(1|3); // 00000011
console.log(1|4); // 00000101
console.log(3|5); // 00000111

//el operador AND de bitwise valida los 1 de los binario y si ambos argumentos tienen el 1 en la misma posicion el nuevo binario toma ese 1
console.log(1 & 3); // 00000001
console.log(1 & 4); // 00000000
console.log(3 & 5); // 00000001
