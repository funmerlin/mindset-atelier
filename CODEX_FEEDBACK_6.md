# Codex Feedback Round 6 — Text Corrections + Org Sub-pages

Follow the developing-web-projects skill: MPA, plain CSS, vanilla JS, tabs (width 4).

Two tasks: (1) text corrections sitewide, (2) rewrite the three org sub-pages with real body.

---

## Task 1: Text Corrections Sitewide

### 1a. Back links on organisations sub-pages
In `organisations/business-scan.html`, `organisations/executive-coaching.html`,
`organisations/team-training.html` — the back link reads "← Back to For Organisations".
Change to: "← Back to Organisations" (no "For").

### 1b. Homepage hero CTAs
In `index.html`, the two hero CTA buttons read "For Individuals →" and "For Organisations →".
Change to: "Individuals →" and "Organisations →" for consistency with the nav.

### 1c. About page — Clarity value card
Current: "Clearly addressing what is going on and naming what avoids misunderstandings."
Fix to: "Seeing and naming what is actually present — so nothing important stays unspoken."

### 1d. About page — Experience heading
Current: "Well-founded. Holistic. Competent. Formerly a criminal police officer — always
solution-oriented and in search of evidence."
Fix to: "Grounded. Holistic. Competent. Formerly a criminal police investigator — always
evidence-oriented and looking for root causes."

### 1e. About page — "Book a Free Clarity Session →" CTA on warm section
The button reads "Book a Free Clarity Session →" — this is B2C language on a page that also
serves B2B visitors. Change to: "Start a Conversation →" (neutral, works for both).

### 1f. Individuals sub-pages — stagnation-to-strength.html
The challenge list item "Are you over-adapting and under-living?" reads oddly.
Change to: "Are you constantly adapting to others at the cost of yourself?"

---

## Task 2: Rewrite Organisations Sub-pages with Real Content

All three pages need: a proper intro narrative, a section on who it's for, a clear process/format,
what you gain (differentiated per service), and a CTA.

Use the same HTML structure throughout for consistency. Each page follows this template:

```
hero (sage, short)
section--cream  → intro: what it is + who it's for
section--warm   → the process: how it works (3 steps or phases)
section--cream  → what you gain (differentiated per service, NOT the same list)
section--dark   → quote or principle
CTA section (coral)
back link
```

---

### 2a. `organisations/business-scan.html`

**Hero:** keep existing — "Business Scan" / "A diagnostic process..."

**Section: What It Is** (section--cream)

```html
<h2>Before You Decide — Know What You're Working With</h2>
<p class="lead">Most organisations make major decisions with incomplete information. Not about
the market or the numbers — but about themselves: the dynamics, loyalties, and tensions that
will determine whether the decision lands or fails.</p>
<p>The Business Scan is a structured diagnostic. It maps the invisible architecture of your
organisation — the patterns of behaviour, relationship, and history that shape outcomes but
rarely appear in board reports.</p>
<p>It is not consulting. It does not prescribe. It reveals — so that your leadership team can
act with clarity rather than assumption.</p>

<h3>Is This Right for You?</h3>
<ul class="list">
    <li>You are navigating a merger, restructure, or leadership transition</li>
    <li>A challenge keeps recurring despite good solutions and capable people</li>
    <li>Something feels off in the organisation — but you can't pinpoint what</li>
    <li>You want to understand the system before committing to a major intervention</li>
</ul>
```

**Section: How It Works** (section--warm)

```html
<h2>How the Scan Works</h2>
<div class="process">
    <article class="process__step">
        <span>1</span>
        <h3>Orientation</h3>
        <p>We define the scope: what question are we trying to answer? What decision or
        challenge brought you here? This shapes everything that follows.</p>
    </article>
    <article class="process__step">
        <span>2</span>
        <h3>Diagnostic</h3>
        <p>Through structured conversations and systemic mapping, we surface the hidden
        dynamics — historical patterns, relational tensions, informal power structures.</p>
    </article>
    <article class="process__step">
        <span>3</span>
        <h3>Clarity Report</h3>
        <p>You receive a clear, honest picture of what is actually happening — not a list
        of recommendations, but the foundation for decisions that hold.</p>
    </article>
</div>
```

