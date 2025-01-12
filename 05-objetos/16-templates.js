const saludo = "Hola \\mundo!'\nbienvenidos a\t \"ultimate javaScript\" :)";

const nombre = "Cristian";
function plantilla (nombre) {
    return `Hola ${nombre}!

    Bienvendio a "Ultimate JavaScript :)"

    Carinos Nico.
    `;
}
console.log(plantilla(nombre));