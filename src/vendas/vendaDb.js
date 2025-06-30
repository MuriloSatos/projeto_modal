const db = require('../db')

async function buscarVenda() {
    const resultado = await db.query('select * from sistema.venda order by codigoproduto')
    return resultado.rows;
}
async function buscarVendaNome(event, idcliente) {
    const termoBusca = `%${idcliente}%`;
    const resultado = await db.query('select * from sistema.venda Where idcliente  like  $1 ', [termoBusca])
    return resultado.rows;
}   

async function deletarVenda(event, idcliente) {
    const resultado = await db.query('delete from sistema.venda where id = $1', [idcliente])
    return resultado.rows;
}
async function atualizarVenda(event, idcliente, codigoproduto, dataVenda, codVenda, quantidadePeca, valorTotal, statusVenda) {
    const resultado = await db.query('update sistema.venda set codigoproduto = $2, dataVenda = $3, codVenda = $4, quantidadePeca = $5, valorTotal = $6, statusVenda = $7 where idcliente = $1', [idcliente, codigoproduto, dataVenda, codVenda, quantidadePeca, valorTotal, statusVenda])
    return resultado.rows;
}
async function adicionarVenda(event, codigoproduto, dataVenda, codVenda, quantidadePeca, valorTotal, statusVenda) {
    const resultado = await db.query('insert into sistema.venda (codigoproduto, dataVenda, codVenda, quantidadePeca, valorTotal, statusVenda) values ($1,$2,$3,$4,$5,$6,)', [codigoproduto, dataVenda, codVenda, quantidadePeca, valorTotal, statusVenda])
    return resultado.rows
}

module.exports = {
    buscarVenda,
    buscarVendaNome,
    deletarVenda,
    atualizarVenda,
    adicionarVenda
}