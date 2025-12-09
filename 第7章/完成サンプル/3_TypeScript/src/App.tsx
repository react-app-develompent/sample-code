import './App.css'

// コンポーネントに型を指定
function Profile({ name, age }: { name: string; age: number }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>年齢: {age}歳</p>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* 正しいデータに修正（ageを数値に） */}
      <Profile name="田中太郎" age={20} />
    </div>
  );
}

export default App;
