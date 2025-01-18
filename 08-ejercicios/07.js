const usuarios = [
    {edad: 17, nombre: 'Nico', plan:'premium'},
    {edad: 13, nombre: 'Chanchito', plan:'premium '},
    {edad: 32, nombre: 'Frenanda', plan:'free'},
    {edad: 25, nombre: 'Felipe', plan:'gold'},
];

// esta funcion existe en Object.groupby
function groupBy(arr, prop){
    return arr.reduce((acc, ele) => {
        const propEle = ele[prop];
        acc[propEle] = acc[propEle] || [];
        acc[propEle].push(ele);
        return acc;        
    },{});
}

const grouped = groupBy(usuarios, 'plan');
console.log({ grouped });