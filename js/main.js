/* =====================================================
   SHIV AUTOMOBILES – Main JS
   Features: lang toggle, render services/reviews/FAQs,
   scroll-reveal, header scroll, book form → WhatsApp,
   lightbox, car animation on scroll
   ===================================================== */

'use strict';

/* ─── LANGUAGE ─────────────────────────────────────── */
let currentLang = localStorage.getItem('sa_lang') || 'mr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('sa_lang', lang);
  document.documentElement.lang = lang;

  // Update all elements with data-mr / data-en / data-hi
  document.querySelectorAll('[data-mr]').forEach(el => {
    const val = el.getAttribute('data-' + lang) || el.getAttribute('data-mr');
    if (val) el.innerHTML = val;
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-render dynamic content
  renderServices();
  renderReviews();
  renderFAQs();
}

document.getElementById('langToggle').addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (btn) setLang(btn.dataset.lang);
});

/* ─── SERVICES RENDER ──────────────────────────────── */
function waLink(service) {
  const svcName = service['mr'] || service['en'];
  const text = encodeURIComponent(
    `Hello Shiv Automobiles, I need help with my car – ${svcName}`
  );
  return `https://wa.me/919834328635?text=${text}`;
}

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map((s, i) => {
    const delay = i < 6 ? `delay-${(i % 3) + 1}` : '';
    const title = s[currentLang] || s.mr;
    const desc  = s[`desc${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`] || s.descMr;
    const enquireLabel = { mr: 'WhatsApp चौकशी', en: 'WhatsApp Enquiry', hi: 'WhatsApp पूछताछ' }[currentLang];
    const detailsLabel = { mr: 'सविस्तर माहिती →', en: 'View Details →', hi: 'विस्तृत जानकारी →' }[currentLang];
    
    const imgHtml = s.image ? `
      <div class="sc-img-wrap">
        <img src="${s.image}" alt="${title} - Shiv Automobiles Naitale Niphad" loading="lazy" width="400" height="220" />
        ${s.badge ? `<span class="sc-badge">${s.badge}</span>` : ''}
      </div>` : '';

    const pageLinkHtml = s.pageUrl ? `
      <a href="${s.pageUrl}" class="sc-link" title="${title}">
        ${detailsLabel}
      </a>` : '';

    return `
      <div class="service-card ${s.image ? 'has-img' : ''} reveal-up ${delay}" style="--delay:${i * 0.05}s">
        ${imgHtml}
        <div class="sc-body">
          <div class="sc-header">
            <span class="sc-icon">${s.icon}</span>
            <h3 class="sc-title">${title}</h3>
          </div>
          <p class="sc-desc">${desc}</p>
          <div class="sc-actions">
            <a href="${waLink(s)}" class="sc-cta" target="_blank" rel="noopener"
               onclick="ga4Event('service_wa_${s.slug}')">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              ${enquireLabel}
            </a>
            ${pageLinkHtml}
          </div>
        </div>
      </div>`;
  }).join('');
  initReveal(); // re-observe new cards
}

/* ─── REVIEWS RENDER ───────────────────────────────── */
function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;
  grid.innerHTML = REVIEWS.map((r, i) => {
    const text = r[`text${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`] || r.textMr;
    return `
      <div class="review-card reveal-up delay-${(i % 3) + 1}">
        <div class="review-top">
          <div class="review-stars">★★★★★</div>
          <span class="review-badge">✓ ${r.source || 'Verified'}</span>
        </div>
        <div class="review-text">"${text}"</div>
        <div class="review-meta">
          <strong>${r.name}</strong> ${r.location ? `· 📍 ${r.location}` : ''} · <span>${r.date}</span>
        </div>
      </div>`;
  }).join('');
  initReveal();
}

/* ─── FAQS RENDER ───────────────────────────────────── */
function renderFAQs() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = FAQS.map((f, i) => {
    const q = currentLang === 'mr' ? f.qMr : f.qEn;
    const a = currentLang === 'mr' ? f.aMr : f.aEn;
    return `
      <div class="faq-item reveal-up delay-${(i % 3) + 1}" id="faq-${i}">
        <div class="faq-q" onclick="toggleFaq(${i})" role="button" aria-expanded="false" tabindex="0">
          <span>${q}</span>
          <span class="faq-arrow">▾</span>
        </div>
        <div class="faq-a" id="faq-a-${i}"><p>${a}</p></div>
      </div>`;
  }).join('');
  initReveal();
}

