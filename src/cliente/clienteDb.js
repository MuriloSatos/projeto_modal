const db = require('../db')


async function buscarcliente() {
    const resultado = await db.query('select * from sistema.cliente')

    return resultado.rows;

}

async function deletarCliente(event,id){
    const resultado = await db.query('delete from sistema.cliente where id = $1', [id])
  //  console.log(event)
    return resultado.rows;
}

async function atualizarCliente(event,id,nome,senha,email) {
    console.log("vou atualizar db")
    const resultado = await db.query('update sistema.cliente set nome = $2, senha = $3, email = $4 where id = $1',[id,nome,senha,email])
     //console.log(event)
    return resultado.rows;
}

async function adicionarCliente(event,nome,senha,cpf,email){
    const resultado = await db.query('insert into sistema.cliente (nome,senha,cpf,email) values ($1,$2,$3,$4)',[nome,senha,cpf,email])
 //    console.log(event)
    return resultado.rows

}


module.exports = {
    buscarcliente,
    deletarCliente,
    atualizarCliente,
    adicionarCliente
}