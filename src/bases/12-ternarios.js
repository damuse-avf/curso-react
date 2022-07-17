const activo = true;
/* 
let mensaje= '';

if (activo){
  mensaje= 'activo';
}
else{
  mensaje = 'Inactivo';
} */

const mensaje = (activo) ? 'Activo':'Inactivo';
console.log(mensaje)
//si no quiero la negacion otra forma seria
const mensaje2 = activo && 'Activo'
console.log(mensaje2)

