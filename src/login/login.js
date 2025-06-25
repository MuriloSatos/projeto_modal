const login = document.getElementById('nome');
const senha = document.getElementById('senha');
const btn_acessar = document.getElementById('acessar');
const msg = document.getElementById('msg');

btn_acessar.addEventListener('click', validarLogin)


async function validarLogin() {
    const retorno = await window.todosAPI.validarLogin(login.value, senha.value);
    console.log(retorno.perfil);
if (!retorno) {
    msg.textContent = "Senha ou nome de usuario incorreto";
    msg.style.color = "red";
  } else {
    if (retorno.perfil === "adm") {
      localStorage.setItem("perfil", retorno.perfil);
      await window.janelaAPI.abrirJanelaPrincipal();
    } else {
      localStorage.setItem("perfil", retorno.perfil);
      await window.janelaAPI.abrirJanelaPrincipal();
    }
  }
} 



