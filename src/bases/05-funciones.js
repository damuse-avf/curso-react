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


console.log( saludar2('damaris'));
console.log( saludar3('damaris'));
console.log( saludar4());

const getUser = () => 
   ({
    uid: 'ABC123',
    username: 'hola_123'
  })


  const user =getUser();
  console.log(user);


  function getUsuarioActivo(nombre){
    return {
      ui: 'ABC567',
      username: nombre
    }
  }

  const usuarioActivo = getUsuarioActivo('Fernando');
  console.log (usuarioActivo);

  //Tarea
  // 1. Transformar a una funcion flecha
  // 2. Tiene que retornar un objeto implicito
  // 3. Pruebas
  
  const getUsuarioActivo2 = (nombre) => ({
      ui: 'ABC567',
      username: nombre
    })
 
  const usuarioActivo2 = getUsuarioActivo2('Fernando');
  console.log (usuarioActivo2);