const form = document.getElementById('form-valid');
const campoBinput = document.getElementById('campoB');
const campoAinput = document.getElementById('campoA');
const btnRefresh = document.querySelector('#btn-refresh');
let formEValido = false;

form.addEventListener("submit", function(e) {
    e.preventDefault();

//convertendo para número
const campoA = parseFloat(campoAinput.value);
const campoB = parseFloat(campoBinput.value);

const mensagemCorreta = `<b>Válido!</b> o número <b>${campoB}</b> é maior que o número <b>${campoA}</b>!`;

formEValido = campoB > campoA;
if(formEValido) {
    const contMensagemSucesso = document.querySelector('.success-msg') 
    contMensagemSucesso.innerHTML = mensagemCorreta;
    contMensagemSucesso.style.display = "block";
    btnRefresh.style.display = "block";

    campoAinput.value = '';
    campoBinput.value = '';
} else {
    campoBinput.style.border = "1px solid red";
    btnRefresh.style.display = "block";
    document.querySelector('.error-msg').style.display = "block";
}
});

btnRefresh.addEventListener('click', () => {
    location.reload()
});