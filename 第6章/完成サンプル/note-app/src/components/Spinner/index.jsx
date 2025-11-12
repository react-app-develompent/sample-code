import "./index.css";

function Spinner({ size = "medium" }) {
  return (
    <div className={`spinner spinner--${size}`}>
      <div className="spinner__circle"></div>
    </div>
  );
}

export default Spinner;
