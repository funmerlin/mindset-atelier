# Mindset Atelier — New Website Specification

## About the Client

**Lisa Dullnig** — coach, trainer, and former criminal police investigator (homicide, cybercrime, white-collar crime — 3rd generation investigator). She now runs **Mindset Atelier**, a coaching and training practice serving both individuals (B2C) and organisations (B2B).

Her coaching is rooted in:
- Systemic thinking
- Forensic inquiry ("making the invisible visible")
- Strength-based, holistic personal development
- Positive Psychology (PERMA-Lead)

Email: lisa@mindsetatelier.com

---

## Brand Identity

**Brand name:** Mindset Atelier  
**Tagline:** Create Opportunities. Unfold Your Potential.  
**B2B framework name:** The Forensic Lens  
**B2B tagline:** See What Others Miss.

### Tone
- **B2C pages:** Warm, personal, transformational. Speak directly to the reader ("you"). Emotional resonance. Questions that make the reader feel seen.
- **B2B pages:** Precise, credible, outcome-oriented. ROI language. Business results. Systemic thinking framing.
- **Overall:** Sophisticated but human. Never cold, never generic. Lisa has a distinctive voice — investigator meets coach.

### Color Palette
Use CSS custom properties throughout.
```css
--color-sage: #7B9E97;        /* Primary — sage teal green */
--color-coral: #C97272;       /* Accent — warm coral/rose */
--color-cream: #F9F5EF;       /* Page background */
--color-dark: #2A2A28;        /* Body text */
--color-warm-white: #FDFAF7;  /* Card backgrounds */
--color-terracotta: #B86B4E;  /* Deep accent for testimonials/quotes */
--color-sage-light: #E8F0EE;  /* Light sage for subtle section tints */
--color-sage-dark: #5A7D7A;   /* Darker sage for hover states */
```

### Typography
Use Google Fonts — import in CSS.
```css
/* Headings — elegant serif with presence */
--font-heading: 'Cormorant Garamond', Georgia, serif;

/* Subheadings/labels — clean, wide-tracked sans */
--font-sans: 'DM Sans', system-ui, sans-serif;

/* Signature/accent — script-like italic */
--font-accent: 'Playfair Display', Georgia, serif;
```

Typography scale:
- Section labels: `--font-sans`, uppercase, letter-spacing: 0.2em, font-size: 0.8rem
- H1: `--font-heading`, 4–6rem, normal weight on mobile / larger on desktop
- H2: `--font-heading`, 2.5–3.5rem
- H3: `--font-sans`, 1.1rem, medium weight
- Body: `--font-sans`, 1rem, line-height: 1.7

---

## Technical Architecture

- **MPA** (Multi Page Application) — real HTML files, no SPA router
- **Plain CSS** — CSS custom properties, nesting, modern selectors. NO Tailwind.
- **Vanilla JS/TypeScript** — minimal: mobile nav toggle, smooth scroll, maybe simple carousel
- **Cloudflare Pages** deployment — add `wrangler.toml` and a `_headers` file
- **Build**: No build step required for initial version — raw HTML/CSS/JS files
- **Indentation**: Tabs, width 4
- **Fonts**: Google Fonts via `<link>` in `<head>`

---

## Site Structure

```
/
├── index.html                          (Homepage)
├── individuals/
│   ├── index.html                      (B2C hub — "For Individuals")
│   ├── stagnation-to-strength.html     (Coaching package 1)
│   ├── family-system.html              (Coaching package 2)
│   ├── grief-and-crises.html           (Coaching package 3)
│   └── leadership-growth.html          (Coaching package 4)
├── organisations/
│   ├── index.html                      (B2B hub — "For Organisations")
│   ├── business-scan.html              (Service 1)
│   ├── executive-coaching.html         (Service 2)
│   └── team-training.html              (Service 3)
├── about.html
├── blog/
│   ├── index.html                      (Blog listing)
│   └── forensic-lens-case-01.html      (Blog post: The Value Mismatch)
├── contact.html
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── tokens.css        (CSS custom properties)
│   │   └── styles.css        (main styles, imports reset + tokens)
│   ├── js/
│   │   └── main.js           (mobile nav, scroll effects)
│   └── images/               (already populated — see below)
├── wrangler.toml
└── _headers
```