**Section: What You Gain** (section--cream)

```html
<h2>What You Take Away</h2>
<ul class="list checklist">
    <li>A systemic map of the dynamics influencing your current challenge</li>
    <li>Visibility into the root causes — not just the symptoms</li>
    <li>Clarity on which interventions are likely to work, and why</li>
    <li>A shared language for your leadership team to navigate complexity</li>
    <li>Confidence to make the next decision from a more complete picture</li>
</ul>
```

**Quote section** (section--dark)

```html
<blockquote class="pull-quote">
    "You don't need more data. You need to see the data that's already there — the kind
    that doesn't appear in spreadsheets."
    <cite>— Lisa Dullnig</cite>
</blockquote>
```

**CTA** (section--coral)
Headline: "Ready to See What's Actually Happening?"
Body: "The Business Scan begins with a single conversation. No commitment beyond that."
Button: "Request a Proposal →" → `/contact.html`

---

### 2b. `organisations/executive-coaching.html`

**Hero:** keep existing — "Executive Coaching" / "One-to-one work..."

**Section: What It Is** (section--cream)

```html
<h2>You Function Well. But Something Doesn't Quite Fit.</h2>
<p class="lead">You make decisions. You lead. You deliver results. And yet — there is a
persistent sense of misalignment. Between what you do and what feels right. Between the role
you hold and the person you are inside it.</p>
<p>Executive Coaching with the Forensic Lens doesn't start with competencies or goals. It
starts with the systemic context you operate in: the history of your organisation, the
loyalties and exclusions that shaped the role before you arrived, the forces that influence
your decisions without you realising it.</p>
<p>When those dynamics become visible, decision-making changes. Not because you try harder —
but because you understand the field you're working in.</p>

<h3>This Coaching Is For You If</h3>
<ul class="list">
    <li>You are technically capable but feel something is holding you back systemically</li>
    <li>Decisions that should feel clear keep feeling complicated</li>
    <li>You sense your effectiveness is limited by something you can't name</li>
    <li>You want leadership that is sustainable — not just performed</li>
</ul>
```

**Section: How It Works** (section--warm)

```html
<h2>The Coaching Process</h2>
<div class="process">
    <article class="process__step">
        <span>1</span>
        <h3>Mapping Your System</h3>
        <p>We examine the organisational context around you — history, role dynamics,
        key relationships — to understand the forces shaping your decisions.</p>
    </article>
    <article class="process__step">
        <span>2</span>
        <h3>Making It Visible</h3>
        <p>Through structured conversation and systemic inquiry, we name what has been
        operating beneath the surface. Clarity replaces confusion.</p>
    </article>
    <article class="process__step">
        <span>3</span>
        <h3>Aligned Action</h3>
        <p>From this foundation, decisions and actions emerge with less friction. You lead
        from understanding rather than effort. The change sustains itself.</p>
    </article>
</div>
<p>Sessions are conducted one-to-one, adapted to your schedule — morning, lunch, evening.
Engagements are typically time-bound and focused on a specific leadership context.</p>
```

**Section: What You Gain** (section--cream)

```html
<h2>What Shifts</h2>
<ul class="list checklist">
    <li>Clarity about the systemic forces that shape your role and decisions</li>
    <li>Greater alignment between who you are and how you lead</li>
    <li>Reduced internal friction — decisions that feel right, not just correct</li>
    <li>A broader map of the organisation and your place within it</li>
    <li>Leadership that is precise rather than effortful</li>
</ul>
```

**Quote section** (section--dark)

```html
<blockquote class="pull-quote">
    "Most leadership challenges aren't personal failures. They are systemic signals.
    Once you can read them, everything changes."
    <cite>— Lisa Dullnig</cite>
</blockquote>
```

