# Mindset Atelier — Website Build Brief

## Project Overview
Build a complete, modern, production-ready static website for **Lisa Dullnig**, a coach and trainer operating under the brand **Mindset Atelier**. The new site replaces her current Wix site at mindsetatelier.com.

The site serves **two distinct audiences** via one unified brand:
- **B2C (individuals):** Personal growth, family, grief, leadership coaching
- **B2B (organisations):** The Forensic Lens — a systemic organisational diagnostics framework

---

## Tech Stack (NON-NEGOTIABLE — follow exactly)

- **Architecture:** Multi-Page Application (MPA) — real HTML files, no SPA, no client-side router
- **CSS:** Plain CSS only — no Tailwind, no CSS-in-JS. Use CSS nesting, custom properties, logical properties, modern selectors
- **HTML:** Semantic HTML5. Use `<a href>` for navigation, not JS click handlers
- **TypeScript:** Not needed for this static site — HTML/CSS/JS only
- **Deployment target:** Cloudflare Pages (static export)
- **Build tool:** None required — pure static files. Add a simple `package.json` with a dev server script only (`npx serve .` or similar)
- **Indentation:** Tabs (width 4)
- **NO React, Vue, Svelte, Angular, Next.js, or any JS framework**
- **NO Tailwind**

---

## Design Language

### Color Palette
```css
:root {
    --color-sage: #7B9E98;          /* Primary — nav bands, CTAs, section accents */
    --color-coral: #C97070;         /* Secondary — accent sections, hover states */
    --color-cream: #F8F5F1;         /* Page background */
    --color-charcoal: #2D2D2D;      /* Body text */
    --color-warm-white: #FDFAF7;    /* Card/panel background */
    --color-sage-light: #A8C4BF;    /* Hover states, borders */
    --color-coral-light: #E8A898;   /* Subtle accents */
    --color-text-muted: #6B6B6B;    /* Secondary text */
}
```

### Typography
Use Google Fonts (add in `<head>`):
- **Cormorant Garamond** (400, 400i, 600) — for headlines, hero text, pull quotes
- **DM Sans** (300, 400, 500) — for body text, navigation, CTAs

Typography rules:
- Hero/section headlines: Cormorant Garamond, uppercase, letter-spacing 0.15–0.2em
- Sub-headlines: Cormorant Garamond italic
- Pull quotes: Cormorant Garamond italic, large (1.8–2.5rem)
- Body: DM Sans, 400, line-height 1.7
- CTAs/buttons: DM Sans 500, letter-spacing 0.08em

### Visual Principles
- Nature-inspired, warm, grounded — not corporate, not clinical
- White space is generous — don't crowd content
- Full-width colored bands for section breaks (sage, coral, cream alternating)
- Images are full-bleed or constrained with generous padding
- Quotes are featured prominently — styled with large quotation marks
- Feminine but not pink/girly — earthy, elegant
- Warm and inviting, not cold and modern

### Existing Assets (in `assets/images/`)
- `logo.png` — Mindset Atelier logo with watercolor teal splash
- `hero-bg.jpg` — Mountain landscape (hero background, misty/green)
- `nature-bg.jpg` — Landscape panoramic (3000×1700, for full-bleed backgrounds)
- `lisa-portrait.jpg` — Lisa portrait, grey/neutral background
- `lisa-photo.jpg` — Lisa photo for About page
- `lisa-bg.jpg` — Background landscape for Lisa page
- `lisa-small.png` — Lisa profile photo
- `category-lionesses.jpg` — Lionesses photo (growth/strength)
- `category-family.jpg` — Family on beach (family system)
- `category-mountains.jpg` — Mountain hut (grief/resilience)
- `category-compass.jpg` — Hand holding compass (leadership)

---

## Site Architecture (MPA — one file per page)

```
/
├── index.html                    ← Homepage
├── about.html                    ← Lisa — About me
├── for-individuals.html          ← B2C overview (coaching packages)
├── individuals/
│   ├── growth.html               ← From stagnation to strengths
│   ├── family.html               ← Peace within the family system
│   ├── grief.html                ← Letting go of grief & crises
│   └── leadership.html           ← Leadership & Career
├── for-organisations.html        ← B2B — The Forensic Lens (full page)
├── contact.html                  ← Contact
├── assets/
│   ├── images/                   ← (already populated)
│   ├── css/
│   │   ├── reset.css
│   │   ├── global.css
│   │   └── components.css
│   └── js/
│       └── main.js               ← Minimal JS (mobile nav toggle only)
└── package.json
```

---

## Component Patterns (reuse across pages)

### Navigation (sticky, transparent over hero → solid on scroll)
```
[Logo]    Home  |  For Individuals  |  For Organisations  |  About  |  Contact    [Book a Call →]
```
- Logo: left, `assets/images/logo.png`
- Nav links: center
- CTA button: right — "Book a Call →" — sage background, white text
- Mobile: hamburger → full-screen overlay menu
- Scrolled state: white background with subtle shadow

