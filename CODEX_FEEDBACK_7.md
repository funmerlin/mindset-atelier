# Codex Feedback Round 7 — Individuals Sub-pages Full Rewrite

Follow the developing-web-projects skill: MPA, plain CSS, vanilla JS, tabs (width 4).

Rewrite all four individuals sub-pages with the same depth and structure as the organisations
sub-pages. Each page should feel distinct, use the challenge list already present as a starting
point, and follow this section order:

```
hero (sage, short — keep existing)
section--cream  → narrative intro: what this is really about + who it's for
section--warm   → the process (3 steps — differentiated per page)
section--cream  → what you gain (specific per page)
section--dark   → pull-quote (see below for source)
section--coral  → CTA
back link       → "← Back to All Coaching Areas"
```

The `.pull-quote` CSS class already exists from the previous round. Use `section--dark` for
the quote section.

The challenge questions (checklist) should move INSIDE the intro section — BEFORE the
narrative paragraphs — not as a standalone section. This makes the reader feel seen before
being told what to do about it.

---

## Page 1: `individuals/stagnation-to-strength.html`

**Intro section** (section--cream):

Keep the existing challenge checklist but wrap it with:

Before the list:
```html
<h2>Stuck in a Loop You Can't Quite Name?</h2>
<p class="lead">The situations change. The people change. And yet something stays the same.
The feeling of going nowhere — or of going in circles — is one of the most disorienting
experiences a person can have.</p>
```

After the list:
```html
<p>These aren't signs of weakness. They're signs that a pattern is running — and that
the pattern has not yet been made visible. That's where we start.</p>
<p>Lisa's approach treats your strengths as raw material — not problems to fix, but
potential waiting to be shaped. You already have what you need. The coaching is the
refining process.</p>

<h3>This Is For You If</h3>
<ul class="list">
    <li>You're ready to take responsibility — not for the problem, but for what comes next</li>
    <li>You want change that actually lasts, not a temporary motivational boost</li>
    <li>You're willing to look honestly at the patterns that have kept you stuck</li>
</ul>
```

**Process section** (section--warm):

```html
<h2>How We Work Together</h2>
<div class="process">
    <article class="process__step">
        <span>1</span>
        <h3>Pattern Mapping</h3>
        <p>We identify the recurring loops — where they come from, what keeps them
        running, and what they're costing you. Not to assign blame, but to get clear.</p>
    </article>
    <article class="process__step">
        <span>2</span>
        <h3>Strength Discovery</h3>
        <p>Your strengths and abilities are raw diamonds — present but unpolished.
        We surface them, name them, and learn to lead with them rather than around them.</p>
    </article>
    <article class="process__step">
        <span>3</span>
        <h3>Your Own Trajectory</h3>
        <p>You leave with clarity about what success looks and feels like on your own terms —
        and the practical tools to pursue it without falling back into the old loops.</p>
    </article>
</div>
```

**What you gain** (section--cream):

```html
<h2>What Changes</h2>
<ul class="list checklist">
    <li>Clarity about the patterns that have been driving your decisions</li>
    <li>A map of your core strengths — and how to lead your life with them</li>
    <li>A new relationship with the loops: you can see them coming now</li>
    <li>The confidence to make choices that are genuinely yours</li>
    <li>Change that holds — because it starts at the root, not the surface</li>
</ul>
```

**Quote** (section--dark):

Use Lisa's real quote from her website:
```html
<blockquote class="pull-quote">
    "The kind of questions we ask determines whether we go round in circles or enter
    an upward spiral."
    <cite>— Lisa Dullnig</cite>
</blockquote>
```

**CTA** (section--coral):
- Headline: `Your Strengths Are Already There.`
- Body: `The clarity session is where we find them together.`
- Button: `Book a Free Clarity Session →` → `/contact.html`

---

## Page 2: `individuals/family-system.html`

**Intro section** (section--cream):

Keep the existing challenge checklist, wrapped with:

Before the list:
```html
<h2>Family Is the One System You Can't Just Leave</h2>
<p class="lead">It's the system that shaped you before you had any say in the matter.
The roles assigned in childhood. The unspoken loyalties. The love that comes with conditions
no one ever named out loud.</p>
```

