/**
 * parseCards.js
 *
 * Converts natural-format card text into card objects compatible with cards.js.
 *
 * Expected input format:
 * -------------------------------------------------------
 * ۱. Title (optional grammatical note)
 * Persian paragraph text…
 * English Translation:
 * "English paragraph text…"
 *
 * * persian phrase: english meaning
 * * persian phrase: english meaning
 *
 * ۲. Next card title
 * -------------------------------------------------------
 *
 * Usage:
 *   import { parseCards } from './parseCards.js';
 *
 *   const newCards = parseCards(rawText, {
 *     category: 'Home Appliances',
 *     startId: 41,
 *   });
 *
 *   // Merge into your existing cards array:
 *   export const cards = [...existingCards, ...newCards];
 */

/**
 * @param {string} rawText - The raw source text containing one or more cards.
 * @param {{ category?: string, startId?: number }} options
 * @returns {Array<{ id: string, category: string, title: string, persian: string, english: string, expressions: Array<{ fa: string, en: string }> }>}
 */
export function parseCards(rawText, { category = 'General', startId = 1 } = {}) {
    if (!rawText || !rawText.trim()) return [];
  
    // Split on card boundaries: a line starting with a Persian/Arabic numeral or regular digit followed by a dot
    const blocks = rawText.trim().split(/\n(?=[\d۰-۹]+\.\s)/);
  
    const cards = [];
    let idCounter = startId;
  
    for (const block of blocks) {
      const lines = block.split('\n').map(l => l.trim()).filter(l => l);
      if (!lines.length) continue;
  
      // --- Title ---
      const title = lines[0].replace(/^[\d۰-۹]+\.\s*/, '').trim();
  
      // --- Locate the "English Translation:" marker ---
      const engIdx = lines.findIndex(l => /^English Translation[:\s]/i.test(l));
  
      // --- Persian text: between title line and "English Translation:" ---
      const persianLines = (engIdx > 1 ? lines.slice(1, engIdx) : lines.slice(1))
        .filter(l => !/^\*/.test(l) && !/^English Translation/i.test(l));
  
      // --- English text: after "English Translation:" up to first expression line ---
      let englishLines = [];
      if (engIdx !== -1) {
        const afterEng = lines.slice(engIdx + 1);
        const firstExpr = afterEng.findIndex(l => /^\*/.test(l));
        englishLines = (firstExpr === -1 ? afterEng : afterEng.slice(0, firstExpr))
          // Strip surrounding curly/straight quotes that wrap the block
          .map(l => l.replace(/^["""«]|["""»]$/g, '').trim())
          .filter(l => l && !/^\*/.test(l));
      }
  
      // --- Expressions: lines starting with * ---
      const expressions = lines
        .filter(l => /^\*/.test(l))
        .map(l => {
          const clean = l.replace(/^\*+\s*/, '');
          const colonIdx = clean.indexOf(':');
          if (colonIdx === -1) return null;
          const fa = clean.slice(0, colonIdx).trim().replace(/^\(|\)$/g, '');
          const en = clean.slice(colonIdx + 1).trim().replace(/^\(|\)$/g, '');
          return { fa, en };
        })
        .filter(Boolean);
  
      const persian = persianLines.join(' ').replace(/\s+/g, ' ').trim();
      const english = englishLines.join(' ').replace(/\s+/g, ' ').trim();
  
      // Skip malformed blocks with no content
      if (!persian && !english) continue;
  
      cards.push({
        id: String(idCounter++),
        category,
        title,
        persian,
        english,
        expressions,
      });
    }
  
    return cards;
  }