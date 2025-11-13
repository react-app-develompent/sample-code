import { useState } from "react";
import WrapperA from "./WrapperA";
import ComponentB from "./ComponentB";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <WrapperA inputText={inputText} />
        <ComponentB inputText={inputText} />
      </div>
    </>
  );
}

export default App;