After the list:
```html
<p>Family patterns don't disappear when we become adults. They follow us into our
partnerships, our friendships, our workplaces. The same dynamics, the same roles —
just with new names attached.</p>
<p>The goal of this coaching is not to cut ties or assign blame. It is to understand
the system you came from — so that you can relate to it differently. Peace is possible
without distance.</p>

<h3>This Is For You If</h3>
<ul class="list">
    <li>You want to change your relationship with family — without drama or ultimatums</li>
    <li>You sense that family patterns are showing up in other areas of your life</li>
    <li>You're ready to understand the system rather than fight it</li>
</ul>
```

**Process section** (section--warm):

```html
<h2>How We Work Together</h2>
<div class="process">
    <article class="process__step">
        <span>1</span>
        <h3>Mapping the System</h3>
        <p>We look at your family as a whole — the roles, the patterns, the unspoken rules.
        Systemic constellation work makes invisible dynamics visible.</p>
    </article>
    <article class="process__step">
        <span>2</span>
        <h3>Understanding the Entanglements</h3>
        <p>Where do you carry what doesn't belong to you? What loyalty is costing you
        your own life energy? We name it — and then we find where it belongs.</p>
    </article>
    <article class="process__step">
        <span>3</span>
        <h3>Finding Your Place</h3>
        <p>You belong in your family — but belonging doesn't require losing yourself.
        We find the posture that allows connection without absorption.</p>
    </article>
</div>
```

**What you gain** (section--cream):

```html
<h2>What Becomes Possible</h2>
<ul class="list checklist">
    <li>Relief from dynamics that have been draining your energy for years</li>
    <li>Understanding of your role and place in the system — without blame</li>
    <li>The ability to relate to family members differently, without re-enacting old patterns</li>
    <li>Peace that doesn't require cutting ties or keeping permanent distance</li>
    <li>More lightness in your relationships beyond the family too</li>
</ul>
```

**Quote** (section--dark):

```html
<blockquote class="pull-quote">
    "Knowing where you come from helps you choose where you want to go."
    <cite>— Lisa Dullnig</cite>
</blockquote>
```

**CTA** (section--coral):
- Headline: `Peace With Your Family — On Your Terms.`
- Body: `Start with a free clarity session to see if this work is right for you.`
- Button: `Book a Free Clarity Session →` → `/contact.html`

---

## Page 3: `individuals/grief-and-crises.html`

**Intro section** (section--cream):

Keep the existing challenge checklist, wrapped with:

Before the list:
```html
<h2>Grief Doesn't Always Look the Way You Expect</h2>
<p class="lead">Sometimes it's the loss of a person. Sometimes it's the loss of a life you
thought you'd have — a relationship, a version of yourself, a future that suddenly isn't
there anymore.</p>
```

After the list:
```html
<p>Grief takes many forms. What they share is this: they ask something of you that
everyday life isn't designed to support. And they're harder to carry alone.</p>
<p>This coaching doesn't rush you past what you're feeling. It creates space for it —
and then, when you're ready, practical orientation for what comes next. Compassionate
and structured. Both.</p>

<h3>This Is For You If</h3>
<ul class="list">
    <li>You don't need someone to fix you — you need someone to accompany you</li>
    <li>You want support that takes you seriously without dramatising your pain</li>
    <li>You're ready to move — when the time is right</li>
</ul>
```

**Process section** (section--warm):

```html
<h2>How We Work Together</h2>
<div class="process">
    <article class="process__step">
        <span>1</span>
        <h3>Creating Safety</h3>
        <p>Before anything else, we create a space where what you're carrying can be
        set down. No pressure to perform, no rush to feel better faster.</p>
    </article>
    <article class="process__step">
        <span>2</span>
        <h3>Understanding the Loss</h3>
        <p>What has actually been lost — and what does that loss mean to you? We go
        beneath the surface to understand the grief fully, not just manage its symptoms.</p>
    </article>
    <article class="process__step">
        <span>3</span>
        <h3>Finding the Way Forward</h3>
        <p>Practical orientation for what comes next. Not a prescription for how to feel —
        but a compass for how to move. From survival mode toward meaningful momentum.</p>
    </article>
</div>
```

**What you gain** (section--cream):

