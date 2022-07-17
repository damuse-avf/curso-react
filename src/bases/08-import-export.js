//import { heroes} from './data/heroes' //por defecto busca el archivo .js

//import {heroes, owners} from './data/heroes'
import heroes, {owners} from "../data/heroes";

//console.log ( heroes); // para poder mostrar esto el archivo heroes.js debe tener el export
//console.log (owners);

const getHeroeById = (id) => {
  return heroes.find( heroe => heroe.id===id );
}

const getHeroeById2 = (id) =>  heroes.find( heroe => heroe.id===id );

//console.log(getHeroeById(2));


const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

//console.log(getHeroesByOwner('Marvel'));

export {getHeroeById,getHeroeById2,getHeroesByOwner};