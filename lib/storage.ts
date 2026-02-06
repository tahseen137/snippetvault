import { Snippet } from '@/types/snippet';

const STORAGE_KEY = 'snippetvault_snippets';

const storage = {
  getAll: (): Snippet[] => {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  save: (snippets: Snippet[]): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snippets));
    } catch (error) {
      console.error('Failed to save snippets:', error);
    }
  },

  create: (snippet: Omit<Snippet, 'id' | 'createdAt' | 'updatedAt'>): Snippet => {
    const snippets = storage.getAll();
    const newSnippet: Snippet = {
      ...snippet,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    snippets.push(newSnippet);
    storage.save(snippets);
    return newSnippet;
  },

  update: (id: string, updates: Partial<Snippet>): Snippet | null => {
    const snippets = storage.getAll();
    const index = snippets.findIndex(s => s.id === id);
    if (index === -1) return null;
    
    snippets[index] = {
      ...snippets[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    storage.save(snippets);
    return snippets[index];
  },

  delete: (id: string): boolean => {
    const snippets = storage.getAll();
    const filtered = snippets.filter(s => s.id !== id);
    if (filtered.length === snippets.length) return false;
    storage.save(filtered);
    return true;
  },

  getById: (id: string): Snippet | null => {
    const snippets = storage.getAll();
    return snippets.find(s => s.id === id) || null;
  },
};

export default storage;
