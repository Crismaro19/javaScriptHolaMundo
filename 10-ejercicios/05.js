// function ordenar(texto, fn) {
//   let resp = [];
//   for (const ele of texto.toLowerCase()) {
// if (ele === " ") continue;
// resp.push(ele);
//   }
//   fn(resp.sort());
// }

function ordenar(texto, fn) {
  let resultado = texto.toLowerCase().split("").sort().join("");
  fn(resultado);
}

ordenar("hola mundo", console.log);
