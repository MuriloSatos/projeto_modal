const login = document.getElementById('nome');
const senha = document.getElementById('senha');
const btn_acessar = document.getElementById('acessar');
const msg = document.getElementById('msg');

btn_acessar.addEventListener('click', validarLogin)


async function validarLogin() {
    const retorno = await window.todosAPI.validarLogin(login.value, senha.value);
    console.log(retorno.perfil);
if (retorno) {
  // Salva quem fez login
  localStorage.setItem('perfil', retorno.perfil);
  localStorage.setItem('nomeUsuario', login.value);

  // Abre a janela correta
  if (retorno.perfil === 'adm') {
    await window.janelaAPI.abrirJanelaPrincipal();
    
const perfil = localStorage.getItem('perfil');
const nome = localStorage.getItem('nomeUsuario');

if (perfil === 'adm') {
  console.log(`Admin logado: ${nome}`);
  // Exibir interface de administrador
}
  } else {
    await window.janelaAPI.abrirMenuCliente();

    const perfil = localStorage.getItem('perfil');
    const nome = localStorage.getItem('nomeUsuario');
    if (perfil === 'cliente') {
      console.log(`Cliente logado: ${nome}`);
      // Exibir interface de cliente
    } else {
      console.log(`Perfil desconhecido: ${perfil}`);
      // Tratar caso de perfil desconhecido
    }
  }


  }
} 



