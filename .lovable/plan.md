## Goal

When the **All** filter is active, the Projects section currently dumps 9 large cards in one long grid. Goal: reduce scroll, give the eye clear stops, and let visitors skim by category — without losing impact for individual projects.

## Approach

Two coordinated changes:

### 1. Group by category when "All" is selected

Instead of one flat grid, render category sections in this order (each as a labeled band):

1. **Full‑Stack Web Apps** — Web3 Doc Verification, Live Coding, Live MCQ, GUIDO
2. **Landing Pages** — Restaurant, Azure Escapes, Price‑Wise AI, Estate Vault
3. **Map / Location** — Pharm‑Locator

Each group gets:
- Small section header: category name + 1‑line description + count chip ("4 projects")
- A 2‑column grid of compact cards beneath
- Subtle divider between groups

When a specific filter (Landing Page / Full‑Stack) is chosen, skip the grouping and just show that filtered grid (no group header needed).

### 2. Make cards compact (default state)

Today each card shows: image, browser chrome, title, category chip, summary, "What it solves", "Useful for", full stack list, live + source links. Too much.

New compact card shows by default:
- Image (smaller aspect — 16/9 → keep but reduce padding)
- Title + category chip
- One‑line summary
- Top 3 stack chips + "+N" overflow
- Live demo + Source links

A subtle **"Details"** disclosure (chevron) reveals "What it solves" and "Useful for" inline — keeps depth available without forcing it on everyone. Hover state gently lifts the card (already in place).

### 3. Filter bar polish

- Add category counts next to each filter chip ("All · 9", "Landing Page · 4", "Full‑Stack · 4")
- Make filters sticky‑ish near the top of the section so users always know where they are while scrolling

## Result

- "All" view height drops by roughly 40–50% via compact cards
- Visitors get clear visual stops (3 grouped bands) instead of one wall
- Recruiters can jump to Full‑Stack; clients can jump to Landing Pages
- Detail is still one click away for those who want it

## Files touched

- `src/components/portfolio/Projects.tsx` (only file)

No new dependencies, no design token changes.
