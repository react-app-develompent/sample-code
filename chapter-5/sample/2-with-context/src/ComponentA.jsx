import { useContext } from "react";
import { TextContext } from "./App";

function ComponentA() {
  const { inputText } = useContext(TextContext);
  console.log(inputText);

  return (
    <div>
      <p>ComponentAで表示中: {inputText}</p>
    </div>
  );
}

export default ComponentA;
