const inputUsername = document.getElementById('username');
const btnValidate = document.getElementById('btn-validate');
const mainBlock = document.querySelector('main');
const divapp = document.querySelector(`.sol03`);

btnValidate.addEventListener('click', () => {
    const username = inputUsername.value;
    render(username);
})

function render(username){
    if (isEmpty(username)){
        //mainBlock.innerHTML = /* html */ `
        divapp.innerHTML = /* html */ `
        <span>Debe introducir su nombre</span>
        </br>
        <a href="javascript:location.reload()">Recargar</a>`;
       
        return
    }
    // mainBlock.innerHTML = /* html */ `<span>Hola ${username}</span>`;
    divapp.innerHTML= /* html */ `<span>Hola ${username}</span>        
    </br>
    <a href="javascript:location.reload()">Recargar</a>`;

}

function isEmpty(username) {
    const stringLength = username.length;
    return (stringLength === 0) ? true : false;
}