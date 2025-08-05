import Link from 'next/link'

export default function Deploy() {
  return (
    <div className="min-h-screen p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">デプロイ方法</h1>
        
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">静的サイトのビルド</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              以下のコマンドで静的サイトをビルドできます：
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm">
              <code>npm run build</code>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              ビルド後、<code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">out</code>ディレクトリに静的ファイルが生成されます。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">デプロイ先プラットフォーム</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-600 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Vercel</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Next.jsの開発元が提供するプラットフォーム。自動デプロイと最適化が可能。
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-600 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Netlify</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  静的サイトに特化したプラットフォーム。GitHubとの連携が簡単。
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-600 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">GitHub Pages</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  無料で利用可能な静的サイトホスティング。GitHubリポジトリと連携。
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-600 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">AWS S3 + CloudFront</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  高可用性とスケーラビリティを提供するAWSのサービス。
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">ローカルでの確認</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              ビルドした静的サイトをローカルで確認するには：
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm">
              <code>npm run serve</code>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              これでローカルサーバーが起動し、静的サイトを確認できます。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">CI/CD設定</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              GitHub Actionsを使用した自動デプロイの例：
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out`}</pre>
            </div>
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