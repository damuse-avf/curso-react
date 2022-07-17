const nombre = 'damaris';
const apellido = 'avila';
//const nombrecompleto = nombre + ' ' + apellido;
const nombrecompleto = `
${nombre} ${apellido}
`;
console.log( nombrecompleto);

function getSaludo(nombre){
  return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo( nombre)}`);