```html
<h2>What This Work Offers</h2>
<ul class="list checklist">
    <li>Emotional relief — the weight becomes more bearable</li>
    <li>Clarity about what this crisis is actually asking of you</li>
    <li>Practical orientation for your next steps, when you're ready</li>
    <li>The experience of being truly heard — without judgement</li>
    <li>Trust that life can open again after loss</li>
</ul>
```

**Quote** (section--dark):

```html
<blockquote class="pull-quote">
    "Grief that is acknowledged and accompanied doesn't trap you.
    It transforms you."
    <cite>— Lisa Dullnig</cite>
</blockquote>
```

**CTA** (section--coral):
- Headline: `You Don't Have to Carry This Alone.`
- Body: `A free clarity session is a first conversation — no commitment, no pressure.`
- Button: `Book a Free Clarity Session →` → `/contact.html`

---

## Page 4: `individuals/leadership-growth.html`

**Intro section** (section--cream):

Keep the existing challenge checklist, wrapped with:

Before the list:
```html
<h2>You Lead Well. But Something Isn't Quite Right.</h2>
<p class="lead">You deliver results. You handle the complexity. From the outside, things
look fine. But from the inside — there's friction. A gap between the leader you're being
and the leader you know yourself to be.</p>
```

After the list:
```html
<p>Leadership isn't just about performance. It's about the person behind the role.
When those two are misaligned — when the role pulls in one direction and your values
pull in another — the energy cost is enormous.</p>
<p>This coaching works at both levels: the strategic and the human. Not to make you a
better performer, but to make leadership feel like something you can actually sustain.</p>

<h3>This Is For You If</h3>
<ul class="list">
    <li>You want leadership that comes from clarity — not just competence</li>
    <li>You're ready to close the gap between your impact and your intention</li>
    <li>You want to lead in a way that's distinctly yours — not a copy of someone else's style</li>
</ul>
```

**Process section** (section--warm):

```html
<h2>How We Work Together</h2>
<div class="process">
    <article class="process__step">
        <span>1</span>
        <h3>Role & Identity</h3>
        <p>Who are you as a leader — separate from your performance? We explore the
        person inside the role and what gets lost when the role takes over completely.</p>
    </article>
    <article class="process__step">
        <span>2</span>
        <h3>Systemic Navigation</h3>
        <p>Your organisation is a system with its own dynamics. We map how those forces
        are shaping your leadership — and where you have more room to move than you think.</p>
    </article>
    <article class="process__step">
        <span>3</span>
        <h3>Sustainable Authority</h3>
        <p>You develop a leadership presence that is calm, precise, and unmistakably
        yours — not a style borrowed from someone else's playbook.</p>
    </article>
</div>
```

**What you gain** (section--cream):

```html
<h2>What Shifts</h2>
<ul class="list checklist">
    <li>Role clarity — you know where you stand and why</li>
    <li>Communication that lands with authority and genuine warmth</li>
    <li>Decision-making that feels grounded rather than reactive</li>
    <li>A leadership style that doesn't require you to perform yourself</li>
    <li>The energy to lead well — over time, not just in the short term</li>
</ul>
```

**Quote** (section--dark):

Use Lisa's forensic angle — she examines leadership contexts just as she examined crime scenes:
```html
<blockquote class="pull-quote">
    "Most leadership friction isn't about skill. It's about misalignment between
    the person and the system they're operating in."
    <cite>— Lisa Dullnig</cite>
</blockquote>
```

**CTA** (section--coral):
- Headline: `Lead From Clarity, Not Just Competence.`
- Body: `Start with a free clarity session to explore what's possible.`
- Button: `Book a Free Clarity Session →` → `/contact.html`

---

## Structural Note for All Four Pages

For the challenge list placement: move the `<ul class="list checklist">` INTO the first
`section--cream` intro section — it should appear AFTER the opening headline and lead
paragraph, and BEFORE the explanatory paragraphs and "This Is For You If" block.

Remove the standalone `<section class="section section--cream"><h2>The Challenge</h2>...`
wrapper — merge it all into one intro section with proper flow.

---

## After All Changes

1. `git add -A && git commit -m "Content: individuals sub-pages full rewrite with narrative body"`
2. `git push`
3. `openclaw system event --text "Done: individuals sub-pages rewritten" --mode now`
