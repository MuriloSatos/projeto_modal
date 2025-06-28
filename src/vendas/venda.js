const paragrafo = document.getElementById('teste');
const tabelaVenda = document.getElementById('VendaTableDados');
const codigoproduto = document.getElementById('codigo-produto');
const modalDataVenda = document.getElementById('data-venda');
const modalCodVenda = document.getElementById('codigo-venda');
const modalQuantidadePeca = document.getElementById('quantidade-peca');
const modalValor = document.getElementById('valor-total');
const modalStatus = document.getElementById('status-venda');
const modalId = document.getElementById('id-cliente');

const campoBusca = document.getElementById('busca-dev');


const botaoExcluir = document.getElementById('btn-excluir');
botaoExcluir.addEventListener('click',excluirVenda)
const botaolimpar = document.getElementById('btn-limpar');
botaolimpar.addEventListener('click',limpar)
const botaoSalvar = document.getElementById('btn-salvar');
botaoSalvar.addEventListener('click',salvarVenda)
const botaoBuscar = document.getElementById('btn-buscar');
botaoBuscar.addEventListener('click', carregarDevs)



function filtrarDevs() {
    const termo = campoBusca.value.toLowerCase();
    const filtrados = listaDevsVenda.filter(d => d.idcliente.toLowerCase().includes(termo));
    renderizarDevs(filtrados);
} 


let listaDevsVenda = []

async function carregarDevs() {
    
    const lista = await window.todosAPI.buscarVendaId(campoBusca.value);
    listaDevsVenda = lista;
    renderizarDevs(lista)

}




function renderizarDevs(lista) {
    tabelaVenda.innerHTML = ""
    lista.forEach(criarLinhaVenda)
    if (!lista.length > 0) {
        tabelaVenda.textContent = 'sem dados'
    }
    lucide.createIcons();
}


function mostrarDetalhes(codProduto,dataVenda, codVenda, quantidadePeca, valorTotal, statusVenda, id) {
    codigoproduto.value = codProduto
    modalDataVenda.value = dataVenda;
    modalCodVenda.value = codVenda;
    modalQuantidadePeca.value = quantidadePeca;
    modalValor.value = valorTotal;
    modalStatus.value = statusVenda;
    modalId.value = id;
}


 async function excluirVenda() {
    const id = modalId.value;
    const retorno = await window.todosAPI.excluirVenda(id);
    mostrarDetalhes("", "", "", "", "", "", "");
    carregarVenda();
    paragrafo.textContent = retorno;

}


async function atualizaVenda() {
    const id = modalId.value;
    const codProduto = codigoproduto.value;
    const dataVenda = modalDataVenda.value;
    const precoVenda = modalPrecoVenda.value;
    const codVenda = modalCodVenda.value;
    const quantidadePeca = modalQuantidadePeca.value;
    const valorTotal = modalValor.value;
    const statusVenda = modalStatus.value;


    
    const retorno = await window.todosAPI.atualizarVenda(id,codProduto, dataVenda, precoVenda, codVenda, quantidadePeca, valorTotal, statusVenda);
    console.log(retorno);
    carregarVenda();
}


async function adicinarVenda(){
    
    const dataVenda = modalDataVenda.value;
    const precoVenda = modalPrecoVenda.value;
    const codVenda = modalCodVenda.value;
    const quantidadePeca = modalQuantidadePeca.value;
    const valorTotal = modalValor.value;
    const statusVenda = modalStatus.value;

    const retorno = await window.todosAPI.adicionarVenda(dataVenda, precoVenda, codVenda, quantidadePeca, valorTotal, statusVenda);
    console.log(retorno);
    carregarVenda();

}

function limpar(){
    modalId.value = "";
    codigoproduto.value = "";
    modalDataVenda.value = "";

    modalCodVenda.value = "";
    modalQuantidadePeca.value = "";
    modalValor.value = "";
    modalStatus.value = "";
}

async function carregarVenda() {
    const listaVenda = await window.todosAPI.buscarVenda();
    tabelaVenda.innerHTML = "";

    console.log(listaVenda);
    listaVenda.forEach(criarLinhaVenda);

    if(!listaVenda.length > 0) {
        tabelaVenda.textContent = 'sem dados';
    }

    let clienteNaoPode = localStorage.getItem("perfil");
    if( clienteNaoPode !== "adm") {
        botaoExcluir.disabled = true;
        botaoSalvar.disabled = true;
    }

    lucide.createIcons();
}



function criarLinhaVenda(venda){
      const linha = document.createElement("tr");

    //nome
    const celulaCodPro = document.createElement("td");
    celulaCodPro.textContent = venda.codigoproduto;
    linha.appendChild(celulaCodPro);

    //matricula
    const celuladata = document.createElement("td");
    celuladata.textContent = venda.datavenda.toLocaleString('pt-BR', { dateStyle: 'short' }); 
    linha.appendChild(celuladata);

    const celulaCodVen = document.createElement("td");
    celulaCodVen.textContent = venda.codigovendas;   
    linha.appendChild(celulaCodVen);

    const celulaQuantidade = document.createElement("td");
    celulaQuantidade.textContent = venda.pecaquantidade;   
    linha.appendChild(celulaQuantidade);

    const celulaValorTotal = document.createElement("td");
    celulaValorTotal.textContent = venda.valortotal;   
    linha.appendChild(celulaValorTotal);

    const celulaStatus = document.createElement("td");
    celulaStatus.textContent = venda.statusvendas;   
    linha.appendChild(celulaStatus);


    const celulaId = document.createElement("td");
    celulaId.textContent = venda.idcliente;   
    linha.appendChild(celulaId);


    const celulaBotao = document.createElement("td");
    const botao = document.createElement("button");
    botao.addEventListener("click", 
        function () { mostrarDetalhes(venda.codigoproduto, venda.datavenda, venda.codigovenda, venda.quantidadepeca, venda.valortotal, venda.statusvenda, venda.idcliente) }
    );

    botao.textContent = 'Mostrar';

    const icone = document.createElement("i");
    icone.setAttribute("data-lucide", "edit");
    botao.appendChild(icone);

    celulaBotao.appendChild(botao);

    linha.appendChild(celulaBotao);

    tabelaVenda.appendChild(linha);

}

function salvarVenda() {
    const id = modalId.value;
    if (id) {
        atualizaVenda();
    } else {
        adicinarVenda();
    }

}

carregarVenda();