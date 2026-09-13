const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
const menuLabel = menuToggle?.querySelector('.sr-only');

if (menuToggle && navigation) {
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (menuLabel) menuLabel.textContent = 'Abrir menu';
  };
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    if (menuLabel) menuLabel.textContent = isOpen ? 'Fechar menu' : 'Abrir menu';
  });
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { closeMenu(); menuToggle.focus(); }
  });
}

const lightbox = document.querySelector('.space-lightbox');
const lightboxDialog = lightbox?.querySelector('.space-lightbox-dialog');
const lightboxImage = lightbox?.querySelector('.space-lightbox-image');
const lightboxClose = lightbox?.querySelector('.space-lightbox-close');
const galleryButtons = document.querySelectorAll('.space-gallery-button');
let lastFocusedElement = null;

if (lightbox && lightboxDialog && lightboxImage && lightboxClose && galleryButtons.length) {
  const closeLightbox = () => {
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxDialog.classList.remove('is-loading');
    lightboxImage.removeAttribute('src');
    document.body.style.overflow = '';
    lastFocusedElement?.focus();
  };
  const openLightbox = (button) => {
    const src = button.dataset.lightboxSrc;
    const alt = button.dataset.lightboxAlt || '';
    if (!src) return;
    lastFocusedElement = button;
    lightboxDialog.classList.add('is-loading');
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightboxImage.onload = () => lightboxDialog.classList.remove('is-loading');
    lightboxImage.onerror = () => lightboxDialog.classList.remove('is-loading');
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  };
  galleryButtons.forEach((button) => button.addEventListener('click', () => openLightbox(button)));
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
}

const whatsappFloat = document.createElement('a');
whatsappFloat.className = 'whatsapp-float';
whatsappFloat.href = 'https://wa.me/5551997803232';
whatsappFloat.target = '_blank';
whatsappFloat.rel = 'noopener noreferrer';
whatsappFloat.setAttribute('aria-label', 'Falar com a PsicoIncluir pelo WhatsApp');
whatsappFloat.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.5 3.5A11.84 11.84 0 0 0 12.05 0C5.53 0 .22 5.31.22 11.83c0 2.08.54 4.1 1.57 5.88L.12 24l6.43-1.63a11.8 11.8 0 0 0 5.5 1.4h.01c6.52 0 11.82-5.31 11.82-11.83 0-3.16-1.23-6.13-3.38-8.44ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.81.97 1.02-3.71-.23-.38a9.87 9.87 0 1 1 8.41 4.71Zm5.42-7.39c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.65-.94-2.26-.25-.59-.5-.51-.69-.52h-.59c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.54s1.08 2.95 1.23 3.15c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z"/></svg><span>WhatsApp</span>';
document.body.appendChild(whatsappFloat);

const motionTargets = document.querySelectorAll(
  '.about-content, .about-panel, .specialties-header, .specialty-card, .space-header, .space-gallery-item, .location-content, .location-map, .contact-content, .contact-card'
);

if ('IntersectionObserver' in window && motionTargets.length) {
  motionTargets.forEach((element) => element.classList.add('motion-reveal'));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  motionTargets.forEach((element) => revealObserver.observe(element));
} else {
  motionTargets.forEach((element) => element.classList.add('is-visible'));
}