### Hero Section (homepage)
- Full-viewport height
- Background: `hero-bg.jpg` with dark overlay (rgba 0,0,0,0.25)
- Centered content:
  - Small caps tagline: "CREATE OPPORTUNITIES · UNFOLD YOUR POTENTIAL"
  - H1: "LEVEL UP" (Cormorant Garamond, very large, letter-spacing 0.2em)
  - Dual CTA row: `[For Individuals →]` | `[For Organisations →]`
  - (Both buttons: ghost/outline style, white border)

### Page Hero (sub-pages)
- Shorter: 40vh
- Full-width background (either image or sage solid)
- Centered: page title + decorative quote below

### Quote Block
```
Large " mark (decorative, sage color)
Quote text in Cormorant Garamond italic, 1.6–2rem
— Attribution, DM Sans, small caps
```

### Service Card
```
[Image: 16:9 or square]
[Category label]
[Title]
[2-line description]
[Learn more →]
```

### Values Grid (6 items, 3×2)
```
[Icon]
[Value Name]
[Description]
```

### Testimonial Block
- Coral background section
- Large open-quote graphic
- Quote in Cormorant Garamond italic, white
- Name, small caps

### Contact Section (appears on every page footer-ish)
- Two-column: message form | callback form
- Sage-to-coral gradient background
- Form inputs: cream, minimal border

### Footer
- Logo
- Navigation links
- Instagram link
- Legal: Imprint · Privacy Policy · Terms
- Copyright

---

## Page-by-Page Content

### index.html — Homepage

**SEO meta:** `<title>Mindset Atelier | Coaching & Training for Individual Growth</title>`

**Sections in order:**

1. **Navigation** (global)

2. **Hero**
   - Background: `hero-bg.jpg`
   - Tagline: CREATE OPPORTUNITIES · UNFOLD YOUR POTENTIAL
   - H1: LEVEL UP
   - Dual CTAs: "I'm an individual →" | "I represent an organisation →"

3. **Welcome section** (cream background)
   - H2: INDIVIDUAL GROWTH
   - 4 rhetorical questions (the "upgrade your personality" block)
   - Body: "Then welcome to the Mindset Atelier. My name is Lisa Dullnig and I am a coach and trainer with heart and soul..."
   - CTA: "More about Lisa →"

4. **Contact methods strip** (sage background)
   - Section title: OPPORTUNITIES TO GET IN TOUCH
   - 3 icons + labels: Free Clarity Session | Via Telephone | Via E-Mail

5. **Value proposition** (white background)
   - Quote: "When the soul is ready, so are things." — William Shakespeare
   - Body text: "Through my variety and wealth of expertise..."
   - 4 bullet pain points
   - CTA: "Book a Free Clarity Session →"

6. **Testimonial** (coral background)
   - Quote from Anna U.

7. **Services Grid** (cream background)
   - H2: GROW YOUR VISION
   - Sub: MY COACHING EXPERTISE
   - 4 service cards: Growth · Family · Grief · Leadership
   - Also link to: For Organisations →

8. **Contact section** (global footer contact)

9. **Footer** (global)

---

### about.html — About Lisa

**SEO:** `<title>Lisa Dullnig | Coach & Trainer | Mindset Atelier</title>`

**Sections:**

1. **Navigation**

2. **Page hero** (sage band)
   - Pull quote: "What you want to ignite in others must burn in you." — Augustinus

3. **My Fuel** (split layout: text left, Lisa photo right)
   - H2: MY FUEL
   - Full text about childhood curiosity, human psyche fascination, holistic solutions
   - Quote: "You can only see well with your heart..." — Saint-Exupéry

4. **What to expect** (white background)
   - H2: What you can and cannot expect from me
   - Full text about process, patterns, companionship style
   - CTA: "Book a free initial consultation →"

5. **Values** (cream background, 3×2 grid)
   - H2: MY VALUES
   - 6 values: Self-Responsibility · Freedom · Holistic Approach · Clarity · Positivity · Trust
   - Each: icon (SVG) + name + description

6. **Contact section + Footer**

---

### for-individuals.html — For Individuals Overview

**SEO:** `<title>Individual Coaching | Mindset Atelier</title>`

**Page hero quote:** "The kind of questions we ask determines whether we go round in circles or enter an upward spiral." — Lisa Dullnig

**Sections:**

1. **Intro text** (cream): "My coaching expertise spans four areas. Each one is a doorway into something different — but the goal is always the same: to help you live more fully in your own way."

2. **4 Service cards** (large, linked):
   - Growth & Strengths → individuals/growth.html
   - Family System → individuals/family.html
   - Grief & Crises → individuals/grief.html
   - Leadership & Career → individuals/leadership.html

