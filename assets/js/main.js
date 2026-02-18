import './components/index.js';

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
	if (nav) {
		nav.classList.toggle('scrolled', window.scrollY > 80);
	}
});

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
