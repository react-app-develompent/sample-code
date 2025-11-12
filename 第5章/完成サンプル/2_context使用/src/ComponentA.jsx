import { useContext } from "react";
import { TextContext } from "./App";

function ComponentA() {
  const { inputText } = useContext(TextContext);

  return (
    <div>
      <p>ComponentAで表示中: {inputText}</p>
    </div>
  );
}

export default ComponentA;
