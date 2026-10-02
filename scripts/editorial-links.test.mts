// Runtime fixtures are separate from Next's application typecheck.
import assert from "node:assert/strict";
import { test } from "node:test";
import { paragraphParts } from "../src/lib/editorial-links";
import { editorialLinks } from "../src/content/editorial-links";
import { pages } from "../src/content/index";

const link = { match: "flower quality", label: "flower quality", href: "/flower" };

test("unlinked text remains byte-for-byte unchanged", () => {
  assert.deepEqual(paragraphParts("A & B: flower.", []), [{ text: "A & B: flower." }]);
});
test("one exact contextual link preserves wording and punctuation", () => {
  assert.deepEqual(paragraphParts("Read flower quality, then compare.", [link]), [
    { text: "Read " }, { text: "flower quality", href: "/flower" }, { text: ", then compare." },
  ]);
});
test("a longer unique match selects the intended occurrence", () => {
  assert.deepEqual(paragraphParts("Flower first; flower quality later.", [{ ...link, label: "flower" }]), [
    { text: "Flower first; " }, { text: "flower", href: "/flower" }, { text: " quality later." },
  ]);
});
test("multiple disjoint links preserve source order and all text", () => {
  const text = "Flower and resin glands.";
  const parts = paragraphParts(text, [
    { match: "resin glands", label: "resin glands", href: "/plant/trichomes" },
    { match: "Flower", label: "Flower", href: "/flower" },
  ]);
  assert.equal(parts.map(part => part.text).join(""), text);
  assert.deepEqual(parts.filter(part => part.href).map(part => part.href), ["/flower", "/plant/trichomes"]);
});
test("missing, ambiguous, empty and malformed targets fail closed", () => {
  assert.throws(() => paragraphParts("No match.", [link]), /match/i);
  assert.throws(() => paragraphParts("flower quality and flower quality", [link]), /ambiguous/i);
  assert.throws(() => paragraphParts("flower quality", [{ ...link, label: "other" }]), /label/i);
  assert.throws(() => paragraphParts("flower quality", [{ ...link, match: "" }]), /empty/i);
  assert.throws(() => paragraphParts("flower quality", [{ ...link, label: "" }]), /empty/i);
  for (const href of ["//other.example", "https://other.example", "javascript:alert(1)", "/x?next=y", "/x#section", "/x\\y"]) {
    assert.throws(() => paragraphParts("flower quality", [{ ...link, href }]), /target/i);
  }
});
test("overlapping anchors and ambiguous labels fail closed", () => {
  assert.throws(() => paragraphParts("flower quality", [link, { ...link, label: "flower" }]), /overlap/i);
  assert.throws(() => paragraphParts("flower and flower", [{ ...link, match: "flower and flower", label: "flower" }]), /ambiguous/i);
});

test("all reviewed placements resolve exactly once to registered pages", () => {
  assert.equal(editorialLinks.length, 73);
  assert.equal(new Set(editorialLinks.map(selection => selection.id)).size, 73);
  for (const selection of editorialLinks) {
    const page = pages.find(candidate => candidate.path === selection.sourcePath);
    assert.ok(page, `Missing source: ${selection.id}`);
    assert.ok(selection.href === "https://presidentialcannabis.net/" || pages.some(candidate => candidate.path === selection.href), `Missing target: ${selection.id}`);
    assert.notEqual(selection.sourcePath, selection.href);
    const paragraphs = selection.sectionId === null ? page.intro : page.sections.find(section => section.id === selection.sectionId)?.paragraphs;
    const paragraph = paragraphs?.[selection.paragraphIndex];
    assert.ok(typeof paragraph === "string", `Missing paragraph: ${selection.id}`);
    const parts = paragraphParts(paragraph, [selection]);
    assert.equal(parts.map(part => part.text).join(""), paragraph);
    assert.deepEqual(parts.filter(part => part.href), [{text: selection.label, href: selection.href}]);
  }
});
