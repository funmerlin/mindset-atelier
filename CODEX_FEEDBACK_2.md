# Codex Feedback Round 2

Three targeted fixes. Work through them in order.
All `<nav>` blocks are inlined in every HTML file — update ALL of them consistently.

---

## 1. Nav: Logo — Hide Text, Make Image Bigger

**Problem:** The nav logo renders a tiny image PLUS visible "Mindset Atelier" text beside it,
which wraps to two lines and crowds the nav. The image is only ~43px tall (way too small).
The text is already baked into the logo image — it doesn't need to appear as a separate element.

**Fix A — HTML (in every nav, all HTML files):**

Current:
```html
<a class="nav__logo" href="/">
	<img src="/assets/images/logo.png" alt="Mindset Atelier logo" width="2203" height="714">
	<span>Mindset Atelier</span>
</a>
```

Replace with (add `sr-only` class to the span):
```html
<a class="nav__logo" href="/">
	<img src="/assets/images/logo.png" alt="Mindset Atelier">
	<span class="sr-only">Mindset Atelier</span>
</a>
```

**Fix B — CSS in `assets/css/components.css`:**

Replace the `.nav__logo img` rule:
```css
/* BEFORE */
.nav__logo img {
	width: 132px;
	height: auto;
}
```
With (use height to drive the size, let width scale naturally):
```css
.nav__logo img {
	height: 52px;
	width: auto;
}
```

Also add the `sr-only` utility in `assets/css/styles.css` (near the bottom, in utilities):
```css
.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
}
```

Also remove `font-family`, `font-size`, and `color` from `.nav__logo` in components.css
since the text will be hidden — they're no longer needed.

---

## 2. Nav: Language Toggle → Styled Select Dropdown

**Problem:** The two-button flag toggle is visually messy, partially shows the Austrian option,
and isn't scalable (Dutch is coming soon). Replace with a clean native `<select>` dropdown.

**Fix A — HTML (in every nav, all HTML files):**

Current:
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

Replace with:
```html
<div class="lang-select">
	<select class="lang-select__control" aria-label="Select language" id="lang-select">
		<option value="en" selected>🇬🇧 EN</option>
		<option value="de">🇦🇹 DE</option>
		<option value="nl" disabled>🇳🇱 NL</option>
	</select>
</div>
```

**Fix B — CSS:** Remove ALL the old `.lang-toggle`, `.lang-toggle__btn`, `.lang-toggle__flag`,
`.lang-toggle__label` rules from `assets/css/styles.css`. Replace with:

```css
/* Language select */
.lang-select {
	position: relative;
}

.lang-select__control {
	appearance: none;
	-webkit-appearance: none;
	background: transparent;
	border: 1px solid var(--color-sage);
	border-radius: 4px;
	padding: 0.3rem 1.8rem 0.3rem 0.6rem;
	font-family: var(--font-sans);
	font-size: 0.8rem;
	font-weight: 500;
	color: var(--color-dark);
	cursor: pointer;
	line-height: 1.4;
	/* Arrow */
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%237B9E97'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: right 0.5rem center;
	background-size: 8px;
}

.lang-select__control:focus {
	outline: 2px solid var(--color-sage);
	outline-offset: 2px;
}
```

**Fix C — JS:** Remove the old `lang-toggle` JS if any in `assets/js/main.js`.
Add a no-op handler that just logs the selection for now (no actual translation):
```js
const langSelect = document.getElementById('lang-select');
if (langSelect) {
	langSelect.addEventListener('change', (e) => {
		// Language switching not yet implemented — placeholder
		console.log('Language selected:', e.target.value);
	});
}
```

---

## 3. Form Labels: Tighten the Label-to-Input Spacing

**Problem:** The previous round added `margin-top: 1rem` on labels, which makes them float
far above their fields. The label should sit close to its OWN input, with breathing room
coming from the BOTTOM of the previous input, not the top of the label.

**Fix — CSS in `assets/css/components.css`:**

Replace the existing label rules inside `.form--dark`:
```css
/* BEFORE */
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

Replace with a form-group pattern. Wrap each label+input pair in `<div class="form-group">`:

**HTML change (index.html homepage contact section + contact.html):**
Each label+input pair should be wrapped like:
```html
<div class="form-group">
	<label for="h-name">Name</label>
	<input id="h-name" type="text" name="name" required>
</div>
<div class="form-group">
	<label for="h-email">Email</label>
	<input id="h-email" type="email" name="email" required>
</div>
<div class="form-group">
	<label for="h-msg">Message</label>
	<textarea id="h-msg" name="message" required></textarea>
</div>
```

Apply same wrapping to ALL form fields in: `index.html`, `contact.html`

**CSS change — replace old label rules with:**
```css
.form-group {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	margin-bottom: 0.9rem;
}

.form-group:last-of-type {
	margin-bottom: 0;
}

.form--dark label {
	display: block;
	font-size: 0.75rem;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.75);
}

/* Remove the old margin-top rules — spacing comes from .form-group margin-bottom now */
```

Also update the light-background form variant on contact.html if labels are used there too.

---

## After All Changes

1. Run `git add -A && git commit -m "Fix: nav logo size, language dropdown, form label spacing"`
2. Verify server is running at http://localhost:3456 and check visually
