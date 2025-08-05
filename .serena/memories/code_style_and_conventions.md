# コードスタイルと規約

## TypeScript設定
- **strict**: true (厳密な型チェック)
- **target**: ES2022
- **jsx**: preserve (Next.js用)
- **moduleResolution**: bundler
- **baseUrl**: "." (ルートディレクトリ)
- **paths**: "@/*" -> "./src/*" (エイリアス設定)

## ESLint設定
- **next/core-web-vitals**: Next.js推奨の設定を使用

## コンポーネント設計原則
- **Server Components優先**: クライアントサイドでの実行が必要な場合のみClient Components使用
- **再利用可能性**: コンポーネントの再利用を意識した設計
- **型安全性**: TypeScriptの厳密な型チェックを活用

## ファイル構成
- **App Router**: src/app/配下にページとレイアウトを配置
- **page.tsx**: ページコンポーネント
- **layout.tsx**: レイアウトコンポーネント
- **loading.tsx**: ローディングUI
- **error.tsx**: エラーハンドリング
- **not-found.tsx**: 404ページ

## スタイリング
- **Tailwind CSS**: ユーティリティクラスを使用
- **レスポンシブデザイン**: lg:, md:などのブレイクポイント使用
- **ダークモード対応**: dark:プレフィックス使用

##命名規約
- **コンポーネント**: PascalCase (例: Home, ErrorPage)
- **ファイル**: kebab-case または camelCase
- **CSS クラス**: Tailwindのユーティリティクラス使用