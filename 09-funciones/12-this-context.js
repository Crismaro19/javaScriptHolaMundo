const usuario = {
    nombre: 'Nicolas',
    ciudadanias: ['Chile', 'Colombia', 'New Zeland'],
    mostrarCiudadanias() {
        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre, ciudadania);
        })
    }
};

usuario.mostrarCiudadanias();