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

export {listarProdutos, listarPorCategoria, calcularValorEstoque, pegarId}