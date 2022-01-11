import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Familia {props.familia}</h1>
            <Filho nome="Pedro" familia={props.familia} />
            <Filho nome="Joao" familia={props.familia} />
            <Filho {...props} nome="Otavio"  />
        </div>
    )
}