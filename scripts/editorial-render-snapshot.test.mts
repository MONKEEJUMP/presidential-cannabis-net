// PW7404-1026: heading-level mutations must invalidate rendered evidence.
import assert from "node:assert/strict";
import { test } from "node:test";
import { snapshotEditorialRender } from "./editorial-render-snapshot.mts";

const html = '<html><head><title>Plant guide</title><meta name="description" content="Plant reference"/><link rel="canonical" href="https://example.test/plant"/><script type="application/ld+json">{"@type":"Article"}</script></head><body><main><h1 class="title">Plant <em>guide</em></h1><p>Read <a href="/flower" target="_blank" rel="noopener">flower quality</a>.</p><h2 id="structure">Plant structure</h2></main></body></html>';

for (const [from, to] of [[1, 2], [2, 3]]) {
  test(`H${from} to H${to} changes preservation evidence with identical text and anchors`, () => {
    const before = snapshotEditorialRender("/plant", html);
    const after = snapshotEditorialRender("/plant", html.replace(`<h${from} `, `<h${to} `).replace(`</h${from}>`, `</h${to}>`));
    const { headings: oldHeadings, ...oldRest } = before;
    const { headings: newHeadings, ...newRest } = after;
    assert.deepEqual(newRest, oldRest, "Only heading evidence should change");
    assert.notDeepEqual(newHeadings, oldHeadings, "Heading levels must be preserved");
    const { anchors: _oldAnchors, ...oldComparedFields } = before;
    const { anchors: _newAnchors, ...newComparedFields } = after;
    assert.throws(() => assert.deepEqual(newComparedFields, oldComparedFields), { code: "ERR_ASSERTION" });
  });
}

test("heading snapshots retain ordered levels and text", () => {
  const snapshot = snapshotEditorialRender("/plant", html);
  assert.deepEqual(snapshot.headings, [
    { level: 1, text: "Plant guide" },
    { level: 2, text: "Plant structure" },
  ]);
  assert.deepEqual(snapshot.anchors, [{ href: "/flower", label: "flower quality", target: "_blank", rel: "noopener" }]);
});

test("heading extraction requires the corresponding closing level", () => {
  assert.deepEqual(snapshotEditorialRender("/plant", "<main><h1>Wrong close</h2><h3>Valid heading</h3></main>").headings, [
    { level: 3, text: "Valid heading" },
  ]);
});
