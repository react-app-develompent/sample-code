import ComponentA from "./ComponentA";

function WrapperA() {
  return (
    <div style={{ border: "1px solid #000", marginTop: "10px" }}>
      <p>WrapperA</p>
      <ComponentA />
    </div>
  );
}

export default WrapperA;
