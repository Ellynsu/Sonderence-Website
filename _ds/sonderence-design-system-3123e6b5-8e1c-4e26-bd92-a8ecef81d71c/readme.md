# Sonderence Design System

Sonderence is a digital transformation consulting and implementation firm. It designs and implements complete **digital operating systems** — people, process, data and technology unified into one ecosystem — for growing businesses that have outgrown the way they work. It does not sell software or AI tools; it sells the system a business runs on, and then builds it.

The firm sits at the intersection of management consulting, enterprise software, systems architecture and AI implementation. Everything it publishes is measured against one question: does this make a client feel that **these people understand how businesses actually operate**?

The brand is intelligent, strategic, structured, confident, minimal, technical, executive, premium and precise. It is never loud, trendy, flashy, startup-cliché, cyberpunk, gamer, or futuristic for its own sake. **Quiet confidence, not excitement.**

---

## Sources supplied

| Source | What it gave us |
| --- | --- |
| `uploads/Gemini_Generated_Image_yjuy6eyjuy6eyjuy.png` | The Sonderence **S** mark, navy on white, 1408×768 PNG. The only visual asset provided. Brand navy `#131747` was sampled directly from it. |
| Written brand brief (chat) | Company description, positioning, brand personality and the explicit "never" list. Quoted throughout this document. |

**No codebase, Figma file, website, deck or font binaries were supplied.** Everything below the logo mark and the brief — the colour ramps, type pairing, spacing, components and both UI kits — is an original system built to the brief. It is a proposal, not a recreation. Where something is an inference rather than a supplied fact, it is flagged in place.

### Substitutions to confirm

1. **Fonts.** No brand typefaces were provided. The system uses the nearest open equivalents from Google Fonts: **Instrument Sans** (display + UI), **Source Serif 4** (editorial), **IBM Plex Mono** (labels + data). Swap in licensed binaries and local `@font-face` rules when they exist — only `tokens/fonts.css` needs to change.
2. **Icons.** No icon set was provided. The system uses **Lucide** (1.5px stroke, 24px grid, round caps) via the pinned UMD CDN build. See *Iconography*.
3. **No wordmark file exists.** The lockup sets "SONDERENCE" in Instrument Sans Medium at +0.14em tracking beside the supplied mark. No logo was drawn, reconstructed or approximated.
4. **All names, figures and quotes are fictional** placeholders (Northwind Foods, Helena Voss, every metric). Replace before anything ships.

---

## Content fundamentals

### Voice
Sonderence writes the way a good operator talks in a board meeting: short declaratives, concrete nouns, and no performance. The reader is a COO or CEO who is tired of being sold to.

- **"We" for the firm, "you" for the client.** Never "our team is passionate about"; never "clients receive". *"We follow the work, not the org chart."* / *"You keep the map either way."*
- **Declarative, not interrogative.** Headlines are statements. *"We build the system your business runs on."* Not *"Ready to transform your operations?"*
- **Concrete over abstract.** Name the actual thing: *order-to-cash*, *decision rights*, *handoffs*, *month-end close*, *master data ownership*. Avoid *synergies*, *solutions*, *journeys*, *ecosystems of innovation*.
- **Specific numbers, always sourced.** *"31 handoffs, 12 of them purely to reconcile data."* Never *"dramatically fewer handoffs."*
- **Admit the trade-off.** The brand earns trust by naming what a decision costs. *"Sales lose the ability to create accounts directly. Accepted in exchange for one definition of a customer."*
- **Short sentences carry the weight.** Fragments are allowed when they land. *"Not a strategy deck. An operating system."*

### Casing and punctuation
- **Sentence case** for every heading, button, label, menu item and form label.
- **UPPERCASE** only in the mono eyebrow/label role (`Eyebrow`, `Badge`, table headers, stat labels) — always at 11px with +0.10em tracking. Never uppercase a heading.
- **No exclamation marks.** Anywhere.
- **No emoji.** Anywhere — not in UI, not in marketing, not in a status chip.
- Curly quotes (" ") in editorial copy; en dashes for ranges (Weeks 7–14); en dash with spaces for parenthetical asides — like this.
- Currency and units are written out at first use (£180m, 14 days), abbreviated in tables (14.0d, −38%).

### Words the brand does not use
*Unlock, leverage, revolutionise, seamless, cutting-edge, best-in-class, game-changing, supercharge, AI-powered, empower, journey, hyper-, next-gen, delightful, magic.*

