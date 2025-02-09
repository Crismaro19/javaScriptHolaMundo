const obj = {
  nombre: "Nicolas",
};

function Extender() {
  this.login = function () {
    console.log("Usuario inicia sesion", this.nombre);
  };
  this.logout = () => {
    console.log("Usuario cierra sesion", this.nombre);
  };
}

Extender.call(obj);

console.log(obj);
obj.login();
obj.logout();
