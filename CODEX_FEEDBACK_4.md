# Codex Feedback Round 4

Follow the developing-web-projects skill:
- MPA, plain CSS, vanilla JS, no frameworks, no build step
- Tabs (width 4), semantic HTML, modern CSS
- Cloudflare Pages deployment
- Be confident and opinionated — clean, pragmatic solutions only

Three tasks below. Do all of them.

---

## Task 1: Nav — Remove "For" From Link Labels

File: `assets/js/components/ma-nav.js`

In the `render()` method's innerHTML template, change:
- `"For Individuals"` → `"Individuals"`
- `"For Organisations"` → `"Organisations"`

This is a one-file change now that nav is a Web Component.

---

## Task 2: Card Images — Fix Full-Width Bleed

The negative margin trick (`margin: -2rem -2rem`) is unreliable inside a flex column.
Replace with the clean pattern: zero padding on card, padding on card body only.

**In `assets/css/components.css`:**

Find `.card { ... }` and remove `padding: 2rem` from it.

Find `.card__image { ... }` and replace entirely with:
```css
.card__image {
	display: block;
	width: 100%;
	aspect-ratio: 16 / 9;
	object-fit: cover;
	flex-shrink: 0;
}
```

Find `.card__body { ... }` and add `padding: 1.5rem 2rem 2rem;` to it:
```css
.card__body {
	display: grid;
	gap: 0.7rem;
	padding: 1.5rem 2rem 2rem;
}
```

---

## Task 3: Organisations Page — Complete Redesign

**File: `organisations/index.html`**

The current page dumps pitch-deck bullet points into cards. It does not tell a story and will not convert.

Replace the entire `<main>` content (everything between the `<ma-nav>` and `<ma-footer>` tags) with the structure below.

The goal: a narrative B2B landing page that builds empathy, establishes Lisa's unique credibility, presents the solution clearly, and ends with a clear next step.

---

### New Page Structure

**Section 1: Hero** (keep the mountains background image, dark overlay)
```html
<section class="section hero hero--org" style="background-image: url('/assets/images/nature-bg.jpg');">
    <div class="container hero__content">
        <span class="eyebrow section-label section-label--light">FOR ORGANISATIONS</span>
        <h1>See What<br>Others Miss</h1>
        <p class="hero__sub">A forensic approach to organisational clarity.<br>
        When the same problems keep returning despite good solutions.</p>
        <a class="btn btn-outline" href="/contact.html" style="border-color: rgba(255,255,255,0.8); color: white;">Request a Conversation →</a>
    </div>
</section>
```

---

**Section 2: The Problem** (cream background, no cards — prose only)

Headline: **When the Problem Isn't the Problem**

Body text (use this exact copy, split across 2–3 paragraphs with no sub-cards):
```
You've brought in consultants. Hired coaches. Run workshops. And yet — six months later — the same tensions resurface. The same conversations loop. The same people leave.

Not because the interventions were wrong. But because they addressed what was visible, while the real forces remained hidden.

Legacy decisions. Unspoken hierarchies. Inherited tensions. These shape behaviour in ways that standard diagnostics simply weren't designed to find.
```

No cards. No bullets. Just clean paragraphs with generous spacing.

---

**Section 3: The Gap** (sage-tinted background `var(--color-sage-light)`)

Headline: **Why Existing Approaches Don't Reach It**

Use a clean 3-column comparison — NOT cards, just a simple grid with a top rule:

| Traditional consulting | Executive coaching | HR interventions |
|---|---|---|
| Analyses processes but overlooks relational and historical undercurrents | Develops individuals without mapping the systemic context they operate in | Applies standardised tools that miss what makes each organisation unique |

Closing line (italic, centered): *"Each approach has genuine merit. None were designed to see the hidden architecture."*

HTML pattern for this grid — three `<div>` columns inside a `grid--3`:
```html
<div class="container">
    <h2>Why Existing Approaches Don't Reach It</h2>
    <div class="gap-grid">
        <div class="gap-item">
            <h3>Traditional consulting</h3>
            <p>Analyses processes but overlooks relational and historical undercurrents.</p>
        </div>
        <div class="gap-item">
            <h3>Executive coaching</h3>
            <p>Develops individuals without mapping the systemic context they operate in.</p>
        </div>
        <div class="gap-item">
            <h3>HR interventions</h3>
            <p>Applies standardised tools that miss what makes each organisation unique.</p>
        </div>
    </div>
    <p class="gap-closing"><em>Each approach has genuine merit. None were designed to see the hidden architecture.</em></p>
</div>
```

