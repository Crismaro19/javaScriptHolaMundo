const config = {
    url: 'https://holamundo.io',
    direccion: {
        calle: 'hola mundo',
        numero: 80,
    }
}

// objectt destructuring 
function webserver({url, direccion: {calle}}){
    // const {url} = config;
    console.log(calle);
    return url;
}

const config1 = [
    'https://holamundo.io',
    145,
    80
]

// array destucturing
function webserver1([url, bucket, port]){
    return url;
}

console.log(webserver1(config1));