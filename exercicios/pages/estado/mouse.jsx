import { useState } from "react"

export default function mouse() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [x, setX] = useState(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [y, setY] = useState(0)



    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    function quandoMover(ev) {
       setX(ev.clientX)
        setY(ev.clientY)
    }

    return (
    <div style={style} onMouseMove={quandoMover}>
        <span>Eixo X: {x}</span>
        <span>Eixo Y: {y}</span>
        
    </div>
)
}