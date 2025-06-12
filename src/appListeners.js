const {ipcMain} = require('electron')


const {
    buscarcliente,
    deletarCliente,
    atualizarCliente,
    adicionarCliente
} = require('./cliente/clienteDb')

const {
    modalAbrirCliente
} = require('./janelaModal')

function registrarCliente(){
    ipcMain.handle('buscar-cliente', buscarcliente);
    ipcMain.handle('deletar-cliente', deletarCliente);
    ipcMain.handle('atualizar-cliente', atualizarCliente);
    ipcMain.handle('adicionar-cliente', adicionarCliente);
}





function registrarJanelas(){
    ipcMain.on('abrir-cliente',modalAbrirCliente)
}

function registrarTodos(){
    registrarCliente();
    registrarJanelas();
}
module.exports = {
    registrarTodos
    
}