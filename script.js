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
    const contactAddress = document.getElementById('contact-address');
    if (contactAddress) contactAddress.textContent = d.brand.address;

    if (d.brand.phone) {
        const contactPhone = document.getElementById('contact-phone');
        if (contactPhone) contactPhone.textContent = d.brand.displayPhone;
        const contactPhoneLink = document.getElementById('contact-phone-link');
        if (contactPhoneLink) contactPhoneLink.href = `tel:${d.brand.phone}`;
        
        const heroPhoneText = document.getElementById('hero-phone-text');
        if (heroPhoneText) heroPhoneText.textContent = d.brand.displayPhone;
        const heroPhoneBtn = document.getElementById('hero-phone-btn');
        if (heroPhoneBtn) heroPhoneBtn.href = `tel:${d.brand.phone}`;
        
        const waBtn = document.getElementById('whatsapp-btn');
        if(waBtn) waBtn.href = `https://wa.me/91${d.brand.phone}?text=Hello!`;

    } else {
        
        const heroPhoneBtn = document.getElementById('hero-phone-btn');
        if (heroPhoneBtn) heroPhoneBtn.style.display = 'none';
        
        const whatsappBtn = document.getElementById('whatsapp-btn');
        if (whatsappBtn) whatsappBtn.style.display = 'none';
    }

    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) contactEmail.textContent = d.brand.email;
    const contactEmailLink = document.getElementById('contact-email-link');
    if (contactEmailLink) contactEmailLink.href = `mailto:${d.brand.email}`;
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
        const tierIcons = { 'Basic': 'ph-leaf', 'Premium': 'ph-diamond', 'Pro': 'ph-crown' };
        let html = '';
        d.packages.forEach(pkg => {
            const icon = tierIcons[pkg.title] || 'ph-package';

            const inclusions = pkg.inclusions.map(inc =>
                `<li><i class="ph-fill ph-check-circle"></i> ${inc}</li>`
            ).join('');

            let btnClass = 'btn-secondary';
            if (pkg.title === 'Basic') btnClass = 'btn-light';
            else if (pkg.title === 'Premium') btnClass = 'btn-primary';
            else if (pkg.title === 'Pro') btnClass = 'btn-dark';

            html += `
                <div class="package-card animate-on-scroll ${pkg.popular ? 'popular' : ''} card-tier-${pkg.title.toLowerCase()}">
                    ${pkg.tag ? `<div class="popular-tag tier-${pkg.title.toLowerCase()}">${pkg.tag}</div>` : ''}
                    <div class="package-header">
                        <div class="package-tier-icon"><i class="ph-fill ${icon}"></i></div>
                        <span class="package-duration">${pkg.duration}</span>
                        <h3>${pkg.title}</h3>
                    </div>
                    <div class="package-body">
                        <p class="package-desc">${pkg.description}</p>
                        <ul class="package-inclusions">${inclusions}</ul>
                    </div>
                    <div class="package-footer">
                        <a href="#" class="btn ${btnClass} btn-block wa-book-btn">
                            Book This Package
                        </a>
                    </div>
                </div>
            `;
        });
        pkgContainer.innerHTML = html;

        // Setup dots
        const packagesDots = document.getElementById('packages-dots');
        if (packagesDots && pkgContainer) {
            d.packages.forEach((_, idx) => {
                const dot = document.createElement('div');
                dot.className = `scroll-dot ${idx === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => {
                    const card = pkgContainer.children[idx];
                    pkgContainer.scrollTo({ left: card.offsetLeft - pkgContainer.offsetLeft - 16, behavior: 'smooth' });
                });
                packagesDots.appendChild(dot);
            });

            pkgContainer.addEventListener('scroll', () => {
                const scrollLeft = pkgContainer.scrollLeft;
                const cardWidth = pkgContainer.firstElementChild.offsetWidth;
                const index = Math.round(scrollLeft / cardWidth);
                const dots = packagesDots.querySelectorAll('.scroll-dot');
                dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            });
        }
    }

    // ── 4. Tourist Places ──
    const placesContainer = document.getElementById('places-container');
    if (placesContainer && d.places) {
        let html = '';
        
        // Ghatshila & Jadugoda Block
        const ghatsilaItems = d.places.ghatsila.map(place => 
            `<li><i class="ph-fill ph-map-pin"></i> ${place}</li>`
        ).join('');
        
        const ghatsilaMedia = d.places.ghatsilaImage 
            ? `<img src="${d.places.ghatsilaImage}" alt="Ghatshila Places" style="width:100%; height:220px; object-fit:cover; display:block;">` 
            : `<div class="place-list-image-placeholder">
                    <i class="ph ph-image"></i>
                    <span>Add Ghatshila Photo Here (800x400)</span>
               </div>`;

        html += `
            <div class="place-list-card animate-on-scroll ghatsila-card">
                ${ghatsilaMedia}
                <div class="place-list-header">
                    <h3>Ghatshila & Jadugoda</h3>
                    <p>Local Sightseeing</p>
                </div>
                <ul class="place-list" style="flex: 1;">
                    ${ghatsilaItems}
                </ul>
                <div style="padding: 0 2rem 2rem; margin-top: auto;">
                    <a href="#" class="btn btn-primary btn-block wa-book-btn">Book This Tour</a>
                </div>
            </div>
        `;

        // Jamshedpur Block
        const jamshedpurItems = d.places.jamshedpur.map(place => 
            `<li><i class="ph-fill ph-map-pin"></i> ${place}</li>`
        ).join('');

        const jamshedpurMedia = d.places.jamshedpurImage 
            ? `<img src="${d.places.jamshedpurImage}" alt="Jamshedpur Places" style="width:100%; height:220px; object-fit:cover; display:block;">` 
            : `<div class="place-list-image-placeholder">
                    <i class="ph ph-image"></i>
                    <span>Add Jamshedpur Photo Here (800x400)</span>
               </div>`;

        html += `
            <div class="place-list-card animate-on-scroll jamshedpur-card">
                ${jamshedpurMedia}
                <div class="place-list-header">
                    <h3>Jamshedpur Tour</h3>
                    <p>Top Places</p>
                </div>
                <ul class="place-list" style="flex: 1;">
                    ${jamshedpurItems}
                </ul>
                <div style="padding: 0 2rem 2rem; margin-top: auto;">
                    <a href="#" class="btn btn-primary btn-block wa-book-btn" style="background:#1d4ed8;box-shadow:0 4px 14px rgba(29,78,216,0.35)">Book This Tour</a>
                </div>
            </div>
        `;

        placesContainer.innerHTML = html;
        placesContainer.className = 'places-lists-container'; // Change class to avoid old grid styles
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

    // ── Booking Modal Logic ──
    const bookingModal = document.getElementById('bookingModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const bookingForm = document.getElementById('bookingForm');
    const bookSubject = document.getElementById('bookSubject');
    const bookingPackageName = document.getElementById('bookingPackageName');

    if (bookingModal) {
        document.body.addEventListener('click', (e) => {
            if (e.target.closest('.wa-book-btn')) {
                e.preventDefault();
                const btn = e.target.closest('.wa-book-btn');
                const card = btn.closest('.package-card') || btn.closest('.place-list-card');
                let subjectName = "General Booking";
                
                if (card) {
                    const heading = card.querySelector('h3');
                    if (heading) subjectName = heading.textContent;
                } else if (btn.textContent.trim() !== '' && btn.textContent.trim() !== 'Book Now') {
                    subjectName = btn.textContent.trim();
                }

                bookSubject.value = subjectName;
                bookingPackageName.textContent = `For: ${subjectName}`;
                bookingModal.classList.add('active');
            }
        });

        closeModalBtn.addEventListener('click', () => {
            bookingModal.classList.remove('active');
        });

        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) bookingModal.classList.remove('active');
        });

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('bookName').value;
            const phone = document.getElementById('bookPhone').value;
            const date = document.getElementById('bookDate').value;
            const people = document.getElementById('bookPeople').value;
            const pickup = document.getElementById('bookPickup').value;
            const subject = bookSubject.value;

            const waMessage = encodeURIComponent(
                `Hello Bajrang Tour And Travels! I want to book a trip.\n\n` +
                `📝 *Booking Details:*\n` +
                `👤 Name: ${name}\n` +
                `📞 Mobile: ${phone}\n` +
                `📌 Interested In: ${subject}\n` +
                `📅 Date: ${date}\n` +
                `👥 No. of People: ${people}\n` +
                `📍 Pickup Location: ${pickup || 'Not specified'}\n\n` +
                `Please confirm my booking and share the fare. Thanks!`
            );
            
            const waLink = `https://wa.me/91${d.brand.phone}?text=${waMessage}`;
            window.open(waLink, '_blank');
            bookingModal.classList.remove('active');
            bookingForm.reset();
        });
    }

});

// Global: pre-select package from package cards
window.selectPackage = function (pkgName) {
    const select = document.getElementById('packageSelect');
    if (select) select.value = pkgName;
};
