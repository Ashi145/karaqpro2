<!-- ==================== NAVBAR ==================== -->
<nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            <!-- Logo -->
            <a href="#" class="flex items-center gap-1.5 sm:gap-2 group">
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 flex items-center justify-center shadow-lg shadow-pink-500/40 group-hover:shadow-pink-500/60 transition-shadow">
                    <i data-lucide="mic-2" class="w-4 h-4 sm:w-5 sm:h-5 text-white"></i>
                </div>
                <span class="text-lg sm:text-xl font-bold text-white">
                    Kara<span class="gradient-text">Qpro</span>
                </span>
            </a>

            <!-- Desktop Links -->
            <div class="hidden lg:flex items-center gap-8">
                <?php foreach ($NAV_LINKS as $item): ?>
                    <a href="#<?= strtolower($item) ?>" class="text-sm text-gray-300 hover:text-white transition-colors relative group">
                        <?= htmlspecialchars($item) ?>
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                <?php endforeach; ?>
            </div>

            <!-- Desktop CTA -->
            <div class="hidden lg:flex items-center gap-3">
                <button class="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                    Sign In
                </button>
                <button class="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-full hover:shadow-lg hover:shadow-pink-500/40 transition-all hover:scale-105">
                    Get Started
                </button>
            </div>

            <!-- Mobile menu button -->
            <button id="mobile-menu-btn" class="lg:hidden text-white p-1.5" aria-label="Toggle menu">
                <i id="menu-icon-open" data-lucide="menu" class="w-5 h-5"></i>
                <i id="menu-icon-close" data-lucide="x" class="w-5 h-5 hidden"></i>
            </button>
        </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 hidden">
        <div class="px-4 py-6 space-y-4">
            <?php foreach ($NAV_LINKS as $item): ?>
                <a href="#<?= strtolower($item) ?>" class="block text-gray-300 hover:text-white transition-colors py-2 text-sm mobile-nav-link">
                    <?= htmlspecialchars($item) ?>
                </a>
            <?php endforeach; ?>
            <button class="w-full mt-4 px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-full">
                Get Started
            </button>
        </div>
    </div>
</nav>
