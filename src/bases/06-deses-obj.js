//funciones en js


const saludar= function (nombre){
  return `hola, ${nombre}`;
}

const saludar2=  (nombre) => {
  return `hola, ${nombre}`;
}

const saludar3 =  (nombre) =>  `hola, ${nombre}`;
//permite usar un parametro sin parentesis
//const saludar3 =  nombre =>  `hola, ${nombre}`;
const saludar4=  () =>  `hola mundo`;


// Desestructuracion
// Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre: nombre2, edad, clave} = persona; //extrae lo que estoy poniendo dentro de estas llaves de ese objeto

/* console.log(nombre2);
console.log(edad);
console.log(clave); */

const retornaPersona = (usuario) => {
  const {edad, clave, nombre,} = usuario;
  console.log(edad,clave,nombre)
}

retornaPersona(persona)

//tambien puedo obtener solo el nombre, edad
const retornaPersona2 = ({nombre, edad, rango='capitan'}) => {
 
  console.log(nombre,edad,rango)
}

retornaPersona2(persona)

const useContext = ({clave,nombre, edad, rango='capitan'}) => {
  return {
    nombreClave: clave,
    anios: edad,
    lating: {
        lat: 14.213 ,
         lng: -12.123
    }
  }
 
}
const  {nombreClave,anios, lating: {lat,lng}} = useContext(persona);
console.log(nombreClave,anios)
console.log(lat,lng)