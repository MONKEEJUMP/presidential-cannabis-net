// PW7404-1026: compare all 30 prerendered pages, not just the changed links.
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pages } from "../src/content/index";
import { snapshotEditorialRender } from "./editorial-render-snapshot.mts";

const [mode, baselineFile] = process.argv.slice(2);
assert.ok(mode === "capture" || mode === "compare");
assert.ok(baselineFile?.startsWith("J:"), "Evidence must live on J drive");
function inspect(route: string) {
  const html = readFileSync(path.join(".next/server/app", route === "/" ? "index.html" : route.slice(1) + ".html"), "utf8");
  return snapshotEditorialRender(route, html);
}
const current = pages.map(page=>inspect(page.path));
assert.equal(current.length,30);
if (mode === "capture") {
  writeFileSync(baselineFile,JSON.stringify({provenance:"PW7404-1026",capturedAt:new Date().toISOString(),pages:current},null,2)+"\n",{flag:"wx"});
  console.log("Captured all 30 baseline pages");
} else {
  const before = JSON.parse(readFileSync(baselineFile,"utf8")).pages as typeof current;
  const { editorialLinks } = await import("../src/content/editorial-links");
  let newLinks = 0;
  for (const page of current) {
    const prior = before.find(p=>p.route===page.route);
    assert.ok(prior);
    const {anchors:oldAnchors,...oldRest} = prior;
    const {anchors:newAnchors,...newRest} = page;
    assert.deepEqual(newRest,oldRest,`Visible text, headings, metadata or schema changed: ${page.route}`);
    const remaining = newAnchors.map(anchor=>JSON.stringify(anchor));
    for (const anchor of oldAnchors) {
      const at=remaining.indexOf(JSON.stringify(anchor));
      assert.notEqual(at,-1,`Existing anchor lost on ${page.route}`);
      remaining.splice(at,1);
    }
    const expected = editorialLinks.filter(link=>link.sourcePath===page.route).map(link=>JSON.stringify({href:link.href,label:link.label,target:"",rel:""}));
    assert.deepEqual(remaining.sort(),expected.sort(),`Unexpected new anchor on ${page.route}`);
    newLinks += remaining.length;
  }
  assert.equal(newLinks,editorialLinks.length);
  console.log(JSON.stringify({pages:current.length,newLinks,allTextMetadataHeadingsSchemaUnchanged:true,allExistingAnchorsRetained:true},null,2));
}
