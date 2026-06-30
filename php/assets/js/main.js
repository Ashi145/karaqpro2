// ==========================================================
// KaraQpro - Interactive scripts
// ==========================================================

(function () {
    'use strict';

    // -------- Navbar scroll behavior --------
    const nav = document.getElementById('main-nav');
    const onScroll = () => {
        if (!nav) return;
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // -------- Mobile menu toggle --------
    const menuBtn  = document.getElementById('mobile-menu-btn');
    const menu     = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose= document.getElementById('menu-icon-close');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = menu.classList.contains('hidden');
            menu.classList.toggle('hidden');
            iconOpen?.classList.toggle('hidden', isHidden);
            iconClose?.classList.toggle('hidden', !isHidden);
        });

        // Close on link click
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                iconOpen?.classList.remove('hidden');
                iconClose?.classList.add('hidden');
            });
        });
    }

    // -------- Scroll-reveal animations --------
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealEls.forEach(el => io.observe(el));
    } else {
        // Fallback: show everything
        revealEls.forEach(el => el.classList.add('is-visible'));
    }
})();
