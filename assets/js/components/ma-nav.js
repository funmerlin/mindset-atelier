class MaNav extends HTMLElement {
	static get observedAttributes() {
		return ['active'];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback() {
		this.render();
	}

	render() {
		const active = this.getAttribute('active') || 'home';
		this.innerHTML = `
			<nav class="nav" aria-label="Primary">
				<div class="container nav__inner">
					<a class="nav__logo" href="/">
						<img src="/assets/images/logo.png" alt="Mindset Atelier">
						<span class="sr-only">Mindset Atelier</span>
					</a>
					<div class="nav__menu" data-nav-menu>
						<div class="nav__links">
							<a href="/">Home</a>
							<a href="/individuals/">For Individuals</a>
							<a href="/organisations/">For Organisations</a>
							<a href="/about.html">About</a>
							<a href="/blog/">Blog</a>
							<a href="/contact.html">Contact</a>
						</div>
						<div class="nav__meta">
							<div class="lang-select">
								<select class="lang-select__control" aria-label="Select language" id="lang-select">
									<option value="en" selected>🇬🇧 EN</option>
									<option value="de">🇦🇹 DE</option>
									<option value="nl" disabled>🇳🇱 NL</option>
								</select>
							</div>
							<a class="btn btn-primary nav__cta" href="/contact.html">Free Clarity Session</a>
						</div>
					</div>
					<button class="nav__toggle" type="button" data-nav-toggle aria-label="Toggle navigation" aria-expanded="false">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</nav>
		`;
		this.#markActive(active);
		this.#setupToggle();
	}

	#setupToggle() {
		const navToggle = this.querySelector('[data-nav-toggle]');
		const navMenu = this.querySelector('[data-nav-menu]');
		if (!navToggle || !navMenu) return;

		navToggle.addEventListener('click', () => {
			const isOpen = navMenu.classList.toggle('is-open');
			navToggle.setAttribute('aria-expanded', String(isOpen));
		});
	}

	#markActive(page) {
		const hrefMap = {
			home: '/',
			individuals: '/individuals/',
			organisations: '/organisations/',
			about: '/about.html',
			blog: '/blog/',
			contact: '/contact.html'
		};

		const href = hrefMap[page];
		if (!href) return;

		const links = this.querySelectorAll('.nav__links a');
		links.forEach((link) => {
			link.classList.toggle('nav__link--active', link.getAttribute('href') === href);
		});
	}
}

customElements.define('ma-nav', MaNav);
