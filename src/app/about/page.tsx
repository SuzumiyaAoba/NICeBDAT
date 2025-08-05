import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">静的サイトについて</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            このサイトはNext.js 15のSSG（Static Site Generation）機能を使用して構築されています。
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">SSGの利点</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>高速な読み込み速度</li>
            <li>SEOに最適化</li>
            <li>サーバーコストの削減</li>
            <li>高い可用性</li>
            <li>CDNでの配信が可能</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">技術スタック</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Next.js 15</li>
            <li>React 18</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>App Router</li>
          </ul>
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