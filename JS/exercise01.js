/* definimos una constante con la cadena a mostrar
   definimos un campo donde se mostrara el resultado solicitado
   y con la sentencia innerhtml lo mostramos al usuario.
 */

const hello  = "Hello Javascript";
const divapp = document.querySelector(`.sol01`);
function renderTitle(title){
    divapp.innerHTML = /* html */ `Solucion :<h1>${title}</h1>`
}

renderTitle(hello);

console.log(divapp);