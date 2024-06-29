/*
Se solicita ingresar 2 valores numericos
luego de los dos numeros encontramos el menor
lo usamos para armar un loop desde 2 hasta el valor menor encontrado
y recorremos el loop
donde cada valor del loop debe ser divisor para ambos numeros.
el loop empieza en 2 hasta el valor menor.
*/
const valNumb1 = document.getElementById('numb11');
const valNumb2 = document.getElementById('numb12');
const btnValidate = document.getElementById('btn-validate14');
const divapp = document.querySelector(`.sol14`);

btnValidate.addEventListener('click', () => {
    const val1 = valNumb1.value;
    const val2 = valNumb2.value;
    render(val1, val2);
})

function render(valor1, valor2){
    let val1 = 0;
    let val2 = 0;
    let menor = 0;

    if (isEmpty(valor1)){
        divapp.innerHTML = /* html */ `
        <span>Debe introducir un numero en campo 1</span>
        </br>
        <a href="javascript:location.reload()">Recargar</a>`;
        return
    } if (isEmpty(valor2)) {
        divapp.innerHTML = /* html */ `
        <span>Debe introducir un numero en campo 2</span>
        </br>
        <a href="javascript:location.reload()">Recargar</a>`;
        return
    } 
    else {
        val1 = Number.parseFloat(valor1);
        val2 = Number.parseFloat(valor2);
        let divisores = [];

        if (val1 < val2) {
            menor = val1;
            } else {
            menor = val2;
            }

        for (let i = 2; i <= menor; i++) {
            if (val1 % i == 0 && val2 % i == 0) {
              divisores.push(i);
            }
          }
  
        if (divisores.length == 0) {
            divapp.innerHTML= /* html */ `<p>No hay divisores comunes para los valores de ${valor1} y ${valor2}<br></p>
            <a href="javascript:location.reload()">Recargar</a>`; 
           } else {
               divapp.innerHTML= /* html */ `<p>Los Divisores comunes para ${valor1} y ${valor2}<br> ${divisores}</p> 
               <a href="javascript:location.reload()">Recargar</a>`;
          }       
    }
}

function isEmpty(valnumber) {
    const stringLength = valnumber.length;
    return (stringLength === 0) ? true : false;
}