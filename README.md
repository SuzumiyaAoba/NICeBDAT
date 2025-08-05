# mieruca - Next.js 15 SSG プロジェクト

Next.js 15を使用した静的サイト生成（SSG）対応のWebアプリケーションです。

## 特徴

- **Next.js 15**: 最新のApp RouterとServer Components
- **Static Site Generation (SSG)**: ビルド時にHTMLを生成
- **TypeScript**: 型安全性の確保
- **Tailwind CSS**: モダンなスタイリング
- **SEO最適化**: メタデータとOpen Graph対応
- **パフォーマンス**: 高速な読み込みと最適化

## 技術スタック

- Next.js 15.2.4
- React 18
- TypeScript 5
- Tailwind CSS 3.3.0
- ESLint
- PostCSS

## セットアップ

### 前提条件

- Node.js 18.17以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 利用可能なスクリプト

```bash
# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# 静的サイトのビルド
npm run export

# 静的サイトのローカルサーバー起動
npm run serve

# リンターの実行
npm run lint
```

## プロジェクト構造

```
mieruca/
├── src/
│   └── app/
│       ├── layout.tsx          # ルートレイアウト
│       ├── page.tsx            # ホームページ
│       ├── loading.tsx         # ローディングUI
│       ├── error.tsx           # エラーハンドリング
│       ├── not-found.tsx       # 404ページ
│       ├── globals.css         # グローバルスタイル
│       ├── about/
│       │   └── page.tsx        # 静的サイトについて
│       ├── features/
│       │   └── page.tsx        # Next.js 15の機能
│       ├── performance/
│       │   └── page.tsx        # パフォーマンス最適化
│       └── deploy/
│           └── page.tsx        # デプロイ方法
├── public/                     # 静的アセット
├── next.config.js             # Next.js設定
├── tailwind.config.ts         # Tailwind CSS設定
├── tsconfig.json              # TypeScript設定
└── package.json               # 依存関係
```

## SSG設定

このプロジェクトは静的サイト生成（SSG）に最適化されています：

### 設定内容

- `output: 'export'`: 静的ファイルの出力
- `trailingSlash: true`: URL末尾のスラッシュ
- `images.unoptimized: true`: 静的エクスポート用の画像設定
- `experimental.ppr: true`: Partial Prerendering

### ビルドプロセス

```bash
# 静的サイトのビルド
npm run build

# 出力ディレクトリ: out/
```

## デプロイ

### 推奨プラットフォーム

1. **Vercel**: Next.jsの開発元が提供
2. **Netlify**: 静的サイトに特化
3. **GitHub Pages**: 無料で利用可能
4. **AWS S3 + CloudFront**: 高可用性

### ローカルでの確認

```bash
# 静的サイトのビルド
npm run build

# ローカルサーバーで確認
npm run serve
```

## パフォーマンス最適化

- **静的生成**: ビルド時にHTMLを生成
- **画像最適化**: WebP、AVIF形式のサポート
- **コード分割**: 必要なコードのみを読み込み
- **キャッシュ戦略**: ブラウザキャッシュの活用

## SEO設定

- メタデータの最適化
- Open Graph対応
- Twitter Cards対応
- 構造化データ対応
- サイトマップ生成

## 開発ガイドライン

### コードスタイル

- TypeScriptの厳密な型チェック
- ESLintによるコード品質管理
- Prettierによるコードフォーマット

### コンポーネント設計

- Server Componentsを優先使用
- Client Componentsは必要最小限
- 再利用可能なコンポーネント設計

## トラブルシューティング

### よくある問題

1. **ビルドエラー**: Node.jsのバージョンを確認
2. **画像が表示されない**: `images.unoptimized: true`の設定を確認
3. **ルーティングエラー**: `trailingSlash: true`の設定を確認

## ライセンス

MIT License

## 貢献

プルリクエストやイシューの報告を歓迎します。 