CSS for `.gap-grid`, `.gap-item`, `.gap-closing`:
```css
.gap-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 2.5rem 0 1.5rem;
    border-top: 1px solid var(--color-sage);
    padding-top: 2rem;
}

.gap-item h3 {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-sage-dark);
    margin-bottom: 0.5rem;
}

.gap-item p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--color-dark);
    opacity: 0.8;
}

.gap-closing {
    text-align: center;
    color: var(--color-dark);
    opacity: 0.7;
    font-size: 1.05rem;
    margin-top: 1rem;
}
```

---

**Section 4: The Forensic Lens** (cream background)

Use a two-column layout: left = text narrative, right = the 4 elements as a clean numbered list.

Left column:
- Eyebrow: `THE FORENSIC LENS`
- Headline: **Making the Invisible Visible**
- Body:
```
Forensic Lens is a diagnostic framework rooted in systems thinking. It treats organisations as living systems — shaped by history, relationships, and context.

Rather than prescribing solutions, it illuminates dynamics. Not what appears to be happening. What is actually happening.

Just as a forensic investigator doesn't theorise at the scene — they observe, map, and follow the evidence — this approach brings the same rigour to organisational life.
```
- CTA link: none here (save for bottom)

Right column — 4 numbered elements as a clean `<ol>` style list, not cards:
```html
<ol class="forensic-steps">
    <li>
        <span class="forensic-steps__num">01</span>
        <div>
            <strong>Historical Inquiry</strong>
            <p>Founding stories, transitions, and inherited legacies that shape current behaviour.</p>
        </div>
    </li>
    <li>
        <span class="forensic-steps__num">02</span>
        <div>
            <strong>Relational Mapping</strong>
            <p>Patterns of inclusion, exclusion, loyalty, and belonging across the system.</p>
        </div>
    </li>
    <li>
        <span class="forensic-steps__num">03</span>
        <div>
            <strong>Contextual Analysis</strong>
            <p>How external pressures and internal structures interact to create dynamics.</p>
        </div>
    </li>
    <li>
        <span class="forensic-steps__num">04</span>
        <div>
            <strong>Pattern Recognition</strong>
            <p>Recurring behaviours and systemic entanglements that limit performance.</p>
        </div>
    </li>
</ol>
```

CSS for `.forensic-steps`:
```css
.forensic-steps {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.forensic-steps li {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
}

.forensic-steps__num {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    color: var(--color-sage);
    opacity: 0.5;
    line-height: 1;
    flex-shrink: 0;
    width: 2.5rem;
}

.forensic-steps strong {
    display: block;
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 0.3rem;
}

.forensic-steps p {
    font-size: 0.95rem;
    line-height: 1.65;
    opacity: 0.8;
    margin: 0;
}
```

---

**Section 5: Two Paradigms** (terracotta `var(--color-terracotta)` background, white text)

This is the single most powerful differentiator from the pitch deck. Do NOT skip it.

Headline: **A Different Sequence. A Different Result.**

Body intro paragraph:
```
Most change programmes start with action. Energy, momentum, tools, repetition.
Forensic Lens starts with understanding. Clarity first — then aligned action.
Same destination. Completely different path. And a very different likelihood of getting there.
```

Two-column comparison table (styled, not a raw HTML table):
```html
<div class="paradigm-grid">
    <div class="paradigm-col">
        <h3>Action-First Change</h3>
        <p class="paradigm-sub">e.g. traditional consulting, motivational programmes</p>
        <ul>
            <li>Action → Understanding → Alignment</li>
            <li>Progress requires continuous push</li>
            <li>Energy-intensive to sustain</li>
            <li>Works best when direction is already clear</li>
        </ul>
    </div>
    <div class="paradigm-divider"></div>
    <div class="paradigm-col paradigm-col--ours">
        <h3>Understanding-First Change</h3>
        <p class="paradigm-sub">Forensic Lens / Mindset Atelier</p>
        <ul>
            <li>Understanding → Alignment → Action</li>
            <li>Progress accelerates over time</li>
            <li>Precise rather than forceful</li>
            <li>Works best when the system functions but feels misaligned</li>
        </ul>
    </div>
</div>
```

