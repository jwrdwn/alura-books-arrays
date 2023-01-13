let livros = []
const endpointAPI = `https://guilhermeonrails.github.io/casadocodigo/livros.json`

getBuscaLivrosDaAPI()

async function getBuscaLivrosDaAPI() {
    const resposta = await fetch(endpointAPI)
    livros = await resposta.json()
    let livrosComDesconto = aplicaDesconto(livros)
    exibeLivros(livrosComDesconto)
}
