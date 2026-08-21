// =========================================
// script.js — Dynamic Template Engine v2
// =========================================

document.addEventListener('DOMContentLoaded', () => {

    // ── Loading Screen ──
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('hidden'), 2000);
    });
    // Fallback: hide loader after 3.5s even if images still loading
    setTimeout(() => loader.classList.add('hidden'), 3500);

    // Guard: check if data exists
    if (typeof siteData === 'undefined') return;
    const d = siteData;

    // ── 1. Brand Info ──
    document.getElementById('site-title').textContent = `${d.brand.name} | Top Tour Operator`;
    document.getElementById('brand-name-nav').textContent = d.brand.name;
    document.getElementById('footer-brand-name').textContent = d.brand.name;
    document.getElementById('footer-copyright-name').textContent = d.brand.fullName;
    document.getElementById('footer-tagline').textContent = d.brand.tagline;
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('contact-address').textContent = d.brand.address;
    if (d.brand.phone) {
        document.getElementById('contact-phone').textContent = d.brand.displayPhone;
        document.getElementById('contact-phone-link').href = `tel:${d.brand.phone}`;
        document.getElementById('hero-phone-text').textContent = d.brand.displayPhone;
        document.getElementById('hero-phone-btn').href = `tel:${d.brand.phone}`;
        const waBtn = document.getElementById('whatsapp-btn');
        if(waBtn) waBtn.href = `https://wa.me/91${d.brand.phone}`;
    } else {
        const contactPhoneEl = document.getElementById('contact-phone');
        if (contactPhoneEl) contactPhoneEl.closest('.info-item').style.display = 'none';
        
        const heroPhoneBtn = document.getElementById('hero-phone-btn');
        if (heroPhoneBtn) heroPhoneBtn.style.display = 'none';
        
        const whatsappBtn = document.getElementById('whatsapp-btn');
        if (whatsappBtn) whatsappBtn.style.display = 'none';
    }

    document.getElementById('contact-email').textContent = d.brand.email;
    document.getElementById('contact-email-link').href = `mailto:${d.brand.email}`;
    // Google Map
    const mapIframe = document.getElementById('google-map');
    if (mapIframe && d.brand.mapEmbed) {
        mapIframe.src = d.brand.mapEmbed;
    }

    // ── 2. Hero Slideshow ──
    const heroSlideshow = document.getElementById('heroSlideshow');
    const heroDots = document.getElementById('heroDots');
    const heroHeading = document.getElementById('hero-heading');
    const heroTagline = document.getElementById('hero-tagline');
    let currentSlide = 0;
    let slideInterval;

    if (heroSlideshow && d.brand.heroImages) {
        // Create slide divs
        d.brand.heroImages.forEach((img, i) => {
            const slide = document.createElement('div');
            slide.className = `hero-slide ${i === 0 ? 'active' : ''}`;
            slide.style.backgroundImage = `url('${img}')`;
            heroSlideshow.appendChild(slide);

            // Create dots
            const dot = document.createElement('button');
            dot.className = `hero-dot ${i === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', () => goToSlide(i));
            heroDots.appendChild(dot);
        });

        // Set initial text
        if (d.brand.heroSlides && d.brand.heroSlides[0]) {
            heroHeading.textContent = d.brand.heroSlides[0].heading;
            heroTagline.textContent = d.brand.heroSlides[0].sub;
        }

        // Start auto-slide
        slideInterval = setInterval(() => goToSlide((currentSlide + 1) % d.brand.heroImages.length), 5000);
    }

    function goToSlide(index) {
        const slides = heroSlideshow.querySelectorAll('.hero-slide');
        const dots = heroDots.querySelectorAll('.hero-dot');
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // Update text with fade
        if (d.brand.heroSlides && d.brand.heroSlides[currentSlide]) {
            heroHeading.style.opacity = '0';
            heroTagline.style.opacity = '0';
            setTimeout(() => {
                heroHeading.textContent = d.brand.heroSlides[currentSlide].heading;
                heroTagline.textContent = d.brand.heroSlides[currentSlide].sub;
                heroHeading.style.opacity = '1';
                heroTagline.style.opacity = '1';
            }, 350);
        }

        // Reset timer
        clearInterval(slideInterval);
        slideInterval = setInterval(() => goToSlide((currentSlide + 1) % d.brand.heroImages.length), 5000);
    }

    // ── 3. Packages ──
    const pkgContainer = document.getElementById('packages-container');
    const pkgSelect = document.getElementById('packageSelect');

    if (pkgContainer && d.packages) {
        let html = '';
        d.packages.forEach(pkg => {
            // Dropdown option
            const opt = document.createElement('option');
            opt.value = pkg.title;
            opt.textContent = pkg.title;
            if (pkgSelect) pkgSelect.appendChild(opt);

            const inclusions = pkg.inclusions.map(inc =>
                `<li><i class="ph-fill ph-check-circle"></i> ${inc}</li>`
            ).join('');

            html += `
                <div class="package-card animate-on-scroll ${pkg.popular ? 'popular' : ''}">
                    ${pkg.popular ? '<div class="popular-tag">Most Popular</div>' : ''}
                    <div class="package-header">
                        <span class="package-duration">${pkg.duration}</span>
                        <h3>${pkg.title}</h3>
                        <div class="package-price">
                            <span class="amount">${pkg.price}</span>
                            <span class="unit"> / ${pkg.unit}</span>
                        </div>
                    </div>
                    <div class="package-body">
                        <p class="package-desc">${pkg.description}</p>
                        <ul class="package-inclusions">${inclusions}</ul>
                    </div>
                    <div class="package-footer">
                        <a href="#contact" class="btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} btn-block" onclick="selectPackage('${pkg.title}')">
                            Book This Package
                        </a>
                    </div>
                </div>
            `;
        });
        pkgContainer.innerHTML = html;
    }

    // ── 4. Tourist Places ──
    const placesContainer = document.getElementById('places-container');
    if (placesContainer && d.places) {
        let html = '';
        d.places.forEach((place) => {
            html += `
                <div class="place-card animate-on-scroll" data-img="${place.image}" data-caption="${place.name}">
                    <img src="${place.image}" alt="${place.name}" loading="lazy">
                    <div class="place-info">
                        <h4>${place.name}</h4>
                        <p>${place.desc}</p>
                    </div>
                </div>
            `;
        });
        placesContainer.innerHTML = html;
    }

    // ── 5. How to Reach ──
    const reachContainer = document.getElementById('reach-container');
    if (reachContainer && d.howToReach) {
        let html = '';
        d.howToReach.forEach(item => {
            html += `
                <div class="reach-card animate-on-scroll">
                    <div class="reach-icon"><i class="${item.icon}"></i></div>
                    <h3>${item.mode}</h3>
                    <p>${item.details}</p>
                </div>
            `;
        });
        reachContainer.innerHTML = html;
    }

    // ── 6. Testimonials ──
    const reviewsContainer = document.getElementById('reviews-container');
    if (reviewsContainer && d.testimonials) {
        let html = '';
        d.testimonials.forEach(t => {
            const stars = Array.from({ length: 5 }, (_, i) =>
                `<i class="ph-fill ph-star" style="opacity:${i < t.rating ? '1' : '0.25'}"></i>`
            ).join('');
            const initials = t.name.split(' ').map(w => w[0]).join('');

            html += `
                <div class="review-card">
                    <div class="review-stars">${stars}</div>
                    <p class="review-text">"${t.text}"</p>
                    <div class="review-author">
                        <div class="review-avatar">${initials}</div>
                        <div class="review-meta">
                            <h4>${t.name}</h4>
                            <span>${t.date}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        reviewsContainer.innerHTML = html;
    }

    // Reviews slider navigation
    const reviewTrack = document.getElementById('reviews-container');
    const prevBtn = document.getElementById('reviewPrev');
    const nextBtn = document.getElementById('reviewNext');
    let reviewIndex = 0;

    function updateReviewSlider() {
        if (!reviewTrack) return;
        const cards = reviewTrack.querySelectorAll('.review-card');
        if (!cards.length) return;
        const cardWidth = cards[0].offsetWidth + 24; // gap
        reviewTrack.style.transform = `translateX(-${reviewIndex * cardWidth}px)`;
    }

    if (prevBtn) prevBtn.addEventListener('click', () => {
        if (reviewIndex > 0) { reviewIndex--; updateReviewSlider(); }
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
        const cards = reviewTrack.querySelectorAll('.review-card');
        const visibleCards = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
        if (reviewIndex < cards.length - visibleCards) { reviewIndex++; updateReviewSlider(); }
    });

    // ── 7. FAQs ──
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer && d.faqs) {
        let html = '';
        d.faqs.forEach(faq => {
            html += `
                <div class="faq-item animate-on-scroll">
                    <div class="faq-question">
                        <h4>${faq.question}</h4>
                        <i class="ph ph-caret-down"></i>
                    </div>
                    <div class="faq-answer"><p>${faq.answer}</p></div>
                </div>
            `;
        });
        faqContainer.innerHTML = html;

        faqContainer.querySelectorAll('.faq-question').forEach(q => {
            q.addEventListener('click', () => {
                const item = q.parentElement;
                // Close other open FAQs
                faqContainer.querySelectorAll('.faq-item.active').forEach(open => {
                    if (open !== item) open.classList.remove('active');
                });
                item.classList.toggle('active');
            });
        });
    }

    // ═══════════════════════════════
    // UI INTERACTIONS
    // ═══════════════════════════════

    // ── Navbar Scroll ──
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ── Mobile Menu ──
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('ph-list');
            icon.classList.toggle('ph-x');
        });
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('ph-list');
                icon.classList.remove('ph-x');
            });
        });
    }

    // ── Smooth Scroll ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            if (id === '#') return;
            const el = document.querySelector(id);
            if (el) {
                const offset = 80;
                const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });

    // ── Scroll Animations (Intersection Observer) ──
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger the animations slightly
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    animatedElements.forEach(el => observer.observe(el));

    // ── Counter Animation ──
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.dataset.target);
                const isDecimal = target % 1 !== 0;
                const duration = 2000;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = eased * target;

                    counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = isDecimal ? target.toFixed(1) : target;
                    }
                }
                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    // ── Back to Top ──
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 600);
    });
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── Lightbox ──
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    // Attach click to place cards (after they are rendered)
    setTimeout(() => {
        document.querySelectorAll('.place-card').forEach(card => {
            card.addEventListener('click', () => {
                const imgSrc = card.dataset.img;
                const caption = card.dataset.caption;
                if (lightbox && imgSrc) {
                    lightboxImg.src = imgSrc;
                    lightboxCaption.textContent = caption || '';
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
    }, 100);

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // ── Form Submission ──
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('userphone').value;
            const pkg = document.getElementById('packageSelect').value;

            const btn = document.getElementById('submitBtn');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="ph ph-spinner"></i> Sending...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            setTimeout(() => {
                alert(`Thank you, ${name}! Your enquiry for "${pkg}" has been received. We will contact you at ${phone} within 2 hours.`);
                enquiryForm.reset();
                btn.innerHTML = originalHTML;
                btn.disabled = false;
                btn.style.opacity = '1';
            }, 1800);
        });
    }
});

// Global: pre-select package from package cards
window.selectPackage = function (pkgName) {
    const select = document.getElementById('packageSelect');
    if (select) select.value = pkgName;
};
