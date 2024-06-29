const valNumb1 = document.getElementById('numb13');
const btnValidate = document.getElementById('btn-validate15');
const divapp = document.querySelector(`.sol15`);

btnValidate.addEventListener('click', () => {
    const val1 = valNumb1.value;
    render(val1);
})

function render(valor1){
    let valor = 0;
   
    if (isEmpty(valor1)){
        divapp.innerHTML = /* html */ `
        <span>Debe introducir un numero en campo 1</span>
        </br>
        <a href="javascript:location.reload()">Recargar</a>`;
        return
    } else {
        valor = Number.parseFloat(valor1);
        var contador = 0;

        for(let i = 1; i <= valor; i++){
          if(valor % i == 0){
            contador++;
          }
        }
        if(contador == 2){
          divapp.innerHTML= /* html */ `<p>Si es primo el valor de ${valor1} <br></p> 
          <a href="javascript:location.reload()">Recargar</a>`;
        }else{
          divapp.innerHTML= /* html */ `<p>No en Primo el valor de ${valor1} <br></p>
          <a href="javascript:location.reload()">Recargar</a>`; 
        }      
    }
}

function isEmpty(valnumber) {
    const stringLength = valnumber.length;
    return (stringLength === 0) ? true : false;
}