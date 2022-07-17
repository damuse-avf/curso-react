/* const promesa =  new Promise( (resolve, reject) =>{
  setTimeout(() => {
  resolve();
  }, 2000);
}); */

import { getHeroeById } from "./bases/08-import-export";


/* const promesa =  new Promise( (resolve, reject) =>{
  setTimeout(() => {
  //tarea
  //const heroe = getHeroeById(2);
  const p1 = getHeroeById(2);
  //resolve(heroe);
  resolve(p1);
  //reject ('No se puede encontrar el heroe');
    
  }, 2000);
});

promesa.then ( (heroe) =>{
  console.log('heroe',heroe)
})
.catch(err => console.warn(err)); */

const getHeroeByIdAsync = (id) =>{
  
 return  new Promise( (resolve, reject) =>{
  setTimeout(() => {
  //tarea
  //const heroe = getHeroeById(2);
  const p1 = getHeroeById(id);

  if(p1){
    resolve(p1);
  }
  else{
    reject ('No se puede encontrar el heroe');
  }
  //resolve(heroe);
  resolve(p1);
  //reject ('No se puede encontrar el heroe');
    
  }, 2000);
});

}

//getHeroeByIdAsync(10).then(heroe => console.log('heroe',heroe))
//.catch(err => console.warn(err));

getHeroeByIdAsync(2).then(console.log)
.catch(console.warn);
