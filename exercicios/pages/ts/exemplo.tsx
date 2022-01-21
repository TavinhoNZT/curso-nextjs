import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="Otavio" idade={31} />
            <Pessoa nome="Dayane" />
        </div>
    )
}