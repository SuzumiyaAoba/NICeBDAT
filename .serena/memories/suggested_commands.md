# 推奨コマンド一覧

## 開発
```bash
# 開発サーバーの起動
npm run dev

# 依存関係のインストール
npm install
```

## ビルド・デプロイ
```bash
# プロダクションビルド
npm run build

# 静的サイトのビルド（SSG）
npm run export

# 静的サイトのローカルサーバー起動
npm run serve
```

## コード品質
```bash
# ESLintによるリンティング
npm run lint
```

## 基本的なシステムコマンド（macOS/Darwin）
```bash
# ファイル一覧表示
ls -la

# ディレクトリ移動
cd <directory>

# ファイル検索
find . -name "*.tsx"

# テキスト検索
grep -r "検索文字列" .

# Git操作
git status
git add .
git commit -m "message"
git push
```

## プロジェクト固有の推奨ワークフロー
1. `npm run dev` で開発サーバー起動
2. コード編集
3. `npm run lint` でコード品質チェック
4. `npm run build` でビルド確認
5. `npm run serve` で静的サイトの動作確認