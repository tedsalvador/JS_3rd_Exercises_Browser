const numb1 = 3;
const numb2 = 5;

function sum(num1, num2){
    let total = num1 + num2;
    return total;
}

function render(num1, num2, total) {
    const divapp = document.getElementById('app02');
    const txt = `La suma de ${num1} + ${num2} es ${total}`
    divapp.innerHTML = txt;
}

render(numb1,numb2,sum(numb1,numb2));