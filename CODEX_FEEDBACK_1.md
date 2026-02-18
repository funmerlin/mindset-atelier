# Codex Feedback Round 1

Fix the issues below across the entire project at `~/Projects/mindset-atelier/`.
Read `SPEC.md` for content context. Work through all changes carefully and
commit when done with `git add -A && git commit -m "Fix: nav flags, button colors, form labels, spacing, testimonials"`.

---

## 1. Nav — Language Toggle: Replace Text with Flag Buttons

**Affected files:** ALL HTML files (the `<nav>` block is inlined in every page)

**Current:**
```html
<button class="lang-toggle" type="button" aria-label="Language toggle">EN | DE</button>
```

**Fix:** Replace with a proper two-button flag toggle:
```html
<div class="lang-toggle" role="group" aria-label="Language">
    <button class="lang-toggle__btn lang-toggle__btn--active" data-lang="en" aria-pressed="true">
        <span class="lang-toggle__flag">🇬🇧</span>
        <span class="lang-toggle__label">EN</span>
    </button>
    <button class="lang-toggle__btn" data-lang="de" aria-pressed="false">
        <span class="lang-toggle__flag">🇦🇹</span>
        <span class="lang-toggle__label">DE</span>
    </button>
</div>
```

**CSS** (add to `assets/css/styles.css` in the nav section):
```css
.lang-toggle {
    display: flex;
    align-items: center;
    gap: 0;
    border: 1px solid var(--color-sage);
    border-radius: 4px;
    overflow: hidden;
}

.lang-toggle__btn {
    display: flex;
    align-items: center;
    gap: 0.3em;
    padding: 0.3rem 0.6rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: var(--font-sans);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--color-dark);
    letter-spacing: 0.05em;
    transition: background 0.2s, color 0.2s;
}

.lang-toggle__btn + .lang-toggle__btn {
    border-left: 1px solid var(--color-sage);
}

.lang-toggle__btn--active {
    background: var(--color-sage);
    color: white;
}

.lang-toggle__btn:hover:not(.lang-toggle__btn--active) {
    background: var(--color-sage-light);
}

.lang-toggle__flag {
    font-size: 1rem;
    line-height: 1;
}

.lang-toggle__label {
    font-size: 0.75rem;
    font-weight: 600;
}
```

Apply this change to ALL 16 HTML files.

---

## 2. Button Colors on Coral Sections — Fix Green-on-Pink

**Problem:** `btn-outline` uses sage green (`#7B9E97`) border + text. On a coral (`#C97272`) background,
green-on-pink looks awful. This affects the "Request Callback" button on `index.html` and
any other `btn-outline` or `btn-primary` inside `.section--coral`.

**Fix — CSS in `assets/css/styles.css`** (add after existing `.hero .btn-outline` rules):
```css
/* Button overrides inside coral sections */
.section--coral .btn-outline {
    border-color: rgba(255, 255, 255, 0.8);
    color: white;
}
.section--coral .btn-outline:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: white;
    color: white;
}

.section--coral .btn-primary {
    background: white;
    color: var(--color-coral);
    border-color: white;
}
.section--coral .btn-primary:hover {
    background: var(--color-warm-white);
    border-color: var(--color-warm-white);
}
```

Also change the "Request Callback" button in `index.html` from `btn-outline` to `btn btn-outline`
(it already has that class, the CSS fix above will handle it).

For `contact.html` — the "CALL ME" button on the coral section should also be consistent.
Check and apply if needed.

---

## 3. Homepage Contact Form — Use Label + Input (not placeholder-only)

**Problem:** The homepage contact section uses `placeholder` text only in inputs.
When the h2 headline is large and flows close to the form fields, it looks like the heading
is dropping into the input boxes. The `contact.html` page correctly uses `<label>` + `<input>`.

**Affected file:** `index.html` — the `.section--coral` contact section (two-column form area)

**Current (message form):**
```html
<input type="text" name="name" placeholder="Your name" required>
<input type="email" name="email" placeholder="Email address" required>
<textarea name="message" placeholder="Your message" required></textarea>
```

