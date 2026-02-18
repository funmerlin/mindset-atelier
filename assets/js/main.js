const nav = document.querySelector('.nav');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

window.addEventListener('scroll', () => {
	if (nav) {
		nav.classList.toggle('scrolled', window.scrollY > 80);
	}
});

if (navToggle && navMenu) {
	navToggle.addEventListener('click', () => {
		const isOpen = navMenu.classList.toggle('is-open');
		navToggle.setAttribute('aria-expanded', String(isOpen));
	});
}

const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		const targetId = link.getAttribute('href');
		if (!targetId || targetId === '#') return;
		const target = document.querySelector(targetId);
		if (target) {
			event.preventDefault();
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
});

const langSelect = document.getElementById('lang-select');
if (langSelect) {
	langSelect.addEventListener('change', (event) => {
		// Language switching not yet implemented — placeholder
		console.log('Language selected:', event.target.value);
	});
}
