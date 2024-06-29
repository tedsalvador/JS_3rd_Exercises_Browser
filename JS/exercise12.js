const valNumb1 = document.getElementById('numb9');
const btnValidate = document.getElementById('btn-validate12');
const divapp = document.querySelector(`.sol12`);

btnValidate.addEventListener('click', () => {
    const val1 = valNumb1.value;
    render(val1);
})

function render(valor1){
    let valor = 0;
    let txtResultado="";
    if (isEmpty(valor1)){
        divapp.innerHTML = /* html */ `
        <span>Debe introducir un numero en campo 1</span>
        </br>
        <a href="javascript:location.reload()">Recargar</a>`;
        return
    } else {
        valor = Number.parseFloat(valor1);

        if (valor % 2 === 0 || valor % 3 === 0 || valor % 5 === 0 || valor % 7 === 0) {
            if (valor % 2 === 0) {
            txtResultado= txtResultado + "Es divisible por 2. <br>";
            }
            if (valor % 3 === 0) {
            txtResultado= txtResultado + "Es divisible por 3. <br>";
            }
            if (valor % 5 === 0) {
            txtResultado= txtResultado + "Es divisible por 5. <br>";
            }
            if (valor % 7 === 0) {
            txtResultado= txtResultado + "Es divisible por 7. <br>";
            }
            } else {
            txtResultado= txtResultado + "No es divisible ni por 2, ni por 3, ni por 5, ni por 7 <br>";
            }

        divapp.innerHTML= /* html */ `<p>El valor ${valor1} <br> ${txtResultado}</p>      
        <a href="javascript:location.reload()">Recargar</a>`;
    }
}

function isEmpty(valnumber) {
    const stringLength = valnumber.length;
    return (stringLength === 0) ? true : false;
}