# Codex Feedback Round 8 — Spacing, Fonts, Logo, About Quote

Follow the developing-web-projects skill: plain CSS, tabs (width 4), no frameworks.
All changes are CSS-only except the about.html hero quote restyling.

---

## Fix 1: Buttons Following Text — Add Top Spacing

Buttons that appear directly after text paragraphs, headings, or lists have zero gap.

**In `assets/css/styles.css`**, add these rules in the buttons section:

```css
/* Breathing room when a button follows text or list content */
p + .btn,
ul + .btn,
ol + .btn,
.list + .btn,
h2 + .btn,
h3 + .btn {
	margin-top: 1.75rem;
}
```

---

## Fix 2: Lists and Paragraphs — Vertical Rhythm

Lists sitting directly against paragraphs (or vice versa) with no breathing room.

**In `assets/css/styles.css`**, add in the typography/list section:

```css
/* Space between adjacent text elements */
p + ul,
p + ol,
p + .list,
ul + p,
ol + p,
.list + p,
h3 + p,
h3 + ul,
h3 + .list {
	margin-top: 1rem;
}

/* Lists need their own bottom breath */
.list {
	margin-bottom: 0;  /* reset any unwanted bottom */
}

.section .list + * {
	margin-top: 1.25rem;
}
```

---

## Fix 3: Sacramento Font — Testimonial Names Only

Sacramento is too ornate for block text. Restrict it to attribution names only.

**Three changes:**

### 3a. In `assets/css/components.css`, find `.quote { font-family: var(--font-accent); ... }`

Replace the font-family with Raleway italic:
```css
.quote {
	font-family: var(--font-sans);
	font-style: italic;
	font-weight: 300;
	font-size: clamp(1.4rem, 2.5vw, 2.1rem);
	line-height: 1.45;
}
```

### 3b. In `assets/css/components.css`, find `.quote__attr { ... }`

This is the attribution line ("— Anna U.") — keep Sacramento here:
```css
.quote__attr {
	margin-top: 0.75rem;
	font-family: var(--font-accent);
	font-size: 1.1rem;
	letter-spacing: 0.05em;
}
```

### 3c. In `assets/css/styles.css`, find `.accent { font-family: var(--font-accent); }`

The `.accent` class is used in the about page hero for a short inspirational quote.
Replace it with a properly styled quote element — NOT Sacramento for readability:
```css
.accent {
	font-family: var(--font-sans);
	font-style: italic;
	font-weight: 300;
	font-size: clamp(1.1rem, 2vw, 1.5rem);
	line-height: 1.5;
	opacity: 0.9;
}
```

---

## Fix 4: Logo — Double the Height, Keep Nav Slim

Current logo: `height: 52px`. Double it to `height: 104px` while reducing nav padding
so the bar doesn't grow proportionally.

**In `assets/css/components.css`:**

Find `.nav__logo img { height: 52px; ... }` and change to:
```css
.nav__logo img {
	height: 104px;
	width: auto;
}
```

Find `.nav__inner { padding: 0.85rem 0; ... }` and reduce to:
```css
.nav__inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.3rem 0;
	gap: 1rem;
}
```

This keeps the overall nav bar height similar while making the logo visually dominant.

---

## Fix 5: About Page Hero Quote — Make It Readable

The Augustinus quote in the about page hero (`<p class="accent">`) renders tiny against
the hero image. The `.accent` CSS fix above helps, but also update the about page hero HTML
to use a `<blockquote>` with better semantic and visual treatment.

**In `about.html`**, find the hero section and replace:
```html
<p class="accent">&ldquo;What you want to ignite in others must burn within you.&rdquo; — Augustinus</p>
```

With:
```html
<blockquote class="hero__quote">
	<p>&ldquo;What you want to ignite in others must burn within you.&rdquo;</p>
	<cite>— Augustinus</cite>
</blockquote>
```

**In `assets/css/components.css`**, add after the `.hero__subtitle` rules:
```css
.hero__quote {
	font-family: var(--font-sans);
	font-style: italic;
	font-weight: 300;
	font-size: clamp(1.15rem, 2.2vw, 1.6rem);
	line-height: 1.55;
	color: white;
	max-width: 42rem;
	margin: 0 auto;
	text-shadow: 0 1px 8px rgba(0,0,0,0.4);
}

.hero__quote p {
	margin: 0;
}

.hero__quote cite {
	display: block;
	margin-top: 0.6rem;
	font-style: normal;
	font-size: 0.85rem;
	font-weight: 600;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	opacity: 0.75;
}
```

---

## After All Changes

1. `git add -A && git commit -m "Fix: spacing rhythm, Sacramento restricted to names, logo doubled, about hero quote"`
2. `git push`
3. `openclaw system event --text "Done: spacing, fonts, logo, about quote fixed" --mode now`