### Available Images (in assets/images/)
- `logo.png` — Mindset Atelier logo
- `hero-bg.jpg` — Mountain landscape (hero background)
- `nature-bg.jpg` — Large landscape for section backgrounds
- `lisa-portrait.jpg` — Lisa's portrait (grey/neutral background, professional)
- `lisa-photo.jpg` — Lisa's casual photo (outdoor/relaxed)
- `category-lionesses.jpg` — B2C coaching category image (empowerment)
- `category-family.jpg` — Family coaching category image
- `category-mountains.jpg` — Mountains/nature coaching category image
- `category-compass.jpg` — Leadership/direction coaching category image

---

## Page Content

### 1. Homepage (index.html)

**Hero Section**
- Background: `hero-bg.jpg` (mountain scene, soft overlay)
- Eyebrow label: "CREATE OPPORTUNITIES · UNFOLD YOUR POTENTIAL"
- Main headline: "Level Up"
- Subheadline: "Strength-based coaching and training for individuals and organisations"
- Two CTAs side by side:
  - Primary (sage button): "For Individuals →"  → links to `/individuals/`
  - Secondary (outline button): "For Organisations →" → links to `/organisations/`

**Intro / Lisa's Voice Section** (light cream background)
- Headline: "Individual Growth"
- Opening questions (hook):
  - "Do you want to upgrade your personality?"
  - "Do you want to adapt your life to your needs — instead of having to adapt to the circumstances?"
  - "Do you want to end self-sabotage and be successful in YOUR OWN WAY?"
  - "Are you ready to roll up your sleeves and get started?"
- Body: "Then welcome to the Mindset Atelier. My name is Lisa Dullnig and I am a coach and trainer with heart and soul. I work exclusively with people who REALLY want to experience the change they want and take control of their lives. It is important to me that you — on whatever level — can become the person you want to be."
- CTA: "More about my WHY and HOW →" → `/about.html`

