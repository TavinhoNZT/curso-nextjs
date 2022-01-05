function gerarLista(final = 10) {
    const lista = []
    for (let i = 1; i <= final; i++) {
        lista.push(<span>{i}, </span>)
    }
    return lista
}

export default function lista() {
    return (
        <div>
            {gerarLista(20)}
        </div>
    )
}