### Words the brand does use
*Operating model, decision rights, handoff, gate, cadence, disposition, register, trade-off, baseline, diagnosis, adoption, system of record, sequencing, constraint.*

### Structural habits
- Marketing sections open with a numbered mono eyebrow (`01 · WHAT WE BUILD`), then an h2 statement, then one lead sentence. Never more than one lead paragraph.
- Lists are parallel and finite — three or five items, never "and more".
- Every claim on a case study is paired with a measure and a before value.
- CTAs describe the next action, not the emotion: *"Start a conversation"*, *"Book a discovery call"*, *"Read the case study"*. Never *"Let's go!"*.
- In-app copy names the object: *"Change request CR-0143 submitted"*, not *"Success!"*.

---

## Visual foundations

### Colour
- **Navy `#131747`** (`--navy-800`) is the brand. Sampled from the mark. It is the primary action fill, the inverse surface, the tint behind every shadow and every border alpha.
- **Warm neutrals (Stone).** Surfaces are warm — page is `#FBFAF8`, sunken is `#F2F0EB`. **Cool navy ink on warm paper** is the signature: it reads as printed report, not as software chrome. Never cool grey on cool grey.
- **Ink** is a desaturated navy ramp used for all running text (`#14162B` primary → `#868A9C` tertiary). Pure black never appears.
- **Brass `#A8763E`** is the only accent. One use per view — a single marketing CTA, an accent card, a highlight node in a diagram. It is never a large field and never appears twice in the same viewport.
- **Semantics are muted**: moss `#3F6B4A`, amber `#A87A16`, clay `#A8412F`. Alert colours are dulled to sit inside a premium palette; saturated red/green never appears.
- Four approved field/ink pairings only: paper, white card, navy, brass tint. No other background colour ships.
- **Gradients: none.** No bluish-purple, no mesh, no hero gradient. Depth comes from value steps between warm paper, white and navy.

### Type
- **Instrument Sans** for display, headings and all UI. Weights 400/500/600 only — 700 is reserved and effectively unused.
- **Source Serif 4** for pull quotes and single-sentence statements. Never for UI, labels or body copy.
- **IBM Plex Mono** for the eyebrow/label role, table headers, deltas, IDs and every figure inside a table.
- Fixed step scale (11 → 80px), not a loose ratio: the brand is engineered, so the scale is a finite set.
- Tracking is negative and tightens with size: −0.008em body, −0.018em h2/h3, −0.028em display. The mono label role goes the other way: +0.10em.
- Figures are **tabular** everywhere they can be compared.
- `text-wrap: balance` on headings, `pretty` on paragraphs. Measure caps at ~640px for prose.

### Layout
- 12 columns, 24px gutter, 1240px default container (640 prose / 720 narrow / 1440 data-dense).
- Vertical rhythm is generous: 96px between marketing sections, 128px for a major break. App views use 32–40px.
- **Hairline rules do the structural work** that boxes do in other systems. Section dividers, table rows, card footers, sidebar groups — a 1px `rgba(19,23,71,.07–.15)` rule, not a border box.
- Fixed elements: the marketing header (72px, sticky, translucent paper with a 14px backdrop blur) and the portal top bar (same treatment) and sidebar (264px, navy, full height, not sticky-scrolling).
- Alignment is left, always. Centred layouts appear only inside empty states.

### Backgrounds and imagery
- No photography was supplied. Every image position in the UI kits is a **dashed placeholder** labelled with what belongs there. Do not substitute stock.
- When photography arrives it should be **cool, low-contrast, documentary** — real operations, real rooms, no staged handshakes, no glassy office towers. Desaturate slightly toward the navy; no warm filters, no grain, no duotone.
- Three brand background motifs are approved: a **hairline grid** at 28–34px on navy (`rgba(255,255,255,.055)`), a **dot matrix** at 12px on paper (`rgba(19,23,71,.10)`), and **rule-and-node diagrams** — 1px lines with 7–9px dots marking systems, one dot in brass. Nothing else. No blobs, no illustrations, no isometrics.
- Transparency and blur appear in exactly two places: sticky chrome (14px backdrop blur over 88–90% paper) and the dialog scrim (navy at 52% with 8px blur). Nowhere else.

