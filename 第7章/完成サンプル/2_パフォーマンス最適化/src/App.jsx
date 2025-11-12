import { useState, useMemo, memo, useCallback } from 'react';
import './App.css';

// React.memoでコンポーネントをメモ化
const Child = memo(function Child({ onClick }) {
  return <p onClick={onClick}>子コンポーネント</p>;
});

function App() {
  // 2つのカウンターのstateを定義
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // useMemoで計算結果をメモ化
  const result = useMemo(() => {
    console.log('計算が実行されました');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += count * i;
    }
    return result;
    // countが変わったときのみ再計算
  }, [count]);

  // useCallbackで関数をメモ化
  const handleClick = useCallback(() => {
    console.log('クリックされました');
  }, []); // 空配列のため、関数は初回のみ作成される

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

      <p>その他のカウント: {otherCount}</p>
      <button onClick={() => setOtherCount(otherCount + 1)}>+</button>

      <p>計算結果: {result}</p>

      {/* 関数をpropsとして渡す */}
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