3. **Discovery call CTA block** (sage background):
   - "Not sure which area fits? Start with a free clarity call."
   - CTA: "Book a Free Clarity Session →"

4. **Quote:** "Give a man a fish and you feed him for a day..." — Confucius

5. **Motivational closer:** "One day or day one... be the change you wish to see in the world."

6. **Contact + Footer**

---

### individuals/growth.html

**H1:** From Stagnation to Living According to Your Own Strengths
**Quote:** "It's better to live like a lion for one day than like a slave for 100 years." — Malala
**Tagline:** Learn and grow into the person you want to be — you set the pace.
**Image:** `category-lionesses.jpg`

Full content from crawl. Pain point checklist. CTA: "Book your free clarity call →"
Navigation links at bottom to other individual pages.

---

### individuals/family.html

**H1:** Finding Peace Within the Family System
**Quote:** "Change yourself and the world around you will change." — Mahatma Gandhi
**Tagline:** No wings without roots.
**Image:** `category-family.jpg`

Full pain point list. CTA: "Book your free clarity call →"

---

### individuals/grief.html

**H1:** Letting Go of Grief and Coping with Crises
**Quote:** "In the deepest darkness, that sun that never sets has shone on me." — Lisa Dullnig
**Tagline:** Life crises as growth accelerators.
**Image:** `category-mountains.jpg`

Full pain point checklist. Wisdom research note. CTA: "Start letting go →"

---

### individuals/leadership.html

**H1:** Leadership with Depth & Sustainable Career Growth
**Quote:** "Success is having exactly the skills that are in demand at the moment." — Henry Ford
**Tagline:** Leadership doesn't have to be loud. But it has to be clear.
**Image:** `category-compass.jpg`

3 stages: New to leadership · Experienced leader · Going through transformation.
Each stage as an expandable/accordion section (pure CSS :has() or checkbox trick — NO JS).
CTA: "Start your leadership journey →"
Note at bottom: "What begins with the individual can create real change. You can later bring these insights to your team — or even to the whole organization. [Learn more about Forensic Lens →]"

---

### for-organisations.html — The Forensic Lens (B2B)

**SEO:** `<title>Forensic Lens | Systemic Organisational Diagnostics | Mindset Atelier</title>`

**Important:** This is the B2B page. Different tone — professional, outcomes-focused, authoritative.

**Page hero** (dark sage/charcoal band, not the warm cream):
- Eyebrow: MINDSET ATELIER FOR ORGANISATIONS
- H1: Forensic Lens
- Tagline: A systemic framework for making invisible organisational dynamics visible

**Section 1 — The Challenge** (white background)
- H2: When Performance Issues Aren't About Performance
- Quote: "Some people never understand what you bring to the table until they see you at another table."
- Intro: "Complex systems create invisible forces: legacy decisions, unspoken hierarchies, inherited tensions — these shape behaviour in ways traditional diagnostics miss entirely."
- 3-column problem block:
  - **Misdiagnosed root causes** — Focusing on individuals when the system is dysfunctional
  - **Repeated interventions** — Costly solutions that don't address underlying patterns
  - **Hidden dynamics** — Forces that influence decisions but remain unexamined

**Section 2 — The Gap** (sage background)
- H2: The Gap No One Is Filling
- 3-column comparison table: Traditional consulting | Executive coaching | HR interventions
- Each: what it does well + what it misses
- Closer: "Each approach has merit. But none were designed to reveal the hidden architecture of organisational behaviour."

**Section 3 — What We Do** (cream background)
- H2: Making the Invisible Visible
- Body: "Forensic Lens is a diagnostic framework rooted in systems thinking. It treats organisations as living systems shaped by history, relationships, and context. Rather than prescribing solutions, it illuminates dynamics."

**Section 4 — The Framework** (white background)
- H2: Core Elements
- 4-element grid (numbered):
  1. Historical Inquiry — founding stories, transitions, inherited legacies
  2. Relational Mapping — patterns of inclusion, exclusion, loyalty, belonging
  3. Contextual Analysis — external pressures + internal structures
  4. Pattern Recognition — recurring behaviours and systemic entanglements

**Section 5 — Applications** (sage background)
- H2: Three Primary Applications
- 3 cards:
  - **Business Scan** — Diagnostic process for identifying hidden dynamics. Used before major decisions or during stagnation.
  - **Executive Coaching** — One-to-one with leaders to explore systemic forces influencing their role.
  - **Team Training** — Building systemic literacy within teams.

**Section 6 — Specialisations** (white background)
- H2: Specialised Applications
- 3 expandable panels (pure CSS):
  - **Self-Leadership & Alignment** (for individuals with visible success but inner misalignment)
  - **Corporate Well-ness** (strengthening culture, motivation, loyalty)
  - **Financial Institutions** (human/cultural due diligence)

