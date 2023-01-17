const btnFiltrarLivros = document.querySelectorAll('.btn')

btnFiltrarLivros.forEach(btn => btn.addEventListener('click', filtraLivros))

function filtraLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    
    exibeLivros(livrosFiltrados)
    if(categoria == 'disponivel') {
        const valorTotal = calculaValorTotalDosLivrosDisponiveis(livrosFiltrados)
        
        exibeValorTotalDosLivrosDisponiveis(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibeValorTotalDosLivrosDisponiveis(valorTotal) {
    elementoPrecoTotalDosLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}
