

const paragrafo = document.getElementById('teste');
const tabelaProduto = document.getElementById('produtoTableDados');
const modalCodProduto = document.getElementById('codigo-produto');
const modalNomeProduto = document.getElementById('nome-produto');
const modalTipoProduto = document.getElementById('tipo-produto');
const modalPrecoProduto = document.getElementById('preco-produto')
const modalTamProduto = document.getElementById('tamanho-produto')
const modalMarcaProduto = document.getElementById('marca-produto')
const modalId = document.getElementById('id-produto')


const botaoExcluir = document.getElementById('btn-excluir');
botaoExcluir.addEventListener('click',excluirCliente)
const botaolimpar = document.getElementById('btn-limpar');
botaolimpar.addEventListener('click',limpar)




function mostrarDetalhes(nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto,codigoproduto,id){
modalNomeProduto.value = nomeproduto;
modalTipoProduto.value = tipoproduto;
modalPrecoProduto.value = preco;
modalTamProduto.value = tamanhoproduto;
modalMarcaProduto.value = marcaproduto;
modalCodProduto.value = codigoproduto;
modalId.value = id;
}


async function excluirProduto(){
    const id = modalId.value;
    const retorno = await window.clienteAPI.excluirCliente(id);
    mostrarDetalhes("","","","","","","");
    carregarProduto();//após deleção atualiza a lista de produto
    
}


async function atualizarProduto(){
    const id = modalIdCliente.value;
    const nomepro = modalNomeProduto.value;
    const tipo = modalTipoProduto.value;
    const preco = modalPrecoProduto.value;
    const tamanho = modalTamProduto.value;
    const marca = modalMarcaProduto.value;
    const cod = modalCodProduto.value;

    
    const retorno = await window.produtoAPI.atualizarProduto(id,nomepro,tipo,preco,tamanho,marca,cod);
    console.log(retorno);

    carregarProduto();//após deleção atualiza a lista de alunos
}


async function adicionarProduto(){
    const nomepro = modalNomeProduto.value;
    const tipo = modalTipoProduto.value;
    const preco = modalPrecoProduto.value;
    const tamanho = modalTamProduto.value;
    const marca = modalMarcaProduto.value;
    const cod = modalCodProduto.value;


    const retorno = await window.produtoAPI.adicionarProduto(nomepro,tipo,preco,tamanho,marca,cod);
    console.log(retorno);

    carregarProduto();//após deleção atualiza a lista de alunos
 }
  
function limpar(){
    modalIdCliente.value = "";
    modalNomeProduto.value = "";
    modalTipoProduto.value = "";
    modalPrecoProduto.value = "";
    modalTamProduto.value = "";
    modalMarcaProduto.value = "";
    modalCodProduto.value = "";

}


async function carregarCliente(){

    
    const listaCliente = await window.clienteAPI.buscarCliente();
    tabelaCliente.innerHTML = "";

     console.log(listaCliente)
    listaCliente.forEach(criarLinhaCliente)

    if (! listaCliente.length > 0 ){

        tabelaCliente.textContent ="sem dados"
    }
    
    lucide.createIcons(); // renderiza os ícones do Lucide

}


function criarLinhaProduto(produto){
      const linha = document.createElement("tr");

    //nome
    const celulanome = document.createElement("td");
    celulanome.textContent = cliente.nome;
    linha.appendChild(celulanome);

    //matricula
    const celulaSenha = document.createElement("td");
    celulaSenha.textContent = cliente.senha;   
    linha.appendChild(celulaSenha);

    const celulaCpf = document.createElement("td");
    celulaCpf.textContent = cliente.cpf;   
    linha.appendChild(celulaCpf);

    const celulaEmail = document.createElement("td");
    celulaEmail.textContent = cliente.email;   
    linha.appendChild(celulaEmail);

      const celulaId = document.createElement("td");
    celulaId.textContent = cliente.id;   
    linha.appendChild(celulaId);



    //botao de modificar
    const celulaBotao = document.createElement("td");
    const botao = document.createElement("button");
    botao.addEventListener("click", 
                                    function () { mostrarDetalhes(cliente.nome,cliente.senha,cliente.cpf,cliente.email,cliente.id)}
                                );
    botao.textContent = 'teste';    
    
    const icone = document.createElement("i")
    icone.setAttribute("data-lucide", "edit");
    botao.appendChild(icone);

    celulaBotao.appendChild(botao);


    linha.appendChild(celulaBotao);


    //final adiciono a linha criada com matricula,nome e botao à tabela
    tabelaCliente.appendChild(linha);

}

function salvarCliente(){
    const id = modalIdCliente.value;
    if(id){
        atualizarCliente();
    } else {
        adicionarCliente();
    }

}

carregarCliente()