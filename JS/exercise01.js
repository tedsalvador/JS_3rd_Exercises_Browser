const hello  = "Hello Javascript";
const divapp = document.querySelector(`#app01`);

function renderTitle(title){
    divapp.innerHTML = /* html */ `<h1>${title}</h1>`
}

renderTitle(hello);

console.log(divapp);