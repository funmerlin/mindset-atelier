# Codex Feedback Round 5 — Font Stack Update

Follow the developing-web-projects skill: plain CSS, no frameworks, tabs (width 4).

---

## Task: Update Typography — Avenir → Raleway Fallback

The site should prefer Avenir (native on macOS/iOS) and fall back to Raleway from Google Fonts.
Drop Cormorant Garamond and Playfair Display entirely.

### Step 1: Update Google Fonts import in ALL HTML files

Find every `<link>` tag that loads Google Fonts (currently loads Cormorant Garamond, DM Sans,
Playfair Display) and replace it with:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=Sacramento&display=swap" rel="stylesheet">
```

This applies to: index.html, about.html, contact.html, blog/index.html,
blog/forensic-lens-case-01.html, individuals/index.html, individuals/stagnation-to-strength.html,
individuals/family-system.html, individuals/grief-and-crises.html, individuals/leadership-growth.html,
organisations/index.html, organisations/business-scan.html, organisations/executive-coaching.html,
organisations/team-training.html

### Step 2: Update `assets/css/tokens.css`

Replace the three font custom properties with:

```css
/* Avenir native (macOS/iOS) → Raleway (Google Fonts) → system sans fallback */
--font-heading: 'Avenir Next', 'Avenir', 'Raleway', sans-serif;
--font-sans:    'Avenir Next', 'Avenir', 'Raleway', sans-serif;
--font-accent:  'Sacramento', cursive;
```

### Step 3: Audit `assets/css/styles.css` and `assets/css/components.css`

Find any hardcoded references to 'Cormorant Garamond' or 'Playfair Display' and replace with
`var(--font-heading)` or `var(--font-sans)` as appropriate.

Find any font-weight values that were calibrated for Cormorant (e.g. weight 400 on headings
looked large because it's a display serif). Avenir/Raleway are sans-serif — headings should use:
- Large display headings (hero h1): font-weight: 300 (Avenir Light / Raleway Light looks elegant at large sizes)
- Section headings (h2, h3): font-weight: 600
- Body: font-weight: 400
- Labels/eyebrows (uppercase small): font-weight: 700, letter-spacing: 0.15em

The `.font-accent` / `.quote` elements that used Playfair Display italic should now use
`font-family: var(--font-accent)` (Sacramento) for the signature/cursive style.

---

## After Changes

1. `git add -A && git commit -m "Style: Avenir/Raleway font stack, drop Cormorant Garamond"`
2. `openclaw system event --text "Done: font stack updated to Avenir/Raleway" --mode now`
