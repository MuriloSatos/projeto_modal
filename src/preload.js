const {contextBridge,ipcRenderer} = require('electron')


function buscarCliente(){
    return ipcRenderer.invoke('buscar-cliente')
}

function excluirCliente(id){
    return ipcRenderer.invoke('deletar-cliente',id)
}

function atualizarCliente(id,nome,senha,email){
    return ipcRenderer.invoke('atualizar-cliente',id,nome,senha,email)
}

function adicionarCliente(nome,senha,email,cpf){
    return ipcRenderer.invoke('adicionar-cliente',nome,senha,email,cpf)
}


function buscarProduto(){
    return ipcRenderer.invoke('buscar-produto')
}
function excluirProduto(id){
    return ipcRenderer.invoke('deletar-produto',id)
} 
function atualizarProduto(id,nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto,codigoproduto){
    return ipcRenderer.invoke('atualizar-produto',id,nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto,codigoproduto)
}
function adicionarProduto(nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto,codigoproduto){
    return ipcRenderer.invoke('adicionar-produto',nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto,codigoproduto)
}
function buscarProdutoNome(nomeproduto){
    return ipcRenderer.invoke('buscar-produto-nome',nomeproduto)
}

contextBridge.exposeInMainWorld('todosAPI',
    {
        buscarCliente,
        excluirCliente,
        atualizarCliente,
        adicionarCliente,

        buscarProduto,
        excluirProduto,
        atualizarProduto,
        adicionarProduto,
        buscarProdutoNome,

        validarLogin
    }
)
function validarLogin(nome,senha){
    return ipcRenderer.invoke('validar-login',nome,senha)
}


function abrirJanelaPrincipal(){
    ipcRenderer.send('abrir-menu')
}
function abrirMenuCliente(){
    ipcRenderer.send('abrir-menu-cliente')
}

function abrirCliente(){
    ipcRenderer.send('abrir-cliente')
}
function abrirProduto(){
    ipcRenderer.send('abrir-produto')
}

contextBridge.exposeInMainWorld('janelaAPI',
   { 
    abrirCliente,
    abrirProduto,
    abrirJanelaPrincipal,
    abrirMenuCliente

   }
)