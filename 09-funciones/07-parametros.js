/**
 * {
 * url: ...
 * bucket: amazon s3
 * port: 80
 * }
 */
const config = {
    url: 'https://holamundo.io',
}

function configurarAPI(url, bucket = 145, port = 80){
    return `${url}/${bucket}:${port}`;
}

// function configurarAPI({url} = {url: 'por defecto'}){
//     return `${url}`;
// }

// console.log(configurarAPI())
console.log(configurarAPI('Holamundo.io'));