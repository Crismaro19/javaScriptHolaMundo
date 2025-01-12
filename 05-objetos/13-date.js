const ahora = new Date();
console.log(ahora);

const fecha = new Date('December 11 1996 11:11:11 GMT-0300');
console.log(fecha);

const fecha2 = new Date(1997, 11, 25, 14, 15);
console.log(fecha2);

const fecha3 = new Date(1997, 11, 25, 14+15, 15);
console.log(fecha3);

// Formatos de fechas
console.log('date String:', fecha3.toDateString());
console.log('ISO String:', fecha3.toISOString());
console.log('Time String:', fecha3.toTimeString());

// Date tiene los metodos de set y get para asignar o tomar solo parte de la fecha
console.log(fecha3.getDate());
console.log(fecha3.getHours());

fecha3.setFullYear('2998');
console.log(fecha3);