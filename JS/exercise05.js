const valNumb1 = document.getElementById('numb3');
const valNumb2 = document.getElementById('numb4');
const btnValidate = document.getElementById('btn-validate05');
const divapp = document.querySelector(`.sol05`);

btnValidate.addEventListener('click', () => {
    const val1 = valNumb1.value;
    const val2 = valNumb2.value;
    render(val1, val2);
})

function render(valor1, valor2){
    let resultado = 0;
    if (isEmpty(valor1)){
        //mainBlock.innerHTML = /* html */ `
        divapp.innerHTML = /* html */ `
        <span>Debe introducir un numero en campo 1</span>
        </br>
        <a href="javascript:location.reload()">Recargar</a>`;
        return
    } else {
        if (isEmpty(valor2)){
            //mainBlock.innerHTML = /* html */ `
            divapp.innerHTML = /* html */ `
            <span>Debe introducir un numero en campo 2</span>
            </br>
            <a href="javascript:location.reload()">Recargar</a>`;
            return
        }

        let resultado = (Number.parseFloat(valor1)>Number.parseFloat(valor2)) ? Number.parseFloat(valor1) : Number.parseFloat(valor2);
        
        divapp.innerHTML= /* html */ `<p>El Mayor valor ingresado entre ${valor1} y ${valor2} es ${resultado}</p>      
        </br>
        <a href="javascript:location.reload()">Recargar</a>`;
    }

}

function isEmpty(valnumber) {
    const stringLength = valnumber.length;
    return (stringLength === 0) ? true : false;
}