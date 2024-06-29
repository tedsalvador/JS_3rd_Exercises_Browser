/*
Para este ejercicio se utiliza el comando MODULO, y el cual se aplicamos
al valor que se solicita ingresar
aqui no piden mostrar el primer valor por el cual es divisible entre 2,3,5,7
*/
const valNumb1 = document.getElementById('numb8');
const btnValidate = document.getElementById('btn-validate11');
const divapp = document.querySelector(`.sol11`);

btnValidate.addEventListener('click', () => {
    const val1 = valNumb1.value;
    render(val1);
})

function render(valor1){
    let resultado = 0;
    let txtResultado="";
    if (isEmpty(valor1)){
        divapp.innerHTML = /* html */ `
        <span>Debe introducir un numero en campo 1</span>
        </br>
        <a href="javascript:location.reload()">Recargar</a>`;
        return
    } else {
        resultado = Number.parseFloat(valor1);
        if (resultado%2==0){txtResultado = " Es divisible entre 2"}
        else if (resultado%3==0){txtResultado = " Es divisible entre 3"}
        else if (resultado%5==0){txtResultado = " Es divisible entre 5"}
        else if (resultado%7==0){txtResultado = " Es divisible entre 7"}
        else{
            txtResultado = " NO Es divisible por ni 2, 3, 5 ni 7"
        };
        divapp.innerHTML= /* html */ `<p>El valor ${valor1} ${txtResultado}</p>      
        </br>
        <a href="javascript:location.reload()">Recargar</a>`;
    }
}

function isEmpty(valnumber) {
    const stringLength = valnumber.length;
    return (stringLength === 0) ? true : false;
}