### Shape, borders and elevation
- **Radii are small and squared**: 2px badges/tags/meters, 3px tooltips, **4px all controls**, **6px cards**, 10px dialogs. `--radius-full` is reserved for status dots, the switch knob, radio buttons and avatars. Nothing else is pill-shaped.
- **Cards** are white on warm paper, 6px radius, 1px `--border-subtle`, **no shadow by default**. Padding 24px. A card never nests inside a card — use a hairline rule.
- **Shadows are navy-tinted, wide and low** — paper lift, not material drop. Maximum two elevation levels visible on one screen. `xs` inputs, `sm` raised cards, `md` hover/tooltip, `lg` toasts, `xl` dialogs only.
- Inner shadow appears in exactly two roles: the switch track, and the pressed state of a filled button.
- No "rounded container with a coloured left border". Status is carried by a Badge or a 7px dot, never by a coloured edge or a tinted row.

### Motion
- Durations: 80ms colour, 140ms control state, 200ms surface, 320ms panel entry, 520ms progress fills.
- Easing: `cubic-bezier(.2,0,0,1)` standard, `cubic-bezier(.16,1,.3,1)` for entrances, `cubic-bezier(.4,0,1,1)` for exits.
- **Things settle; they never bounce.** No spring, no overshoot, no elastic. Nothing scales on hover. Dialogs and toasts fade up 6px — they do not scale in.
- Full `prefers-reduced-motion` support: all durations collapse to 0ms in `tokens/motion.css`.

### Interaction states
- **Hover** deepens: primary navy-800 → navy-900; quiet surfaces gain `rgba(19,23,71,.04)`; secondary buttons gain a stronger border. Opacity is never used to signal hover.
- **Press** deepens again (navy-950) and adds `inset 0 1px 2px rgba(8,10,28,.18)`. **Never a transform, never a shrink.**
- **Focus** is a 2px page-coloured gap plus a 2px `rgba(19,23,71,.50)` ring. Inputs instead turn their border navy and gain a 3px translucent halo.
- **Disabled** is an explicit palette (`--stone-150` fill, `--text-disabled` ink), not reduced opacity — except on composite controls (checkbox rows) where the whole label dims to 55%.
- **Links** are navy-700 with a `--border-default` underline that darkens on hover. Underline offset 3px when a link sits inside prose.

---

## Iconography

**Set: Lucide**, pinned to `https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js`. *Flagged substitution* — the brand supplied no icon set. Lucide was chosen because its 1.5px stroke, round caps and 24px geometric grid match the brand's precise, technical, unornamented character better than a filled or duotone set.

- **Always use the `Icon` component.** It reads Lucide's real geometry from the UMD global and renders it inline at the brand stroke weight. Never paste SVG paths, never draw an icon by hand.
- **Stroke 1.5px.** Never below 1.25, never above 2. Never mix stroke weights in one view.
- **Sizes: 15–16px inside controls, 17–18px standalone in text, 20–24px as a section marker.** A 24px glyph is never scaled past 32px — use a rule, a dot or a number instead.
- **Colour is inherited** (`currentColor`). Icons take the colour of the text they sit with; they are never independently coloured, and never brass unless they are the single accent in the view.
- **Icons label actions, they never decorate.** No icon beside a heading for flavour. Icon-only controls always carry a `label` (and usually a Tooltip).
- **Emoji: never.** **Unicode as iconography: only three glyphs** — ↑ ↓ → in `Stat` deltas, set in mono. The "/" breadcrumb separator is text, not a chevron icon.
- The small utility glyphs drawn inline in `Checkbox`, `Radio`, `Select`, `Tag` and `Dialog` (tick, dash, chevron, ×) are control furniture, not iconography — they are inlined so those components stay dependency-free.

Common icons in use: `arrow-right`, `arrow-up-right`, `check`, `plus`, `minus`, `search`, `download`, `mail`, `bell`, `more-horizontal`, `chevrons-up-down`, `workflow`, `database`, `cpu`, `layers`, `git-branch`, `gavel`, `folder`, `file-text`, `file-check`, `compass`, `users`, `clock`, `phone`, `layout-grid`, `alert-triangle`, `alert-circle`, `info`, `shield-check`.

---

## Assets

