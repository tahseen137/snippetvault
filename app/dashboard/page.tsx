'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import storage from '@/lib/storage';
import { Snippet, SUPPORTED_LANGUAGES } from '@/types/snippet';

export default function Dashboard() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState('');
  const [filterLang, setFilterLang] = useState('');

  useEffect(() => { setSnippets(storage.getAll()); }, []);

  const create = () => {
    if (!code.trim()) return;
    storage.create({ title: title || 'Untitled', language, code, tags: tags.split(',').map(t => t.trim()).filter(Boolean), description });
    setTitle(''); setCode(''); setTags(''); setDescription(''); setShowForm(false);
    setSnippets(storage.getAll());
  };

  const remove = (id: string) => { storage.delete(id); setSnippets(storage.getAll()); };

  const filtered = snippets.filter(s => {
    if (filterLang && s.language !== filterLang) return false;
    if (search && !s.title.toLowerCase().includes(search.toLowerCase()) && !s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))) return false;
    return true;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950">
      <nav className="border-b border-white/5 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">SnippetVault</Link>
        <button onClick={() => setShowForm(!showForm)} className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-medium transition-colors text-white">
          {showForm ? 'Cancel' : '+ New Snippet'}
        </button>
      </nav>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {showForm && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">New Snippet</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500" />
              <select value={language} onChange={e => setLanguage(e.target.value)} className="bg-gray-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500">
                {SUPPORTED_LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <textarea value={code} onChange={e => setCode(e.target.value)} placeholder="Paste your code here..." rows={8} className="w-full bg-gray-900 border border-white/10 rounded-lg px-4 py-3 text-green-400 font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500 mb-4" />
            <input value={tags} onChange={e => setTags(e.target.value)} placeholder="Tags (comma separated)" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 mb-4" />
            <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description (optional)" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 mb-4" />
            <button onClick={create} className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition-colors text-white">Save Snippet</button>
          </div>
        )}
        <div className="flex gap-4 mb-6">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search snippets..." className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500" />
          <select value={filterLang} onChange={e => setFilterLang(e.target.value)} className="bg-gray-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500">
            <option value="">All Languages</option>
            {SUPPORTED_LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        <p className="text-sm text-gray-500 mb-4">{filtered.length} snippet{filtered.length !== 1 ? 's' : ''}</p>
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500"><p className="text-4xl mb-4">📝</p><p>No snippets yet. Create your first one!</p></div>
        ) : (
          <div className="space-y-4">
            {filtered.map(s => (
              <div key={s.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-colors">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-white">{s.title}</h3>
                    <span className="px-2 py-0.5 bg-purple-900/50 text-purple-300 text-xs rounded-full">{s.language}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => navigator.clipboard.writeText(s.code)} className="px-3 py-1 text-xs bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 transition-colors">Copy</button>
                    <Link href={`/s/${s.id}`} className="px-3 py-1 text-xs bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 transition-colors">Share</Link>
                    <button onClick={() => remove(s.id)} className="px-3 py-1 text-xs bg-red-900/30 hover:bg-red-900/50 rounded-lg text-red-400 transition-colors">Delete</button>
                  </div>
                </div>
                <pre className="px-5 py-4 overflow-x-auto"><code className="text-sm font-mono text-green-400">{s.code.length > 300 ? s.code.slice(0, 300) + '...' : s.code}</code></pre>
                {s.tags.length > 0 && (
                  <div className="px-5 pb-3 flex gap-2 flex-wrap">
                    {s.tags.map(t => <span key={t} className="px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded-full">#{t}</span>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
