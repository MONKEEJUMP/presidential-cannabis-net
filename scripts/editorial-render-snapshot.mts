// PW7404-1026: pure extraction shared by rendered evidence and regression tests.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";

const clean = (html: string) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "").replace(/<!--.*?-->/gs, "");
const text = (html: string) => clean(html).replace(/<[^>]+>/g, "");
const hash = (value: string) => createHash("sha256").update(value).digest("hex");

export function snapshotEditorialRender(route: string, html: string) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert.ok(main, `Missing main for ${route}`);
  const anchors = [...main.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(match => ({
    href: match[1].match(/\bhref="([^"]*)"/)?.[1], label: text(match[2]),
    target: match[1].match(/\btarget="([^"]*)"/)?.[1] ?? "", rel: match[1].match(/\brel="([^"]*)"/)?.[1] ?? "",
  }));
  return {route, title:html.match(/<title>(.*?)<\/title>/s)?.[1],
    metadata:[...html.matchAll(/<(?:meta|link)\b[^>]*>/g)].map(m=>m[0]).filter(tag=>/canonical|description|robots|og:|twitter:/.test(tag)),
    headings:[...main.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)].map(m=>({level:Number(m[1]),text:text(m[2])})),
    bodyTextHash:hash(text(main)),
    schema:[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1])),anchors};
}
