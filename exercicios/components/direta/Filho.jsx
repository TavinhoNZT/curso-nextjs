export default function Filho(props) {
    return (
        <div style={{display: "flex", alignItems: 0}}>
            <h3>{props.nome}</h3>
            <h2>{props.familia}</h2>
        </div>
    )
}