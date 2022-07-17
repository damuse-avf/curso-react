const persona = {
 nombre:'Tony',
 apellido: 'Stark',
 edad: 45,
 direccion:{
    ciudad: 'New York',
    zip: 234234,
    lat: 14.1231,
    lng: 34.123
 }
};
console.log( persona );

const persona2= {...persona};
persona2.nombre='Peter';
console.log(persona);
console.log(persona2);