export default function Filho(props) {
  console.log(props.funcao);
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={() => props.funcao("Passei no ENEM!")}>
        Falar com o pai
      </button>
    </div>
  );
}