**How to Reach Me** (sage band — #7B9E97 background, white text)
- Headline (small label): "OPPORTUNITIES TO GET IN TOUCH WITH ME"
- Three items with icons (use emoji or SVG inline):
  - 🚀 Free Clarity Session → `/contact.html`
  - 📞 Via Telephone → `/contact.html`
  - ✉️ Via E-Mail → `mailto:lisa@mindsetatelier.com`

**Who Is It For?** (white background)
- Subheadline: "Through my variety and breadth of expertise, experience and professional practice, combined with my personal skills, I can bundle the correct resources for you in such a way that it optimally contributes to achieving your goals."
- Bullet list of qualifying questions:
  - "Do you want to finally achieve your goals, develop yourself further or change your life?"
  - "Are you looking for a sparring partner, mentor or coach who will accompany you over a short period of time as your own target and bring a breath of fresh air, new input and perspectives on topics that are currently on your mind?"
  - "Do you feel stuck in structures or relationships with individual family members that put a strain on you and you want to feel right again?"
  - "Are you currently in a difficult situation and looking for emotional relief and psychological support?"
- CTA: "See whether this chemistry is right..." → `/contact.html`

**Testimonial** (terracotta/warm coral section, large background image subtle)
- Pull quote: "With her appreciative, honest and clear attitude, Lisa has become a competent companion for me in all aspects of my life. She supports me and reflects with me on my strengths and weaknesses, always with the aim of leading a self-determined and happy life."
- Attribution: — satisfied client
- Navigation dots (if carousel) or just the single strong quote

**Coaching Expertise Grid** (cream background)
- Label: "GROW YOUR VISION"
- Subtitle: "MY COACHING EXPERTISE"
- 4 equal cards linking to individual coaching packages:
  1. Image: `category-lionesses.jpg` — "From Stagnation to Living According to Your Own Strengths" → `/individuals/stagnation-to-strength.html`
  2. Image: `category-family.jpg` — "Finding Peace Within the Family System" → `/individuals/family-system.html`
  3. Image: `category-mountains.jpg` — "Letting Go of Grief and Coping With Crises" → `/individuals/grief-and-crises.html`
  4. Image: `category-compass.jpg` — "Leadership with Depth & Sustainable Career Growth" → `/individuals/leadership-growth.html`

**The Forensic Lens Teaser** (dark sage/forest section, white text)
- Label: "FOR ORGANISATIONS"
- Headline: "See What Others Miss"
- Body: "Forensic Lens is a diagnostic framework rooted in systems thinking. It treats organisations as living systems shaped by history, relationships, and context. Rather than prescribing solutions, it illuminates dynamics — enabling leaders to see what's actually happening."
- CTA: "Explore The Forensic Lens →" → `/organisations/`

**Contact CTA Band** (coral background)
- Two columns:
  - Left: envelope icon, "Feel free to write me a message..." + contact form (name, email, message, submit)
  - Right: phone icon, "...or just leave me your phone number and I'll call you." + callback form (name, country code, number, submit)
- Note: Forms are for display — no backend needed initially. Add `action="#"` with a note.

---

### 2. For Individuals Hub (/individuals/index.html)

**Hero**
- Background: `nature-bg.jpg`
- Label: "FOR INDIVIDUALS"
- Headline: "Growth That Starts From Within"
- Subheadline: "I work with people who are ready to do something different — and make it last."

**Intro**
- Body: Lisa's voice intro about her B2C approach (see homepage intro, adapted)
- CTA: "Book a Free Clarity Session →" → `/contact.html`

**Coaching Packages** (same 4-card grid as homepage)
- Each card: image + title + 2-line description + "Learn More →" link

**Lisa's Credentials Bar** (sage band)
- Brief: "Positive Psychology Trainer · PERMA-Lead Consultant · NLP Trainer · Life & Social Counselor · Constellation Facilitator"

**Testimonial**
- Same testimonial as homepage (or a second one if available)

---

### 3. Individual Coaching Package Pages

All four packages follow the same template:

**Template for each package page:**
- **Hero**: Relevant category image + package title + short hook question
- **The Challenge** section: 8-10 qualifying "Do you..." questions
- **What We Do Together** section: Description of the coaching approach
- **The Process**: Simple 3-step visual (Clarity → Action → Growth)
- **CTA**: "Book a Free Clarity Session →"
- **Back**: "← Back to All Coaching Areas"

**Package 1: Stagnation to Strength** (`/individuals/stagnation-to-strength.html`)
- Title: "From Stagnation to Living According to Your Own Strengths"
- Image: `category-lionesses.jpg`
- Challenge questions from site: Do you feel it's time for a next step? Do you need change but don't know where to start? Do you feel stuck in a loop? Are you experiencing the same situation over and over again? Have you discovered destructive patterns that keep repeating? Is your everyday life costing you too much energy?
- Body: "Whether you're at a crossroads, stuck in a loop, or simply feel that you're not living at your full potential — this is exactly where we start. Together, we identify the patterns holding you back and cultivate the strengths that will carry you forward."

**Package 2: Family System** (`/individuals/family-system.html`)
- Title: "Finding Peace Within the Family System"
- Image: `category-family.jpg`
- Body: "Family is the only system that we don't have to 'perform' to belong to. It's the only system we can't simply 'drop out' of at any time. And precisely these two things make 'family' an incredibly powerful — but also quite energy-sapping — topic. The good news: it's not set in stone. You can change your relationship to your family system. And knowing where you come from always helps you know where you want to go."

**Package 3: Grief & Crises** (`/individuals/grief-and-crises.html`)
- Title: "Letting Go of Grief and Coping With Crises"
- Image: `category-mountains.jpg`
- Body: "Grief can have many faces. Letting it go can give your life a hugely positive turnaround." + qualifying signs of hidden grief from the site.

**Package 4: Leadership Growth** (`/individuals/leadership-growth.html`)
- Title: "Leadership with Depth & Sustainable Career Growth"
- Image: `category-compass.jpg`
- Body: Use content from the `/unternehmen` page: "You want to make a bigger impact — but something is holding you back? Leadership doesn't have to be loud. But it has to be clear." + the reflection questions list.

---

### 4. For Organisations Hub (/organisations/index.html)

**Hero**
- Background: `hero-bg.jpg` with dark overlay (more dramatic, professional feel)
- Label: "FOR ORGANISATIONS"
- Headline: "See What Others Miss"
- Subheadline: "The Forensic Lens — a systemic diagnostic framework for making invisible organisational dynamics visible."
- CTA: "Request a Proposal →" → `/contact.html?type=organisation` (or just `/contact.html`)

**The Problem** (white section)
- Headline: "When Performance Issues Aren't About Performance"
- Body: "Complex systems create invisible forces — legacy decisions, unspoken hierarchies, inherited tensions — that shape behaviour in ways traditional diagnostics miss entirely."
- Three columns:
  - Misdiagnosed root causes
  - Repeated interventions
  - Hidden dynamics

**The Framework** (sage section)
- Headline: "Forensic Lens: Making the Invisible Visible"
- Body: Description from the pitch deck
- 4 elements in grid:
  1. Historical inquiry
  2. Relational mapping
  3. Contextual analysis
  4. Pattern recognition

**Difference from Other Approaches** (white)
- Three columns comparing: Traditional consulting | Executive coaching | HR interventions
- + "Forensic Lens: addresses the layer all three miss"

**Three Services** (cards)
1. Business Scan — diagnostic process for hidden dynamics
2. Executive Coaching — systemic forces and leadership effectiveness
3. Team Training — building systemic literacy within teams

**When to Use** (sage band)
- Before major transitions | During persistent challenges | In high-stakes environments

**CTA**
- Headline: "Ready to see what others miss?"
- CTA: "Request an Exploratory Conversation →" → `/contact.html`

---

### 5. Organisation Service Pages

**Business Scan** (`/organisations/business-scan.html`)
- "A diagnostic process for identifying hidden dynamics affecting performance, strategy, or culture. Used before major decisions or during periods of stagnation."
- Output: clarity on what's actually driving behaviour, enabling more effective decisions

**Executive Coaching** (`/organisations/executive-coaching.html`)
- "One-to-one work with leaders to explore how systemic forces influence their role, decisions, and effectiveness."
- Suitable for: new leaders, leaders navigating transformation, leaders sensing misalignment

**Team Training** (`/organisations/team-training.html`)
- "Building systemic literacy within teams so they can recognise and navigate dynamics independently."
- Outcome: increased resilience and adaptability

---

### 6. About (/about.html)

**Hero**
- Background: `lisa-photo.jpg` or `lisa-portrait.jpg` (Lisa's photo, large)
- Headline: "My Fuel"
- Pull quote: *"What you want to ignite in others must burn within you."* — Augustinus

**Lisa's Story**
- "The different behaviours of people have interested me since my childhood. I am driven by a never-ending curiosity for answers to WHY people act the way they do, why situations are the way they are, and why things happen the way they happen."
- "I am particularly fascinated by the complexity of the human psyche — because nothing is ever just black or white. Curiosity has not only brought me many insights and realisations, but has also given my life a quality and depth that is unshakeable and unlosable."
- "I wish that for everyone. That's why I like to use my knowledge to support others in finding the quality and depth in their lives that they desire. My focus is always on holistic solutions that start at the root and therefore have a lasting effect — regardless of the situation."
- Origin: Former criminal police officer → 3rd generation investigator → "I examine not crime scenes, but the invisible patterns that shape clarity, leadership, relationships, and success."

**What You Can Expect From Me**
- Use the text from `/en/lisa`: "If you want something you've never had before, then you have to do something you've never done before..."

**My Values** (6-card grid with icons)
1. (Self-)Responsibility — "You are responsible for your own thoughts, actions, and results."
2. Freedom — "To think, speak and do what I want, without coercion from another person."
3. A Holistic Approach — "Understanding that a system is more than the interaction of its individual parts."
4. Clarity — "Clearly addressing what is going on. Naming circumstances that can clear up or avoid misunderstandings."
5. Positivity — "Focus on what is good and successful. Creating win-win situations."
6. Trust — "An attitude of appreciation, respect and reliance — on privacy, on boundaries."

**Credentials** (sage section)
- Title: "Experience & Education"
- Subtitle: "Well-founded. Holistic. Competent."
- Background: "Formerly a criminal police officer — always solution-oriented and in search of evidence."
- Qualifications list (bullet points with checkmarks):
  - Positive Psychology Trainer
  - PERMA-Lead® Consultant for companies/executives
  - Certified life and social counselor (Austrian law)
  - NLP Trainer
  - Constellation facilitator (systemic-dynamic intervention)
  - Interrogation trainer (Austrian Federal Police)
  - Psychological counselor (crisis intervention)
- Timeline of work experience (simple list):
  - June 2017–present: Coach & Trainer @Mindsetatelier
  - April 2022–present: Trainer @ebner-team.com
  - July 2019–Dec 2024: Trainer for interrogation techniques @BMI
  - Oct 2022–Dec 2024: Criminal Investigator @Federal Criminal Police Office (cybercrime, white-collar crime)
  - July 2019–Sep 2022: Criminal Investigator @Federal Criminal Police Office (white-collar crime)
  - July 2017–Jun 2019: Criminal Investigator @Landespolizeidirektion (Homicide)
  - Sep 2016–Jun 2017: Criminal investigation officer (crime prevention)
  - Sep 2016–Dec 2024: Volunteer Peer Support @BMI
  - Jun 2011–Aug 2016: Police officer

**CTA**
- "Convinced? Let's talk." → Free clarity session link

---

### 7. Blog (/blog/index.html)

**Header**: "The Forensic Lens" subtitle: "See What Others Miss"
**Description**: "Case studies and insights from the intersection of forensic thinking and human behaviour."
**Post Cards** (grid):
- Post 1: "CASE 01 — The Value Mismatch" — brief excerpt → `/blog/forensic-lens-case-01.html`
- Post 2: "What I Really Mean When I Say 'Positive'" → static page

---

### 8. Blog Post: Case 01 (/blog/forensic-lens-case-01.html)

**Full post content from the crawl:**
- Intro: "THE FORENSIC LENS — See what others miss. Hi, I'm Lisa — a third-generation criminal investigator and forensic coach. Now I examine not crime scenes, but the invisible patterns that shape clarity, leadership, relationships, and success."
- The Scene: Manager at workshop: "They just don't care about money anymore." + young employee unseen
- The Pain: Motivation harder to grasp. Raises don't land. What is the lever?
- The Observation (forensic analysis): Two generations, same workplace, different value systems
- The Pattern: Not about money — about meaning, recognition, autonomy
- The Resolution: Practical shift in how the leader framed value
- Tags: Forensic Lens, Leadership, Team Dynamics

---

### 9. Contact (/contact.html)

**Hero** (sage background)
- Headline: "Let's Connect"
- Subheadline: "I adapt to your schedule — whether it's your lunch break, early morning, evenings, or weekends."

**Contact intro**
- "It is important to me that we find a mode that suits your lifestyle."
- Flexible session options: morning, lunch, evening, weekends, phone during commute, immediate support for crises — "It's all possible! Thanks to technology, distance is no obstacle."

**Two-column contact section** (coral/warm background):
- Left: message form (name, email, message field, send button)
- Right: callback form (name, phone number with country selector, call me button)

**Booking CTA**
- "Book a Free Clarity Session directly:" → link to `https://www.mindsetatelier.com/booking-calendar/kostenloses-erstgespräch` (keep original Wix booking link for now)

---

## Design System Details

### Layout Principles
- Max content width: 70rem (1120px), centered
- Section padding: 5rem top/bottom on desktop, 3rem on mobile
- Grid: CSS Grid for 2-col and 4-col layouts
- Card radius: 0.5rem
- Button radius: 0.25rem (subtle, not pill-shaped)

### Components

**Buttons**
```css
.btn-primary {
  background: var(--color-sage);
  color: white;
  padding: 0.875rem 2rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-family: var(--font-sans);
}
.btn-outline {
  border: 2px solid var(--color-sage);
  color: var(--color-sage);
  /* same padding */
}
.btn-coral {
  background: var(--color-coral);
  color: white;
}
```

**Section Label** (eyebrow text above headings)
```css
.section-label {
  font-family: var(--font-sans);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: var(--color-sage);
  display: block;
  margin-bottom: 1rem;
}
```

**Hero Section**
- Full-viewport-height (min-height: 100svh)
- Background image with dark overlay (rgba 0,0,0,0.35)
- Text centered, white

**Navigation**
- Sticky top nav
- Logo left, nav links right
- On mobile: hamburger menu
- Nav items: Home | For Individuals | For Organisations | About | Blog | Contact
- CTA in nav: "Free Clarity Session" (sage button, small)

**Footer**
- Dark background (--color-dark)
- Logo, nav links, social (Instagram), legal links (Imprint, Privacy, T&C)
- Copyright: "© 2026 Mindset Atelier · Lisa Dullnig"

### CSS View Transitions
Add `@view-transition { navigation: auto; }` for smooth page transitions between HTML pages.

---

## Cloudflare Pages Config

**wrangler.toml**:
```toml
name = "mindset-atelier"
compatibility_date = "2024-01-01"
pages_build_output_dir = "."
```

**_headers**:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Cache-Control: public, max-age=3600
/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

---

## Quality Bar

- Mobile-first, responsive at 320px, 768px, 1024px, 1440px
- Core Web Vitals: images optimised (add width/height attrs), lazy loading for below-fold images
- Semantic HTML: proper h1/h2 hierarchy, `<main>`, `<nav>`, `<footer>`, `<article>` for blog
- ARIA labels on buttons and nav
- Smooth scroll for anchor links
- CSS View Transitions for page navigation
- No JavaScript frameworks — vanilla only
- The site should feel warm, elegant, and modern — think high-end coaching / therapy practice aesthetic, not corporate SaaS
