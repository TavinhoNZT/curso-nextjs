export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function estatico(props) {
    return (
        <div>
            <span>Aleatorio: {props.numero} </span>
        </div>
    )
}