/*
en un campo textarea solicitamos el ingreso de la frase
posteriormente cambiamos el texto a letras minusculas
usamos el comando indexOf , para contar cuantas veces existe la tera a
dentro de la frase.
*/
const inputfrase = document.getElementById('frase09');
const btnValidate = document.getElementById('btn-validate09');
const divapp = document.querySelector(`.sol09`);

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
    <span>Existen ${cantVocal_A} vocales</span>     
    </br>
    <a href="javascript:location.reload()">Recargar</a>`;

}

function isEmpty(username) {
    const stringLength = username.length;
    return (stringLength === 0) ? true : false;
}

function vowelCounter(str) {
    let allVowels = 'aAeEiIoOuU';
    let vCounter = 0;
    
    for(let i = 0; i < str.length; i++) {
      if(allVowels.indexOf(str[i]) !== -1) {
        vCounter += 1;
      }   
    }
    return vCounter;
  }