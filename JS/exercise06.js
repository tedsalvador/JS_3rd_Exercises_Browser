/*
Similar al ejercicio anterior solo que ahora solicitamos al usuario
que ingrese tre valores en tres campos number por pantalla
y comparamos el primer valor con los otros 2  que debe ser mayor que ambos
lo mismo hacemos para el segundo valor
*/

const valNumb1 = document.getElementById('numb5');
const valNumb2 = document.getElementById('numb6');
const valNumb3 = document.getElementById('numb7');
const btnValidate = document.getElementById('btn-validate06');
const divapp = document.querySelector(`.sol06`);

btnValidate.addEventListener('click', () => {
    const val1 = valNumb1.value;
    const val2 = valNumb2.value;
    const val3 = valNumb3.value;
    render(val1, val2, val3);
})

function render(valor1, valor2, valor3){
    let resultado = 0;
    if (isEmpty(valor1)){
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
        }else {
            if (isEmpty(valor3)){
                //mainBlock.innerHTML = /* html */ `
                divapp.innerHTML = /* html */ `
                <span>Debe introducir un numero en campo 3</span>
                </br>
                <a href="javascript:location.reload()">Recargar</a>`;
                return
            } else {
                console.log("aqui va entrar valor 3");
                if ((Number.parseFloat(valor1)>Number.parseFloat(valor2)) && (Number.parseFloat(valor1)>Number.parseFloat(valor3))){
                    resultado = Number.parseFloat(valor1);
                }else{
                    if ((Number.parseFloat(valor2)>Number.parseFloat(valor1)) && (Number.parseFloat(valor2)>Number.parseFloat(valor3))){
                        resultado = Number.parseFloat(valor2);
                    }else{
                        resultado = Number.parseFloat(valor3);
                    }
                }

                divapp.innerHTML= /* html */ `<p>El Mayor valor ingresado entre ${valor1} , ${valor2} y ${valor3} es ${resultado}</p>      
                </br>
                <a href="javascript:location.reload()">Recargar</a>`;
              }
    }
    }
}

function isEmpty(valnumber) {
    const stringLength = valnumber.length;
    return (stringLength === 0) ? true : false;
}