function toggleFaq(index) {
  const item = document.getElementById(`faq-${index}`);
  const wasOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });
  if (!wasOpen) {
    item.classList.add('open');
    item.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
  }
}
// Keyboard support
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.classList.contains('faq-q')) {
    e.target.click();
  }
});

/* ─── SCROLL REVEAL ────────────────────────────────── */
let revealObserver;

function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-up').forEach(el => el.classList.add('visible'));
    return;
  }
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-up:not(.visible)').forEach(el => {
    revealObserver.observe(el);
  });
}

/* ─── HEADER SCROLL EFFECT ─────────────────────────── */
const header = document.getElementById('siteHeader');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const s = window.scrollY;
  if (s > 60) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
  lastScroll = s;
  animateCar(); // also update car position
}, { passive: true });

/* ─── CAR ANIMATION ON SCROLL ──────────────────────── */
function animateCar() {
  const section = document.getElementById('how-it-works');
  const car     = document.getElementById('hiwCar');
  if (!section || !car) return;

  const rect = section.getBoundingClientRect();
  const wh   = window.innerHeight;
  // progress 0→1 as section scrolls into view
  const progress = Math.min(1, Math.max(0, 1 - (rect.top - wh * 0.3) / (wh * 0.7)));
  const trackW   = section.offsetWidth + 80;
  car.style.left = `${-80 + progress * trackW}px`;
}

/* ─── BOOK FORM → WHATSAPP ─────────────────────────── */
function submitBookForm(e) {
  e.preventDefault();
  const form    = document.getElementById('bookForm');
  const name    = form.querySelector('#f-name').value.trim();
  const phone   = form.querySelector('#f-phone').value.trim();
  const car     = form.querySelector('#f-car').value.trim();
  const problem = form.querySelector('#f-problem').value.trim();
  const pickup  = form.querySelector('input[name="pickup"]:checked').value;

  const msg = `Hello Shiv Automobiles!

नाव / Name: ${name}
फोन / Phone: ${phone}
कार मॉडेल / Car Model: ${car}
समस्या / Problem: ${problem}
पिकअप &amp; ड्रॉप: ${pickup}

मला सेवा बुक करायची आहे. कृपया संपर्क करा.`;

  const url = `https://wa.me/919834328635?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener');
}

/* ─── LIGHTBOX ─────────────────────────────────────── */
const galleryImages = [
  { src: 'images/car-wash-hero.webp', alt: 'Car washing and snow foam wash at Shiv Automobiles Naitale Niphad' },
  { src: 'images/gallery-1.webp', alt: 'Maruti Suzuki Swift Dzire service at Shiv Automobiles workshop' },
  { src: 'images/gallery-2.webp', alt: 'Car AC repair and compressor testing service' },
  { src: 'images/gallery-3.webp', alt: 'Denting and painting work with computerized color matching' },
  { src: 'images/gallery-4.webp', alt: 'Wheel alignment and tyre service' },
  { src: 'images/gallery-5.webp', alt: 'Clutch and gearbox repair' },
  { src: 'images/gallery-6.webp', alt: 'Suspension and brake service' },
  { src: 'images/car-wash-detail.webp', alt: 'Interior deep vacuum and detailing service' },
  { src: 'images/gallery-7.webp', alt: 'Hyundai Creta periodic maintenance at Shiv Automobiles' },
  { src: 'images/gallery-8.webp', alt: 'Maruti Suzuki Swift complete health checkup' }
];
let lbIndex = 0;

function openLightbox(index) {
  lbIndex = index;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lbImg');
  img.src = galleryImages[index].src;
  img.alt = galleryImages[index].alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lbNav(dir) {
  lbIndex = (lbIndex + dir + galleryImages.length) % galleryImages.length;
  openLightbox(lbIndex);
}

// Close lightbox on backdrop click
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});

// Keyboard nav
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowRight')  lbNav(1);
  if (e.key === 'ArrowLeft')   lbNav(-1);
});

/* ─── INIT ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang); // renders everything
  initReveal();
  animateCar();
});