**Section 7 — The Difference** (cream background)
- H2: Understanding First, Then Action
- 2-column comparison: Action-driven change vs. Understanding-driven change
- Quote: "Same goal — different sequence. Different sequence — different sustainability."

**Section 8 — When to Engage** (coral background)
- H2: When Forensic Lens Is Applicable
- 3 scenarios: Before major transitions · During persistent challenges · In high-stakes environments

**Section 9 — CTA** (charcoal/dark background)
- H2: Request a Conversation
- Body: "Forensic Lens isn't about finding fault or assigning blame. It's about understanding what's really happening so better decisions can be made."
- CTA: "Request a Proposal →" (large button, sage background)
- Secondary: "Or book an exploratory call first →"

**Section 10 — Clarity Statement**
- 3-column: Insight & Responsibility · Focus on Clarity & Alignment · Context & Consequences

---

### contact.html

**SEO:** `<title>Contact | Mindset Atelier</title>`

**Page hero** (sage): "Feel invited to... start the dialogue"

**Quote:** "The world belongs to the brave." — Theodor Fontane

**Intro:** Full contact page text about flexible scheduling.

**Two-column contact section:**
- Left: Message form (name, email, message, Send message)
- Right: Callback form (name, country code, phone, Receive a call)

---

## CSS Architecture

### `assets/css/reset.css`
Modern CSS reset (box-sizing, margin collapse, etc.)

### `assets/css/global.css`
```css
/* Custom properties (colors, fonts, spacing) */
/* Base typography */
/* Layout utilities (.container, .section) */
/* Navigation */
/* Footer */
/* Buttons */
/* Quote blocks */
```

### `assets/css/components.css`
```css
/* Hero sections */
/* Service cards */
/* Values grid */
/* Testimonial block */
/* Forms */
/* Contact strip */
/* Accordion (pure CSS, :has() or checkbox) */
```

### Key CSS patterns to use:
```css
/* Container */
.container {
    max-width: 1200px;
    margin-inline: auto;
    padding-inline: 2rem;
}

/* Section */
.section {
    padding-block: 5rem;
}

/* Responsive grid */
.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}
```

---

## JavaScript (minimal)

`assets/js/main.js` — only two things:

1. **Mobile navigation toggle** (hamburger menu)
2. **Nav scroll state** (add `.scrolled` class to nav when `scrollY > 80`)

```javascript
// Nav scroll
const nav = document.querySelector('.site-nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
});

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
toggle?.addEventListener('click', () => {
    menu.classList.toggle('open');
    document.body.classList.toggle('menu-open');
});
```

---

## package.json

```json
{
    "name": "mindset-atelier",
    "version": "1.0.0",
    "description": "Mindset Atelier coaching website",
    "scripts": {
        "dev": "npx serve . -p 3000",
        "build": "echo 'Static site - no build step required'"
    }
}
```

---

## Quality Standards

- All pages must be **fully responsive** (mobile-first)
- **No broken links** — all `href` values must match actual files
- **Images use lazy loading:** `loading="lazy"` on all non-hero images
- **Hero images use `fetchpriority="high"`**
- **Semantic HTML:** proper use of `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<h1>`–`<h4>`
- **Only one `<h1>` per page**
- **All interactive elements are keyboard accessible**
- **Forms have proper labels** (not just placeholders)
- **Meta description on every page**
- **Open Graph tags on every page**
- **Favicon:** use the logo (add a `<link rel="icon">` pointing to `assets/images/logo.png`)

---

## Important Notes

1. The **TFL nav item** on the original site linked to a 404. Our new site makes `/for-organisations.html` the proper destination.
2. The **booking link** `booking-calendar/kostenloses-erstgespräch` is a Wix embed — replace it with a `mailto:` or `tel:` link for now. Use `href="mailto:hello@mindsetatelier.com"` as a placeholder.
3. **Language switcher** (EN/DE) — add a visible toggle in the nav (non-functional for now, just UI element).
4. **Instagram link** in footer: `https://www.instagram.com/mindsetatelier/` (placeholder if unsure).
5. Use `&ldquo;` and `&rdquo;` for proper quote characters.

---

## Definition of Done

- [ ] All 10 HTML pages exist and render without errors
- [ ] Global nav appears on all pages with correct active states
- [ ] Homepage dual CTA routes to correct pages
- [ ] All 4 individual coaching sub-pages have full content
- [ ] Forensic Lens B2B page is complete and professional
- [ ] Contact page has working form layout (static forms OK, no backend needed)
- [ ] All images referenced in HTML exist in `assets/images/`
- [ ] CSS is split across 3 files as specified
- [ ] Site is responsive on mobile (375px) and desktop (1440px)
- [ ] Dev server runs via `npm run dev`