CSS:
```css
.paradigm-grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 0;
    margin-top: 2.5rem;
    align-items: start;
}

.paradigm-divider {
    width: 1px;
    background: rgba(255,255,255,0.25);
    align-self: stretch;
    margin: 0 2rem;
}

.paradigm-col h3 {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 0.4rem;
    color: white;
}

.paradigm-col--ours h3 {
    color: var(--color-warm-white);
}

.paradigm-sub {
    font-size: 0.8rem;
    opacity: 0.65;
    margin-bottom: 1.2rem;
    font-style: italic;
}

.paradigm-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.paradigm-col ul li {
    font-size: 0.95rem;
    line-height: 1.5;
    opacity: 0.9;
    padding-left: 1rem;
    position: relative;
}

.paradigm-col ul li::before {
    content: '—';
    position: absolute;
    left: 0;
    opacity: 0.5;
}

.paradigm-col--ours ul li {
    opacity: 1;
}

.paradigm-col--ours ul li::before {
    content: '✓';
    color: var(--color-sage-light);
    opacity: 0.9;
}
```

---

**Section 6: Three Services** (cream background)

Eyebrow: `THREE WAYS TO ENGAGE`
Headline: **Where Would You Like to Start?**

Three clean cards with image, title, one-line description, and link.
Use the existing `.card` pattern (now fixed with full-width images):

```html
<div class="grid grid--3">
    <a class="card" href="/organisations/business-scan.html">
        <img class="card__image" src="/assets/images/category-compass.jpg" alt="Business Scan">
        <div class="card__body">
            <h3>Business Scan</h3>
            <p>Diagnose hidden dynamics before they derail a transition, decision, or strategy.</p>
            <span class="card__link">Learn More →</span>
        </div>
    </a>
    <a class="card" href="/organisations/executive-coaching.html">
        <img class="card__image" src="/assets/images/category-mountains.jpg" alt="Executive Coaching">
        <div class="card__body">
            <h3>Executive Coaching</h3>
            <p>One-to-one work with leaders navigating systemic forces in their role.</p>
            <span class="card__link">Learn More →</span>
        </div>
    </a>
    <a class="card" href="/organisations/team-training.html">
        <img class="card__image" src="/assets/images/category-lionesses.jpg" alt="Team Training">
        <div class="card__body">
            <h3>Team Training</h3>
            <p>Build systemic literacy so your team can read and navigate dynamics independently.</p>
            <span class="card__link">Learn More →</span>
        </div>
    </a>
</div>
```

---

**Section 7: When to Engage** (dark `var(--color-dark)` background, white text)

Replace the three flat cards with a clean tight prose block.

Headline: **Is This the Right Moment?**

Body: Three short lines as a styled list — NOT separate cards:
```html
<ul class="when-list">
    <li><strong>Before major transitions</strong> — Mergers, restructures, leadership changes. The moments when hidden dynamics surface with force.</li>
    <li><strong>During persistent challenges</strong> — When solutions repeatedly fail despite competent execution and adequate resources.</li>
    <li><strong>In high-stakes environments</strong> — Where complexity is inherent and traditional diagnostics provide incomplete pictures.</li>
</ul>
```

CSS:
```css
.when-list {
    list-style: none;
    padding: 0;
    margin: 2rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 700px;
}

.when-list li {
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.85);
    padding-left: 1.5rem;
    position: relative;
}

.when-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--color-sage);
}

.when-list strong {
    color: white;
}
```

---

**Section 8: CTA** (coral background — existing `.section--coral` style)

Headline: **Ready to See What Others Miss?**

Body: `Start with a no-obligation exploratory conversation. No pitch, no pressure — just clarity.`

Button: `Request an Exploratory Conversation →` → href `/contact.html`

---

## After All Changes

1. `git add -A && git commit -m "Fix: nav labels, card images, organisations page redesign"`
2. `openclaw system event --text "Done: organisations page redesign + card images + nav labels" --mode now`
