const inputfrase = document.getElementById('frase');
const btnValidate = document.getElementById('btn-validate07');
const divapp = document.querySelector(`.sol07`);

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
    <span>Existen ${cantVocal_A} letras A</span>     
    </br>
    <a href="javascript:location.reload()">Recargar</a>`;

}

function isEmpty(username) {
    const stringLength = username.length;
    return (stringLength === 0) ? true : false;
}

function vowelCounter(str) {
    let allVowels = 'aA';
    let vCounter = 0;
    
    for(let i = 0; i < str.length; i++) {
      if(allVowels.indexOf(str[i]) !== -1) {
        vCounter += 1;
      }   
    }
    return vCounter;
  }