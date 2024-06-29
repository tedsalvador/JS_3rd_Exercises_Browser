const valNumb1 = document.getElementById('numb10');
const btnValidate = document.getElementById('btn-validate13');
const divapp = document.querySelector(`.sol13`);

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
        let divisores = [];

        for(let i = 1; i <= valor; i++){
          if(valor % i == 0){
            divisores.push(i);            
          }
        }
        if (divisores.length == 0) {
            divapp.innerHTML= /* html */ `<p>No hay divisores para el valor de ${valor1} <br></p>
            <a href="javascript:location.reload()">Recargar</a>`; 
           } else {
               divapp.innerHTML= /* html */ `<p>Los Divisores de ${valor1} <br> ${divisores}</p> 
               <a href="javascript:location.reload()">Recargar</a>`;
          }       
    }
}

function isEmpty(valnumber) {
    const stringLength = valnumber.length;
    return (stringLength === 0) ? true : false;
}