const usuarios = [
    {edad: 17, nombre: 'Nico', plan:'premium'},
    {edad: 18, nombre: 'Chanchito', plan:'premium '},
    {edad: 43, nombre: 'Frenanda', plan:'free'},
    {edad: 25, nombre: 'Felipe', plan:'gold'},
];

const users = [
    {age: 11, name: 'Jhon', membership:'premium'},
    {age: 13, name: 'Steven', membership:'free '},
    {age: 32, name: 'Carl', membership:'free'},
    {age: 68, name: 'Happy pig', membership:'gold'},
];

// Unificar las estructuras de usuarios y users
// Fusionar los array
// Ordenar por edad
// crear plantilla Html:
// <li>Nombre: name, Edad: age</li>
// Imrpimir la lista en consola

function ejercicio09 (arrIng, arrEsp) {
    for (const ele of arrEsp) {
        ele.age = ele.edad;
        delete ele.edad;
        ele.name = ele.nombre;
        delete ele.nombre;
        ele.memberchip = ele.plan;
        delete ele.plan;
    }
    const usersFull = [...arrIng, ...arrEsp];
    const usersFullSort = usersFull.sort((a, b) => a.age - b.age);
    const usersFullSortNames = usersFullSort.map(u =>
        `<li>Nombre: ${u.name}, Edad: ${u.age}</li>`);
    const html = `
    <ul>
        ${usersFullSortNames.join(`
        `)}
    </ul>
    `;

    return html; 
}

console.log(ejercicio09(users, usuarios))