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
const lightboxImage = lightbox?.querySelector('.space-lightbox-image');
const lightboxClose = lightbox?.querySelector('.space-lightbox-close');
const galleryButtons = document.querySelectorAll('.space-gallery-button');
let lastFocusedElement = null;

if (lightbox && lightboxImage && lightboxClose && galleryButtons.length) {
  const closeLightbox = () => {
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.removeAttribute('src');
    document.body.style.overflow = '';
    lastFocusedElement?.focus();
  };
  const openLightbox = (button) => {
    const src = button.dataset.lightboxSrc;
    const alt = button.dataset.lightboxAlt || '';
    if (!src) return;
    lastFocusedElement = button;
    lightboxImage.src = src;
    lightboxImage.alt = alt;
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
whatsappFloat.href = ['https://wa.me/', '5551997803232'].join('');
whatsappFloat.target = '_blank';
whatsappFloat.rel = 'noopener noreferrer';
whatsappFloat.setAttribute('aria-label', 'Falar com a PsicoIncluir pelo WhatsApp');
whatsappFloat.innerHTML = '<span aria-hidden="true">◔</span><span>WhatsApp</span>';
document.body.appendChild(whatsappFloat);
