const saludo = "Hola Mundo!";

const despedida = new String("Chao mundo :(");
console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf("Mu"));
console.log(saludo.indexOf("skadf"));
console.log(saludo.includes("Mundo"));
console.log(saludo.replace("Mundo", "Nicolas"));
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());

console.log(saludo.substring(0, 4));

const espacios = "      Hola      Mundo!  ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());