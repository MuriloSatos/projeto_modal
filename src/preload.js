const {contextBridge,ipcRenderer} = require('electron')


function buscarCliente(){
    return ipcRenderer.invoke('buscar-cliente')
}

function excluirCliente(id){
    return ipcRenderer.invoke('deletar-cliente',id)
}

function atualizarCliente(cpf,senha,email){
    return ipcRenderer.invoke('atualizar-cliente',cpf,senha,email)
}

function adicionarCliente(nome,senha,email){
    return ipcRenderer.invoke('adicionar-cliente',nome,senha,email)
}



contextBridge.exposeInMainWorld('clienteAPI',
    {
        buscarCliente,
        excluirCliente,
        atualizarCliente,
        adicionarCliente
    }
)

function abrirCliente(){
    ipcRenderer.send('abrir-cliente')
}


contextBridge.exposeInMainWorld('janelaAPI',
   { 
    abrirCliente
   }
)