**CTA** (section--coral)
Headline: "Ready to Lead From Clarity?"
Body: "The first conversation is always exploratory — no commitment, just clarity."
Button: "Request an Exploratory Conversation →" → `/contact.html`

---

### 2c. `organisations/team-training.html`

**Hero:** keep existing — "Team Training" / "Building systemic literacy..."

**Section: What It Is** (section--cream)

```html
<h2>Teams That Can Read Their Own Dynamics</h2>
<p class="lead">Most team interventions address behaviour. Systemic team training goes further —
it builds the capacity to understand why the behaviour is there in the first place.</p>
<p>Teams are living systems. They carry history. Patterns of belonging and exclusion form over
time. Loyalties develop. Certain dynamics become invisible simply because they are always
present.</p>
<p>The Forensic Lens Team Training gives your team the literacy to see these dynamics — and to
navigate them with intention rather than reaction. Once learned, it stays. The team carries the
lens independently.</p>

<h3>Signs Your Team Could Benefit</h3>
<ul class="list">
    <li>Communication is technically fine but something blocks real alignment</li>
    <li>Certain patterns repeat — different topics, same underlying tension</li>
    <li>New members struggle to integrate despite good onboarding</li>
    <li>The team functions but doesn't quite thrive</li>
</ul>
```

**Section: How It Works** (section--warm)

```html
<h2>The Training Format</h2>
<div class="process">
    <article class="process__step">
        <span>1</span>
        <h3>Systemic Orientation</h3>
        <p>The team learns the foundations of systemic thinking — how organisations behave
        as living systems, and what forces shape group dynamics.</p>
    </article>
    <article class="process__step">
        <span>2</span>
        <h3>Reading the Room</h3>
        <p>We apply the Forensic Lens to your team's actual dynamics. Real patterns become
        visible. The team practices naming what it sees — without blame.</p>
    </article>
    <article class="process__step">
        <span>3</span>
        <h3>Independent Navigation</h3>
        <p>The team internalises the lens and learns to apply it going forward —
        recognising dynamics early, responding with greater precision.</p>
    </article>
</div>
<p>Training is delivered as a multi-session programme, tailored to team size and context.
Formats can be adapted for in-person, hybrid, or remote teams.</p>
```

**Section: What You Gain** (section--cream)

```html
<h2>What the Team Gains</h2>
<ul class="list checklist">
    <li>A shared language for navigating dynamics — without blame or diagnosis</li>
    <li>Visibility into the patterns that currently limit performance</li>
    <li>Greater resilience: the team can read tension before it escalates</li>
    <li>Improved integration of new members into existing team culture</li>
    <li>A lasting capacity — the lens stays with the team after the programme ends</li>
</ul>
```

**Quote section** (section--dark)

```html
<blockquote class="pull-quote">
    "A team that understands its own dynamics doesn't need to be managed out of every
    conflict. It navigates."
    <cite>— Lisa Dullnig</cite>
</blockquote>
```

**CTA** (section--coral)
Headline: "Build a Team That Reads Itself"
Body: "Start with a conversation about your team's context. We'll take it from there."
Button: "Request a Proposal →" → `/contact.html`

---

## CSS Addition Needed

Add a `.pull-quote` style in `assets/css/components.css`:
```css
.pull-quote {
    font-family: var(--font-heading);
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    font-weight: 300;
    font-style: italic;
    line-height: 1.6;
    color: var(--color-warm-white);
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    padding: 0 1rem;
}

.pull-quote cite {
    display: block;
    font-family: var(--font-sans);
    font-size: 0.85rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 1rem;
    opacity: 0.7;
}
```

The `.section--dark` already exists and applies the dark background + light text.

---

## After All Changes

1. `git add -A && git commit -m "Content: org sub-pages full rewrite, text corrections sitewide"`
2. `openclaw system event --text "Done: org sub-pages rewritten, text corrections applied" --mode now`
