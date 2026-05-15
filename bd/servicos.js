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

function maioresPrecos() {

    // Ordena os produtos pelo valor total em estoque
    const ordenados = produtos.sort((a, b) => {
        return (b.preco * b.quantidade) - (a.preco * a.quantidade)
    })

    // Pega os 5 primeiros
    return ordenados.slice(0, 5)
}

function maiorValorEstoque() {

    const ordenados = produtos.sort((a, b) => {

        const valorB = b.preco * b.quantidade
        const valorA = a.preco * a.quantidade

        return valorB - valorA
    })

    // Retorna somente o primeiro
    return ordenados[0]
}

function valorPorCategoria() {

    const categorias = {}

    produtos.forEach(produto => {

        const valorEstoque = produto.preco * produto.quantidade

        // Se a categoria ainda não existir
        if (!categorias[produto.categoria]) {
            categorias[produto.categoria] = 0
        }

        // Soma o valor
        categorias[produto.categoria] += valorEstoque
    })

    return categorias
}

export {listarProdutos, listarPorCategoria, calcularValorEstoque, pegarId, pegarNome, quantidadeMenordedez, maioresPrecos, maiorValorEstoque, valorPorCategoria}