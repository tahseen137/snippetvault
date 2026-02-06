'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import storage from '@/lib/storage';
import { Snippet } from '@/types/snippet';

export default function SnippetView() {
  const params = useParams();
  const [snippet, setSnippet] = useState<Snippet | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const s = storage.getById(params.id as string);
    setSnippet(s);
  }, [params.id]);

  const copy = () => {
    if (snippet) { navigator.clipboard.writeText(snippet.code); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  if (!snippet) return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center"><p className="text-4xl mb-4">🔍</p><p className="text-gray-400">Snippet not found</p>
        <Link href="/dashboard" className="mt-4 inline-block text-purple-400 hover:text-purple-300">← Back to dashboard</Link></div>
    </main>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950">
      <nav className="border-b border-white/5 px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">SnippetVault</Link>
        <Link href="/dashboard" className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-medium transition-colors text-white">Dashboard</Link>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">{snippet.title}</h1>
              {snippet.description && <p className="text-sm text-gray-400 mt-1">{snippet.description}</p>}
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full">{snippet.language}</span>
              <button onClick={copy} className="px-4 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 transition-colors">
                {copied ? '✓ Copied!' : '📋 Copy'}
              </button>
            </div>
          </div>
          <pre className="px-6 py-5 overflow-x-auto bg-gray-900/50"><code className="text-sm font-mono text-green-400 leading-relaxed">{snippet.code}</code></pre>
          {snippet.tags.length > 0 && (
            <div className="px-6 py-3 border-t border-white/5 flex gap-2 flex-wrap">
              {snippet.tags.map(t => <span key={t} className="px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded-full">#{t}</span>)}
            </div>
          )}
          <div className="px-6 py-3 border-t border-white/5 text-xs text-gray-500">
            Created {new Date(snippet.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </main>
  );
}
