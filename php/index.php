<?php
// ==========================================================
// KaraQpro Landing Page - PHP Version
// Smule-inspired dark theme with vibrant pink/orange palette
// ==========================================================

// Data arrays used across components
require_once __DIR__ . '/includes/data.php';

// Page metadata
$page_title = 'KaraQpro — Professional Karaoke Venue Management';
$page_description = 'The pro karaoke platform powering legendary nights. Manage your venue, host shows, and let singers shine.';
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#000000" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="description" content="<?= htmlspecialchars($page_description) ?>" />
    <title><?= htmlspecialchars($page_title) ?></title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

    <!-- Tailwind CSS via Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                    },
                },
            },
        };
    </script>

    <!-- Custom styles -->
    <link rel="stylesheet" href="assets/css/style.css" />

    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-black min-h-screen text-white overflow-x-hidden font-sans antialiased">

    <?php include __DIR__ . '/includes/navbar.php'; ?>
    <?php include __DIR__ . '/includes/hero.php'; ?>
    <?php include __DIR__ . '/includes/marquee.php'; ?>
    <?php include __DIR__ . '/includes/featured-experiences.php'; ?>
    <?php include __DIR__ . '/includes/feature-showcase.php'; ?>
    <?php include __DIR__ . '/includes/trending-singers.php'; ?>
    <?php include __DIR__ . '/includes/quick-features.php'; ?>
    <?php include __DIR__ . '/includes/testimonials.php'; ?>
    <?php include __DIR__ . '/includes/pricing.php'; ?>
    <?php include __DIR__ . '/includes/cta.php'; ?>
    <?php include __DIR__ . '/includes/footer.php'; ?>

    <!-- Scripts -->
    <script src="assets/js/main.js"></script>
    <script>
        // Initialize Lucide icons
        lucide.createIcons();
    </script>
</body>
</html>
