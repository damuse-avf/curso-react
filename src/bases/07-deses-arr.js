const personajes = ['goku','vegeta','trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//misma forma, pero mejor

const[,,p1] = personajes; //ignora el segundo y el primero, retorna trunks

console.log(p1);

const retornaArreglo = () => {
  return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

//tarea
// 1. el primer valor del arreglo se llamara nombre
// 2. el segundo setNombre
const useState = (valor)=> {
  return [valor, ()=> {console.log('hola mundo')}];

}

const[nombre,setNombre] = useState ('Goku');

setNombre();
console.log(nombre, setNombre)