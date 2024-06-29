/*
solicitar ingresar un valor numerico
luego un valor primo es SOLO divisible por la UNIDAD y por SU MISMO VALOR
armamos un loop que cuente los divisore del numero ingresado
es decir recorremos desde 1 hasta el valor ingreado
y lo vamos dividiendo por el modulo desde 1,2,3,4...hasta el valor
y usamos un contador para contar las veces que encuentra el modulo
si el contador es mayor que 2 entonces se descarta como PRIMO.
*/
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