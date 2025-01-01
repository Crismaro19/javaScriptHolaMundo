// Personaje 
let nombre = "Tanjiro";
let anime = "Kimetsu no yaiba";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Kimetsu no yaiba",
    edad: 16,
};

console.log(personaje);
console.log(personaje.anime);
console.log(personaje['nombre']);

personaje.edad = 89;
personaje['edad'] = 19;

delete personaje.anime;

console.log(personaje);