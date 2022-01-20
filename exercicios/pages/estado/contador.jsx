import { useState } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";

export default function contador() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [numero, setNumero] = useState(0);

  function inc() {
    setNumero(numero + 1);
  }

  function dec() {
    setNumero(numero - 1);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Contador</h1>
      <NumeroDisplay numero={numero} />
      <div>
        <button onClick={dec}> - </button>
        <button onClick={inc}> + </button>
      </div>
    </div>
  );
}
