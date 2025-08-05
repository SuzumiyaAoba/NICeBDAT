import Link from 'next/link'

export default function Performance() {
  return (
    <div className="min-h-screen p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">パフォーマンス最適化</h1>
        
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">静的サイト生成（SSG）</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              ビルド時にHTMLファイルを生成することで、サーバーサイドの処理を最小限に抑え、
              高速な読み込みを実現します。
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>初回読み込み時間の短縮</li>
              <li>サーバー負荷の軽減</li>
              <li>SEOスコアの向上</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">画像最適化</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Next.jsの画像最適化機能により、適切なサイズとフォーマットで画像を配信します。
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>WebP、AVIF形式の自動変換</li>
              <li>レスポンシブ画像の自動生成</li>
              <li>遅延読み込み（Lazy Loading）</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">コード分割</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              必要なコードのみを読み込むことで、初期バンドルサイズを削減します。
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>動的インポートによる遅延読み込み</li>
              <li>ページ単位でのコード分割</li>
              <li>コンポーネント単位での最適化</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">キャッシュ戦略</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              適切なキャッシュ設定により、再訪問時の読み込み速度を向上させます。
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>ブラウザキャッシュの活用</li>
              <li>CDNでの配信</li>
              <li>静的アセットの長期キャッシュ</li>
            </ul>
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