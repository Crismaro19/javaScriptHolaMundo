// Dentro de un objeto: this hace referencia a un objeto
const user = {
    name: 'Nicolas',
    login(){
        console.log(this);
    }
};

user.logout = function logout(){
    console.log(this);
}

// user.logout();

// En una funcion: this hace referencia al objeto window, global
function log(){
    console.log(this);
}

log();

// si se usa new hace referencia al objeto que sera creado
function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);
}

const l = new Log('Hola mundo!'); 


/**
 * Cuando se usa this pasan estas cosas:
 * Se crea un objeto literal
 * se vincula este objeto a this
 * se vincula el prototipo
 * si no retorna nada, entonces retorna this 
 */