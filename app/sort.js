let btnOrdenaPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenaPorPreco.addEventListener('click', ordenaPorPreco)

function ordenaPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibeLivros(livrosOrdenados)
}