export default function jsx4() {
    const subtitulo = "Estou no JavaScript!"

    return (
        <div>
            <h1>Integraçao JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(13, 39)}</h4>
            <h5>{entre(9.6, 1 , 10)}</h5>
        </div>
    )
}

function entre(valor, min, max) {
    if (valor >= min && valor <= max) {
        return "Sim"
    } else {
        return "Não"
    }
}
