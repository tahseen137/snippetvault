import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-violet-400">Snippet</span>Vault
          </div>
          <Link
            href="/dashboard"
            className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6">
            Your code snippets,
            <br />
            <span className="text-violet-400">beautifully organized</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Save, organize, and share your code snippets with syntax highlighting and beautiful UI.
            Like GitHub Gists, but simpler and prettier.
          </p>
          <Link
            href="/dashboard"
            className="inline-block px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white text-lg rounded-lg font-semibold transition-colors shadow-lg"
          >
            Start Organizing →
          </Link>
        </div>

        {/* Features */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur p-8 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-white mb-3">Beautiful Syntax Highlighting</h3>
            <p className="text-gray-400">
              18+ languages supported with clean, readable code display
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur p-8 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-3">Search & Filter</h3>
            <p className="text-gray-400">
              Find your snippets instantly with tags and language filters
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur p-8 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🔗</div>
            <h3 className="text-xl font-bold text-white mb-3">Easy Sharing</h3>
            <p className="text-gray-400">
              Share your snippets via unique URLs with anyone
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="text-4xl font-bold text-violet-400 mb-6">$0<span className="text-xl text-gray-400">/mo</span></div>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Up to 50 snippets</li>
                <li>✓ All languages supported</li>
                <li>✓ Public sharing</li>
                <li>✓ Search & filter</li>
              </ul>
            </div>
            
            <div className="bg-violet-900/30 backdrop-blur p-8 rounded-xl border-2 border-violet-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-violet-600 px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-violet-400 mb-6">$7<span className="text-xl text-gray-400">/mo</span></div>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Unlimited snippets</li>
                <li>✓ All languages supported</li>
                <li>✓ Public & private snippets</li>
                <li>✓ Advanced search</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-20 border-t border-gray-800 text-center text-gray-500">
        <p>© 2026 SnippetVault. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
