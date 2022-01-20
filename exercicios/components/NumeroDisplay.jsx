export default function NumeroDisplay(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        weight: "100px",
        borderRadius: "50px",
        
        color: "#1FE20C",
        fontSize: "2rem",
        margin: "20px",
      }}
    >
      {props.numero}
    </div>
  );
}
