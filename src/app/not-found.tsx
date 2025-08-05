import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-xl text-gray-600 mb-8">ページが見つかりませんでした</p>
      <p className="text-gray-500 mb-8">
        お探しのページは存在しないか、移動された可能性があります。
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        ホームに戻る
      </Link>
    </div>
  )
} 