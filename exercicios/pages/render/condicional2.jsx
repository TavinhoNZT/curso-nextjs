import If from "../../components/If";

export default function condicional1() {
  const numero = 5;
  return (
    <div>
      <If teste={numero % 2 === 0}>
        <h1>O numero {numero} e par</h1>
      </If>
      <If teste={numero % 2 === 1}>
        <h1>O numero {numero} e impar</h1>
      </If>
    </div>
  );
}
