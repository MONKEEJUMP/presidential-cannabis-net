# 6133-SPUD Defect Log

## Technical foundation — audit runner path

- Problem: The first `npm run audit` invocation resolved `import.meta.dirname` as undefined because `tsx` loaded the audit script through its CommonJS register path.
- Action: Switched the audit root to the verified npm working directory (`process.cwd()`), then reran the audit.
- Fallback: None required; the site typecheck was already green and the audit resumed immediately.

## Editorial audit — coverage ranges and short alt text

- Problem: The first full registry audit found structurally complete drafts below the specified coverage ranges and twelve otherwise unique image alts with four words instead of the required five-word minimum.
- Action: Added page-specific editorial depth without adding routes or sections, updated the generated alt pattern to include “package artwork,” regenerated all images and the asset registry, and reran the full audit.
- Fallback: None required; route, image-uniqueness, silo-linking, and outbound-link checks were already green.

## Deployment — Vercel domain command syntax

- Problem: Vercel CLI 50.10.0 displayed `domains add domain project` in help, but rejected the two-argument form in this already linked workspace with “expects one argument.”
- Action: Retried with the linked-project one-argument form for the apex and `www` hostnames, then inspected the assignments.
- Fallback: The application also carries a permanent host-based redirect from `www.presidentialcannabis.net` to the apex.
