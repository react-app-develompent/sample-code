# React DevTools サンプルプロジェクト

このプロジェクトは、第7章セクション1「React DevToolsを使おう」の完成サンプルコードです。

## 概要

React DevToolsの基本的な使い方を学ぶためのシンプルなアプリケーションです。以下の機能が含まれています。

- 子コンポーネント（Profile）がpropsを受け取る
- 親コンポーネント（App）でstateを管理
- ボタンクリックでstateを更新

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

## React DevToolsの使い方

1. Chrome拡張機能「React Developer Tools」をインストール
2. F12キーでデベロッパーツールを開く
3. 「Components」タブを選択
4. コンポーネントを選択してpropsとstateを確認

## プロジェクト構造

```
dev-tools-sample/
├── index.html          # エントリーポイントHTML
├── package.json        # プロジェクト設定
├── vite.config.js      # Vite設定
└── src/
    ├── main.jsx        # Reactアプリケーションのエントリーポイント
    ├── App.jsx         # メインコンポーネント
    ├── App.css         # アプリケーションスタイル
    └── index.css       # グローバルスタイル
```

## 使用技術

- React 19.1.1
- Vite 7.1.2
- ESLint 9.33.0
