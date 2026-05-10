import { produtos } from "./bd.js";

function listarProdutos(){
    return produtos
}

function listarPorCategoria(categoria){
    const produtosFiltrados = produtos.filter(produto => 
        produto.categoria === categoria
    );
    return produtosFiltrados
}

function calcularValorEstoque(produtos) {
    return produtos.reduce((total, produto) => {
      return total + (produto.preco * produto.quantidade);
    }, 0);
  }

function pegarId(id){
    const produtosFiltro = produtos.filter(produto =>
        produto.id === Number(id)
    )
    return produtosFiltro
}
function pegarNome(nome) {
    const produtosFiltro = produtos.filter(produto =>
        produto.nome.toLowerCase() === nome.toLowerCase()
    )

    return produtosFiltro    
}

function quantidadeMenordedez() {
    const produtosFiltrados = produtos.filter(produto =>
        produto.quantidade < 10
    )

    return produtosFiltrados
}

export {listarProdutos, listarPorCategoria, calcularValorEstoque, pegarId, pegarNome, quantidadeMenordedez}