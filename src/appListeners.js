const {ipcMain} = require('electron')


const {
    buscarcliente,
    deletarCliente,
    atualizarCliente,
    adicionarCliente
} = require('./cliente/clienteDb')

const { 
    buscarProduto,
    deletarProduto,
    atualizarProduto,
    adicionarProduto,
    buscarProdutoNome
} = require('./produto/produtoDb')


const {
    modalAbrirCliente,
    modalAbrirProduto
} = require('./janelaModal')

function registrarCliente(){
    ipcMain.handle('buscar-cliente', buscarcliente);
    ipcMain.handle('deletar-cliente', deletarCliente);
    ipcMain.handle('atualizar-cliente', atualizarCliente);
    ipcMain.handle('adicionar-cliente', adicionarCliente);
}

function registrarProduto(){
    ipcMain.handle('buscar-produto', buscarProduto);
    ipcMain.handle('deletar-produto', deletarProduto);
    ipcMain.handle('atualizar-produto', atualizarProduto);
    ipcMain.handle('adicionar-produto', adicionarProduto); 
    ipcMain.handle('buscar-produto-nome', buscarProdutoNome);
}



function registrarJanelas(){
    ipcMain.on('abrir-cliente',modalAbrirCliente),
    ipcMain.on('abrir-produto',modalAbrirProduto)
}

function registrarTodos(){
    registrarCliente();
    registrarJanelas();
    registrarProduto();
}
module.exports = {
    registrarTodos
    
}