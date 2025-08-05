import Link from 'next/link'

export default function Features() {
  return (
    <div className="min-h-screen p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Next.js 15の機能</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">App Router</h3>
            <p className="text-gray-600 dark:text-gray-300">
              ファイルベースのルーティングシステムで、直感的なページ構造を実現。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Server Components</h3>
            <p className="text-gray-600 dark:text-gray-300">
              サーバーサイドでレンダリングされるコンポーネントで、パフォーマンスを向上。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Static Site Generation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              ビルド時にHTMLを生成し、高速な読み込みを実現。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Image Optimization</h3>
            <p className="text-gray-600 dark:text-gray-300">
              自動的な画像最適化で、WebPやAVIF形式をサポート。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">TypeScript Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              型安全性を提供し、開発効率を向上させるTypeScriptサポート。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Tailwind CSS</h3>
            <p className="text-gray-600 dark:text-gray-300">
              ユーティリティファーストのCSSフレームワークで、迅速なスタイリング。
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
} 