| File | Use |
| --- | --- |
| `assets/logo-mark-navy.png` | 480px, transparent background, navy `#131747`. Default mark. |
| `assets/logo-mark-white.png` | 480px, transparent background, white. For navy and photographic fields. |
| `assets/logo-mark-on-white.png` | 480px, opaque white background. For contexts that cannot handle alpha. |
| `uploads/Gemini_Generated_Image_yjuy6eyjuy6eyjuy.png` | The original supplied file, untouched. |

**Logo rules.** Clear space is one mark-height on all four sides. Minimum size 20px (mark) / 24px (lockup). Navy or white only — never brass, never a tint, never on a mid-tone photograph without a navy field behind it. Never stretch, rotate, outline, add a shadow, or place the navy mark on a dark ground. **A vector (SVG) master does not exist in this system — please supply one.**

---

## Components

23 primitives, grouped by concern under `components/`. Each directory has a `@dsCard` preview HTML; each component has `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (when and how to use it).

**`components/core/`** — `Button`, `IconButton`, `Icon`, `Logo`, `Eyebrow`, `Card` (with `CardHeader`, `CardFooter`), `Badge`, `Tag`

**`components/forms/`** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio` (with `RadioGroup`), `Switch`

**`components/navigation/`** — `Tabs`, `Breadcrumbs`

**`components/feedback/`** — `Dialog`, `Toast` (with `ToastStack`), `Tooltip`

**`components/data/`** — `Stat`, `DataTable`, `ProgressMeter`

### Intentional additions
The brief defined no component inventory, so this is an authored standard set. Four entries go beyond the usual baseline, each for a stated reason:

- **`Icon`** — a wrapper over Lucide so no one hand-rolls SVG; the single point where stroke weight is enforced.
- **`Logo`** — because the lockup pairs a supplied raster mark with type-set wordmark, which must not be re-derived per page.
- **`Eyebrow`** — the mono/rule/number label is the brand's most distinctive small element and appears above nearly every section.
- **`Stat` / `ProgressMeter`** — the firm's work is measured in numbers and phases; both surfaces need them constantly.

No `Avatar`, `Accordion`, `Menu`, `Pagination` or `DatePicker` is provided — nothing in the brief called for them, and inventing them would create API that designers cannot recognise.

---

## UI kits

Two surfaces, both **extrapolated** from the brief (no product, site or Figma file was supplied). Both compose the primitives above rather than reimplementing them.

- **`ui_kits/website/`** — the marketing site. Home, Approach, Case study, Contact. Working navigation, phase tabs, form validation and a success toast.
- **`ui_kits/portal/`** — the client engagement portal. Programme overview, Workstream detail, Systems register, Decision log. Working sidebar navigation, tabs, live table filtering, a change-request dialog and toast. Two nav items are deliberately left blank with a disclaimer rather than invented.

No slide template was supplied, so no sample slides were created.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point — `@import` list only. Link this one file. |
| `tokens/fonts.css` | Font families + the Google Fonts import (substitution flagged) |
| `tokens/colors.css` | Navy, Stone, Ink, Brass and semantic ramps + all semantic aliases |
| `tokens/typography.css` | Size, weight, tracking, line-height and the semantic type roles |
| `tokens/spacing.css` | Spacing scale and semantic spacing |
| `tokens/shape.css` | Radii and stroke weights |
| `tokens/elevation.css` | Shadows, focus rings, blur |
| `tokens/motion.css` | Durations, easings, reduced-motion |
| `tokens/layout.css` | Containers, grid, control heights, z-index |
| `tokens/base.css` | Element defaults, link styling, keyframes |
| `guidelines/*.card.html` | 24 foundation specimen cards — Colors, Type, Spacing, Brand |
| `components/<group>/` | The 23 primitives + their `.d.ts`, `.prompt.md` and group card |
| `ui_kits/website/` | Marketing site kit — see its `README.md` |
| `ui_kits/portal/` | Client portal kit — see its `README.md` |
| `assets/` | Logo mark, three variants |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills entry point for use outside this project |

---

## Open questions for the brand owner

1. Licensed brand typefaces — or is Instrument Sans / Source Serif 4 / IBM Plex Mono acceptable as the permanent pairing?
2. A vector master of the mark, plus any horizontal lockup or wordmark that already exists.
3. An icon set, if one has been chosen; otherwise Lucide stands.
4. Real photography direction, or confirmation that the brand runs without photography and relies on the grid/diagram motifs.
5. Is brass the right accent, or should the accent be cooler (slate blue) or absent entirely?
