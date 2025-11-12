import { useState } from 'react';
import './App.css';

// 子コンポーネント（propsを受け取る）
function Profile({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>年齢: {age}歳</p>
    </div>
  );
}

function App() {
  // stateを定義
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* propsを渡してコンポーネントを使用 */}
      <Profile name="田中太郎" age={20} />
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>カウント</button>
    </div>
  );
}

export default App;
