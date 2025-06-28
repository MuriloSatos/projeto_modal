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

async function deletarVenda(event, id) {
    const resultado = await db.query('delete from sistema.venda where id = $1', [id])
    return resultado.rows;
}
async function atualizarVenda(event, id, codigoproduto, dataVenda, precoVenda, codVenda, quantidadePeca, valorTotal, statusVenda) {
    const resultado = await db.query('update sistema.venda set codigoproduto = $2, dataVenda = $3, precoVenda = $4, codVenda = $5, quantidadePeca = $6, valorTotal = $7, statusVenda = $8 where id = $1', [id, codigoproduto, dataVenda, precoVenda, codVenda, quantidadePeca, valorTotal, statusVenda])
    return resultado.rows;
}
async function adicionarVenda(event, codigoproduto, dataVenda, precoVenda, codVenda, quantidadePeca, valorTotal, statusVenda) {
    const resultado = await db.query('insert into sistema.venda (codigoproduto, dataVenda, precoVenda, codVenda, quantidadePeca, valorTotal, statusVenda) values ($1,$2,$3,$4,$5,$6,$7)', [codigoproduto, dataVenda, precoVenda, codVenda, quantidadePeca, valorTotal, statusVenda])
    return resultado.rows
}

module.exports = {
    buscarVenda,
    buscarVendaNome,
    deletarVenda,
    atualizarVenda,
    adicionarVenda
}