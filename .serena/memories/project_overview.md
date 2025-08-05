# NICeBDAT (将来: mieruca) プロジェクト概要

## プロジェクトの目的
Next.js 15を使用した静的サイト生成（SSG）対応のWebアプリケーション。
高速な読み込みとSEO最適化に特化した静的サイトのデモンストレーション。

## 技術スタック
- **Next.js 15.2.4**: App RouterとServer Components使用
- **React 18**: UIライブラリ
- **TypeScript 5**: 型安全性の確保
- **Tailwind CSS 3.3.0**: モダンなスタイリング
- **ESLint**: next/core-web-vitals設定
- **PostCSS**: CSS処理
- **autoprefixer**: ベンダープレフィックス自動付与

## プロジェクト構造
```
src/
└── app/
    ├── layout.tsx          # ルートレイアウト
    ├── page.tsx            # ホームページ
    ├── loading.tsx         # ローディングUI
    ├── error.tsx           # エラーハンドリング
    ├── not-found.tsx       # 404ページ
    ├── globals.css         # グローバルスタイル
    ├── about/page.tsx      # 静的サイトについて
    ├── features/page.tsx   # Next.js 15の機能
    ├── performance/page.tsx # パフォーマンス最適化
    └── deploy/page.tsx     # デプロイ方法
```

## 特徴
- Static Site Generation (SSG)対応
- SEO最適化 (メタデータ、Open Graph、Twitter Cards)
- パフォーマンス最適化 (画像最適化、コード分割)
- TypeScriptの厳密な型チェック
- Server Components優先の設計