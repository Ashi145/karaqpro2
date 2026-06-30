# KaraQpro Landing Page — PHP Version

A Smule-inspired dark-themed landing page rewritten in PHP using component partials.

## 📁 File Structure

```
php/
├── index.php                         # Main entry point
├── includes/
│   ├── data.php                      # Shared data arrays (images, plans, testimonials, etc.)
│   ├── navbar.php                    # Top navigation + mobile menu
│   ├── hero.php                      # Hero section with floating image cards
│   ├── app-store-badge.php           # Reusable Apple/Google Play badges
│   ├── marquee.php                   # Scrolling feature ticker
│   ├── featured-experiences.php      # 3-card image grid (Singers/DJs/Venues)
│   ├── feature-showcase.php          # Alternating image + text rows
│   ├── trending-singers.php          # 4-card singer grid (Smule-style)
│   ├── quick-features.php            # 8-tile feature grid
│   ├── testimonials.php              # Customer testimonials
│   ├── pricing.php                   # Pricing plans (Starter/Pro/Enterprise)
│   ├── cta.php                       # Final CTA with nightclub background
│   └── footer.php                    # Footer with links & social
└── assets/
    ├── css/
    │   └── style.css                 # Custom animations, gradients, scroll-reveal
    └── js/
        └── main.js                   # Navbar scroll, mobile menu, IntersectionObserver reveals
```

## 🚀 How to Run

You need PHP 7.4+ installed.

### Option 1: PHP built-in server
```bash
cd php
php -S localhost:8000
```
Then open http://localhost:8000

### Option 2: Apache / Nginx
Drop the `php/` folder into your web root (e.g., `htdocs/`, `www/`).
Visit `http://localhost/php/`.

## 🎨 Tech Stack

| Layer       | Technology |
|-------------|------------|
| Templates   | PHP includes/partials |
| Styling     | Tailwind CSS (Play CDN) + custom CSS |
| Icons       | Lucide Icons (CDN) |
| Fonts       | Inter (Google Fonts) |
| Animations  | CSS keyframes + IntersectionObserver |
| Images      | Pexels stock photos |

## ✏️ Customizing Content

All copy, images, plans, and testimonials live in **`includes/data.php`**.
Edit the PHP arrays there — no need to touch the template files.

Examples:
- **Change images** → update `$IMAGES`
- **Edit pricing** → update `$PRICING_PLANS`
- **Add a testimonial** → push to `$TESTIMONIALS`
- **Rename nav links** → update `$NAV_LINKS`

## 🌐 Production Notes

The Tailwind Play CDN is included for quick setup. For production, swap it for
a compiled Tailwind build to dramatically reduce CSS payload.
