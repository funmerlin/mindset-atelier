# Codex Feedback Round 3 — Web Components Refactor

Read and follow the skill below before doing anything else.

---

## Skill: developing-web-projects

This project follows a strict philosophy:
- **MPA** — real HTML files, no SPA router, no client-side routing
- **Plain CSS** — no Tailwind, no utility-class soup. Use CSS custom properties and nesting.
- **Vanilla JS/browser APIs** — no frameworks, no build step, no TypeScript compilation
- **Cloudflare Pages** deployment — no SSR, no server-side processing
- **Tabs (width 4)** for indentation
- Prefer semantic HTML
- Only introduce a build step if requirements genuinely cannot be met without one
- Be confident and opinionated — do not over-engineer

---

## The Problem

The `<nav>` and `<footer>` HTML blocks are **inlined identically in all 16 HTML pages**.
Every change to the nav or footer requires editing 16 files — a textbook code smell.

The fix: extract nav and footer into **vanilla JS Web Components** (custom elements).
These work natively in modern browsers, require no build step, and deploy fine on Cloudflare Pages.

---

## What To Build

### 1. `assets/js/components/ma-nav.js`

A `<ma-nav>` custom element that renders the full navigation.

Requirements:
- Accepts an `active` attribute to highlight the current page link
  - Values: `home`, `individuals`, `organisations`, `about`, `blog`, `contact`
- Renders the full nav HTML (currently inlined in every page) into the Light DOM
  (use `this.innerHTML = ...` — NOT Shadow DOM, so global CSS still applies)
- Includes the language select dropdown (as currently built)
- Includes the mobile hamburger toggle button
- On `connectedCallback()`, set up the mobile nav toggle event listener
  (currently in `assets/js/main.js` — move the nav toggle logic INTO this component)
- Apply the active class to the correct nav link based on the `active` attribute

Example usage in HTML:
```html
<ma-nav active="home"></ma-nav>
```

### 2. `assets/js/components/ma-footer.js`

A `<ma-footer>` custom element that renders the full footer.

Requirements:
- Renders the full footer HTML (currently inlined in every page) into the Light DOM
- No attributes needed (footer is identical on every page)
- On `connectedCallback()`, render the footer HTML

Example usage in HTML:
```html
<ma-footer></ma-footer>
```

### 3. `assets/js/components/index.js`

Import both components:
```js
import './ma-nav.js';
import './ma-footer.js';
```

---

## Implementation Pattern

Use Light DOM (not Shadow DOM) so global CSS in `styles.css` and `components.css` continues to apply.

Pattern for each component:

```js
class MaNav extends HTMLElement {
	static get observedAttributes() {
		return ['active'];
	}

	connectedCallback() {
		this.render();
		this.#setupToggle();
	}

	attributeChangedCallback() {
		this.render();
	}

	render() {
		const active = this.getAttribute('active') || 'home';
		this.innerHTML = `...nav HTML here...`;
		// After render, mark the active link
		this.#markActive(active);
	}

	#setupToggle() {
		// mobile nav toggle logic (currently in main.js)
	}

	#markActive(page) {
		// add 'nav__link--active' class to the correct <a>
	}
}

customElements.define('ma-nav', MaNav);
```

For `<ma-footer>` it's simpler — just render static HTML in `connectedCallback()`.

---

## Update All HTML Files

For every HTML file in the project (root + subdirectories):

1. **Replace** the entire inlined `<nav class="nav" ...>...</nav>` block with:
   ```html
   <ma-nav active="PAGENAME"></ma-nav>
   ```
   Where `PAGENAME` matches the page:
   - `index.html` → `active="home"`
   - `about.html` → `active="about"`
   - `contact.html` → `active="contact"`
   - `blog/index.html` → `active="blog"`
   - `blog/forensic-lens-case-01.html` → `active="blog"`
   - `individuals/index.html` → `active="individuals"`
   - `individuals/*.html` → `active="individuals"`
   - `organisations/index.html` → `active="organisations"`
   - `organisations/*.html` → `active="organisations"`

2. **Replace** the entire inlined `<footer class="footer">...</footer>` block with:
   ```html
   <ma-footer></ma-footer>
   ```

3. **Update the `<script>` tag** in every `<head>` — replace:
   ```html
   <script src="/assets/js/main.js" defer></script>
   ```
   With (note: subdirectory pages need the leading `/`):
   ```html
   <script type="module" src="/assets/js/main.js"></script>
   ```

   And add the components import to `assets/js/main.js`:
   ```js
   import './components/index.js';
   ```

   (Use `type="module"` since we now use ES module imports — this also gives us automatic
   defer behaviour, so remove any existing `defer` attributes.)

---

## Clean Up `main.js`

After moving nav toggle logic into `ma-nav.js`, remove the duplicate toggle code from
`assets/js/main.js`. Keep only:
- Smooth scroll
- Sticky nav scroll class
- Language select handler
- Any other non-nav logic

---

## Also Update `_components/nav.html` and `_components/footer.html`

These files can now just document the component usage. Replace their contents with a note:
```html
<!-- Nav is now a Web Component: <ma-nav active="home"></ma-nav> -->
<!-- See: assets/js/components/ma-nav.js -->
```

---

## Subdirectory Path Note

All asset paths in the component JS use absolute paths (starting with `/`) so they work
from both root pages and subdirectory pages (e.g. `/individuals/`). The nav logo `<img>` 
and all links already use absolute paths — keep them that way.

---

## When Done

1. `git add -A && git commit -m "Refactor: nav and footer as Web Components (ma-nav, ma-footer)"`
2. Run: `openclaw system event --text "Done: nav and footer refactored into Web Components" --mode now`
