/**
 * Input validation utilities for SnippetVault
 * Provides security against XSS and malformed data
 */

import { Snippet } from '@/types/snippet';

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Validate snippet data before saving
 * @throws ValidationError if data is invalid
 */
export function validateSnippet(
  data: Partial<Omit<Snippet, 'id' | 'createdAt' | 'updatedAt'>>
): void {
  // Code is required
  if (!data.code || typeof data.code !== 'string' || !data.code.trim()) {
    throw new ValidationError('Code is required');
  }

  // Code length limit (100KB)
  if (data.code.length > 100000) {
    throw new ValidationError('Code too large (maximum 100,000 characters)');
  }

  // Title validation
  if (data.title && data.title.length > 200) {
    throw new ValidationError('Title too long (maximum 200 characters)');
  }

  // Description validation
  if (data.description && data.description.length > 1000) {
    throw new ValidationError('Description too long (maximum 1,000 characters)');
  }

  // Language validation
  if (data.language && typeof data.language !== 'string') {
    throw new ValidationError('Invalid language format');
  }

  // Tags validation
  if (data.tags) {
    if (!Array.isArray(data.tags)) {
      throw new ValidationError('Tags must be an array');
    }

    if (data.tags.length > 20) {
      throw new ValidationError('Too many tags (maximum 20)');
    }

    for (const tag of data.tags) {
      if (typeof tag !== 'string') {
        throw new ValidationError('Tags must be strings');
      }

      if (tag.length > 50) {
        throw new ValidationError('Tag too long (maximum 50 characters)');
      }
    }
  }
}

/**
 * Sanitize user input (basic XSS prevention)
 * Note: This is client-side sanitization only.
 * When backend is implemented, use a proper sanitization library.
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate snippet ID format (UUID v4)
 */
export function isValidSnippetId(id: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
}

/**
 * Check if localStorage has enough space
 * Estimates available space (not perfect, but helps prevent errors)
 */
export function checkStorageQuota(dataToSave: string): boolean {
  try {
    // Most browsers limit localStorage to 5-10MB
    const totalSize = new Blob([localStorage.getItem('snippetvault_snippets') || '']).size;
    const newDataSize = new Blob([dataToSave]).size;
    const estimatedTotalSize = totalSize + newDataSize;

    // Warn if approaching 5MB limit
    if (estimatedTotalSize > 5 * 1024 * 1024) {
      console.warn('localStorage approaching capacity limit');
      return false;
    }

    return true;
  } catch {
    return true; // Fail gracefully
  }
}
