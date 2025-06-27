document.addEventListener("DOMContentLoaded", () => {
    const nomeUsuario = localStorage.getItem('nome');
    const tipoPerfil = localStorage.getItem('perfil');

  
    if (tipoPerfil === 'adm') {
        document.getElementById('nomeUsuario').textContent += ' Administrador';
    } else if (tipoPerfil === 'cliente') {
        document.getElementById('nomeUsuario').textContent += ' Cliente';
    } else {
        document.getElementById('nomeUsuario').textContent += ' Perfil Desconhecido';
    }
   

}
);