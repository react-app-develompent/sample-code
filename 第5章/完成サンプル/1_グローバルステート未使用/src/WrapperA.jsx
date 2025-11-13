import ComponentA from "./ComponentA";

function WrapperA({ inputText }) {
  return (
    <div style={{ border: "1px solid #000", marginTop: "10px" }}>
      <p>WrapperA</p>
      <ComponentA inputText={inputText} />
    </div>
  );
}

export default WrapperA;
