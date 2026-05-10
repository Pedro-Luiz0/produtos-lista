import express from 'express'

import { listarProdutos, listarPorCategoria , calcularValorEstoque, pegarId, pegarNome, quantidadeMenordedez} from './bd/servicos.js'


const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/produtos', (req, res) => {
   let produtos = listarProdutos()
   res.json(produtos)
})

app.get('/produtosCategoria/:categoria', (req, res) => {
   let {categoria} = req.params
   let produtosFiltrados = listarPorCategoria(categoria)
   res.json(produtosFiltrados)
})

app.get('/estoque/valor-total', (req, res) => {
  const total = calcularValorEstoque(listarProdutos());

  res.json({
    mensagem: "Valor total em estoque",
    total
  });
});

app.get('/produtosId/:id', (req, res) => {
  let {id} = req.params
  let produtosFiltro = pegarId(id)
  res.json(produtosFiltro)
})

app.get('/produtosNome/:nome', (req, res) => {
  let {nome} = req.params
  let produtosFiltro = pegarNome(nome)
  res.json(produtosFiltro)
})

app.get('/produtos/quantidadeMenorQue10', (req, res) => {

    const produtosFiltrados = quantidadeMenordedez()

    res.json(produtosFiltrados)

})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

