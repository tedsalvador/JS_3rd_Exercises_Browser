const inputfrase = document.getElementById('frase08');
const btnValidate = document.getElementById('btn-validate08');
const divapp = document.querySelector(`.sol08`);

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
    <span>Existen las vocales : ${cantVocal_A} </span>     
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
    
    for(let i = 0; i < str.length; i++) {
      if(str.indexOf(allVowels[i]) !== -1) {
        vCounter += 1;
        vocales_encontradas= vocales_encontradas + allVowels[i] + " "
      }   
    }
    return vocales_encontradas;
  }