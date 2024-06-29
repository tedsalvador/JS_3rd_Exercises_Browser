/*
en un campo textarea solicitamos el ingreso de la frase
posteriormente cambiamos el texto a letras minusculas
usamos el comando indexOf , para contar cuantas veces existe la tera a
dentro de la frase.
Aqui usamos 2 for para recorrer para las 5 veces la busqueda en la frase
y a la vez se van acumulando cuantas veces encuentra cada vocal
*/
const inputfrase = document.getElementById('frase10');
const btnValidate = document.getElementById('btn-validate10');
const divapp = document.querySelector(`.sol10`);

btnValidate.addEventListener('click', () => {
    const userfrase = inputfrase.value;
    render(userfrase);
})

function render(userfrase){
    let cantVocal_A = 0;
    if (isEmpty(userfrase)){
        divapp.innerHTML = /* html */ `
        <span>Debe introducir su frase</span>
        </br>
        <a href="javascript:location.reload()">Recargar</a>`;
        return
    }
    cantVocal_A = vowelCounter(userfrase.toLowerCase());
    divapp.innerHTML= /* html */ `<span>En la Frase ====> ${userfrase}</span> </br>   
    <span>Cantidad Vocales encontradas : ${cantVocal_A} </span>     
    </br>
    <a href="javascript:location.reload()">Recargar</a>`;

}

function isEmpty(username) {
    const stringLength = username.length;
    return (stringLength === 0) ? true : false;
}

function vowelCounter(str) {
    let allVowels = 'aeiou';
    let vCounter = 0;
    let vocales_encontradas="";
    
    for(let a = 0; a < allVowels.length; a++) {

    for(let i = 0; i < str.length; i++) {

        if(allVowels[a] == str.charAt(i)) {
            vCounter += 1;
        }   

       }

        if (vCounter!== 0) {
            vocales_encontradas= vocales_encontradas + allVowels[a] + " = " + vCounter + " || ";
        }
        vCounter=0;
   }
   if (vocales_encontradas.length == 0){
     return "0";
   } else {
   return vocales_encontradas;
   }
  }