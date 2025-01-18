const usuarios = [
    {edad: 17, nombre: 'Nico', plan:'premium'},
    {edad: 13, nombre: 'Chanchito', plan:'premium '},
    {edad: 32, nombre: 'Frenanda', plan:'free'},
    {edad: 25, nombre: 'Felipe', plan:'gold'},
];


// Obtener los usuarios pago
// Ordenar de mayor a menor edad
// Devolver el nombre del usuario
// Crear una plantilla HTML
// Imprimirla en consola

/**
 * <ul>
 * <li>Felipe</li>
 * <li>Nico</li>
 * </ul>
 */

function ejercicio8 (arr){
    const usrsPago = arr.filter(u => u.plan !== 'free');
    const usrsSortEdad = usrsPago.sort((a, b) => b.edad - a.edad);
    const usrsNombres = usrsSortEdad.map(u => '<li>'+ u.nombre + '<li/>');
    return `
    <ul>
        ${usrsNombres.join(`
        `)}
    </ul>`;
}

console.log(ejercicio8(usuarios));