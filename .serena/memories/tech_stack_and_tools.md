# 技術スタックとツール

## フレームワーク・ライブラリ
- **Next.js**: 15.2.4 (App Router, Server Components, SSG)
- **React**: ^18 (UIライブラリ)
- **TypeScript**: ^5 (型安全性)

## スタイリング
- **Tailwind CSS**: ^3.3.0 (ユーティリティファーストCSS)
- **PostCSS**: ^8 (CSS処理)
- **autoprefixer**: ^10.0.1 (ベンダープレフィックス)

## 開発ツール
- **ESLint**: ^8 (コード品質管理)
- **eslint-config-next**: 15.2.4 (Next.js用ESLint設定)

## その他
- **serve**: ^14.2.4 (静的ファイルサーバー)
- **@types/***: Node.js, React, React-DOM用の型定義

## 設定ファイル
- `tsconfig.json`: 厳密な型チェック、ES2022ターゲット
- `.eslintrc.json`: next/core-web-vitals設定
- `tailwind.config.ts`: Tailwind CSS設定
- `next.config.js`: SSG用設定 (output: 'export', trailingSlash: true)
- `postcss.config.js`: PostCSS設定