**Fix:** Add proper labels above each field (same pattern as contact.html):
```html
<label for="h-name">Name</label>
<input id="h-name" type="text" name="name" required>
<label for="h-email">Email</label>
<input id="h-email" type="email" name="email" required>
<label for="h-msg">Message</label>
<textarea id="h-msg" name="message" required></textarea>
```

Do the same for the callback form:
```html
<label for="h-cname">Name</label>
<input id="h-cname" type="text" name="name" required>
<div class="grid" style="grid-template-columns: 120px 1fr; gap: 1rem;">
    <div>
        <label for="h-code">Country</label>
        <select id="h-code" name="country">
            <option>+43</option>
            <option>+49</option>
            <option>+41</option>
            <option>+44</option>
            <option>+31</option>
        </select>
    </div>
    <div>
        <label for="h-phone">Phone</label>
        <input id="h-phone" type="tel" name="phone" required>
    </div>
</div>
```

Also: in `assets/css/styles.css`, make sure `form--dark label` is styled:
```css
.form--dark label {
    display: block;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 0.3rem;
    margin-top: 1rem;
}
.form--dark label:first-child {
    margin-top: 0;
}
```

Also increase the bottom margin between the h2 and the form:
```css
.section--coral .form {
    margin-top: 1.5rem;
}
```

---

## 4. Vertical Spacing — More Breathing Room Throughout

The overall site feels cramped. Apply the following fixes:

### 4a. Increase section vertical padding
In `assets/css/styles.css`, find and update the base `.section` padding:
```css
.section {
    padding: 7rem 0;  /* was 4rem or 5rem — increase it */
}
```

If there are already specific overrides like `.hero`, `.section--band`, `.section--testimonial`,
keep those as-is; only increase the base `.section` padding.

### 4b. Section headings — add bottom margin breathing room
```css
.section__header {
    margin-bottom: 3.5rem;
}
```

### 4c. Cards — increase internal padding
```css
.card {
    padding: 2rem;  /* increase from whatever it is now */
}
```

### 4d. Hero section — ensure bottom padding is generous
```css
.hero {
    padding-bottom: 8rem;
}
```

### 4e. Page hero sections (inner pages like contact, about, individuals hub)
```css
.page-hero {
    padding: 8rem 0 5rem;
    min-height: 280px;
}
```

### 4f. Add spacing between the contact section h2 and the following form
```css
.section--coral h2 {
    margin-bottom: 2rem;
}
```

---

## 5. Testimonials — Use Real Attribution

**Current:** `— satisfied client` (anonymous placeholder)

**Fix:** Replace all instances of `— satisfied client` with the real name from the Wix site:

```
— Anna U.
```

This applies in:
- `index.html` (testimonial section)
- `individuals/index.html` (testimonial section)
- Any other pages with this attribution

Do **NOT** invent additional fake client names. If you need multiple testimonials
for a carousel or grid, use "— Anna U." for the first one and leave the others
clearly marked as `<!-- TODO: insert real testimonial here -->` placeholder comments.

---

## 6. Nav Visual Polish — General

While updating nav in all files, also apply these improvements:
- Ensure nav links have comfortable padding and don't feel compressed
- On mobile (≤768px), the language toggle should still be visible in the menu
- The `.nav__cta` ("Free Clarity Session") button should stand out — keep it as primary styled with good padding

In `assets/css/styles.css`:
```css
.nav__links a {
    padding: 0.4rem 0.5rem;
    font-size: 0.9rem;
    letter-spacing: 0.03em;
}
```

---

## Summary of files to touch

- `assets/css/styles.css` — sections 1 (lang-toggle), 2 (btn coral overrides), 3 (form label styles), 4 (spacing), 6 (nav)
- `index.html` — sections 1, 3, 4, 5
- `contact.html` — sections 1, 2
- `about.html` — section 1
- `individuals/index.html` — sections 1, 5
- `individuals/*.html` (all 4) — section 1
- `organisations/index.html` — section 1
- `organisations/*.html` (all 3) — section 1
- `blog/index.html` + `blog/forensic-lens-case-01.html` — section 1

Total: ~16 HTML files + 1 CSS file.
