function suma(fn, ...rest) {
  fn(rest.reduce((acc, ele) => acc + ele));
}

suma(
  (resultado) => {
    console.log(resultado);
  },
  1,
  2,
  3,
  4
);
