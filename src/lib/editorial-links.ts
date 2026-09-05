type LinkSelection = { match: string; label: string; href: string };
type ParagraphPart = { text: string; href?: string };

// Exact, unique selections protect against copy edits silently moving a link.
export function paragraphParts(text: string, links: readonly LinkSelection[]): ParagraphPart[] {
  if (!links.length) return [{ text }];
  const ranges = links.map(link => {
    if (!link.match || !link.label) throw new Error("Empty editorial match or label");
    if (!/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(link.href)) throw new Error("Invalid editorial target");
    const matchAt = text.indexOf(link.match);
    if (matchAt < 0) throw new Error(`Missing editorial match: ${link.match}`);
    if (text.lastIndexOf(link.match) !== matchAt) throw new Error(`Ambiguous editorial match: ${link.match}`);
    const labelAt = link.match.indexOf(link.label);
    if (labelAt < 0) throw new Error(`Missing editorial label: ${link.label}`);
    if (link.match.lastIndexOf(link.label) !== labelAt) throw new Error(`Ambiguous editorial label: ${link.label}`);
    return { start: matchAt + labelAt, end: matchAt + labelAt + link.label.length, href: link.href };
  }).sort((a, b) => a.start - b.start);
  const parts: ParagraphPart[] = [];
  let cursor = 0;
  for (const range of ranges) {
    if (range.start < cursor) throw new Error("Overlapping editorial links");
    if (range.start > cursor) parts.push({ text: text.slice(cursor, range.start) });
    parts.push({ text: text.slice(range.start, range.end), href: range.href });
    cursor = range.end;
  }
  if (cursor < text.length) parts.push({ text: text.slice(cursor) });
  return parts;
}
