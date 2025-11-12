# パフォーマンス最適化サンプルプロジェクト

このプロジェクトは、第7章セクション2「パフォーマンス最適化でアプリケーションを快適にしよう」の完成サンプルコードです。

## 概要

Reactアプリケーションのパフォーマンス最適化手法を学ぶためのサンプルアプリケーションです。以下の最適化手法が実装されています。

### 実装されている最適化手法

1. **useMemo**: 重い計算結果をメモ化し、不要な再計算を防ぐ
2. **React.memo**: コンポーネント全体をメモ化し、propsが変わらない場合の再レンダリングを防ぐ
3. **useCallback**: 関数をメモ化し、不要な関数の再作成を防ぐ

## セットアップ

1. 依存パッケージのインストール

```bash
npm install
```

2. 開発サーバーの起動

```bash
npm run dev
```

3. ブラウザで http://localhost:5173 にアクセス

## 動作確認方法

### React DevToolsでレンダリングを可視化

1. F12キーでデベロッパーツールを開く
2. 「Components」タブを選択
3. 歯車アイコンをクリック
4. 「Highlight updates when components render」にチェック

### 最適化の効果を確認

1. **上の「+」ボタン（count更新用）をクリック**
   - 計算が実行される（コンソールに「計算が実行されました」と表示）
   - 計算結果が更新される
   - わずかな遅延が発生する

2. **下の「+」ボタン（otherCount更新用）をクリック**
   - 計算は実行されない（useMemoによる最適化）
   - 遅延なくスムーズに更新される
   - 子コンポーネントも再レンダリングされない（React.memoとuseCallbackによる最適化）

3. **「子コンポーネント」のテキストをクリック**
   - コンソールに「クリックされました」と表示される
   - useCallbackでメモ化された関数が実行される

## プロジェクト構造

```
performance-improvement/
├── index.html          # エントリーポイントHTML
├── package.json        # プロジェクト設定
├── vite.config.js      # Vite設定
└── src/
    ├── main.jsx        # Reactアプリケーションのエントリーポイント
    ├── App.jsx         # メインコンポーネント（すべての最適化手法を実装）
    ├── App.css         # アプリケーションスタイル
    └── index.css       # グローバルスタイル
```

## 最適化手法の詳細

### useMemo（計算結果のメモ化）

```jsx
const result = useMemo(() => {
  // 重い計算処理
  return 計算結果;
}, [count]); // countが変わったときのみ再計算
```

### React.memo（コンポーネントのメモ化）

```jsx
const Child = memo(function Child({ onClick }) {
  return <p onClick={onClick}>子コンポーネント</p>;
});
```

### useCallback（関数のメモ化）

```jsx
const handleClick = useCallback(() => {
  console.log('クリックされました');
}, []); // 初回のみ関数を作成
```

## 使用技術

- React 19.1.1
- Vite 7.1.2
- ESLint 9.33.0
