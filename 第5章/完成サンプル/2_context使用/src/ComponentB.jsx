import { useContext } from "react";
import { TextContext } from "./App";

function ComponentB() {
  const { inputText } = useContext(TextContext);

  return (
    <div>
      <p>ComponentBで表示中: {inputText}</p>
    </div>
  );
}

export default ComponentB;
