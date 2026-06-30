<!-- ==================== HERO ==================== -->
<section class="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black pt-14 sm:pt-16 lg:pt-20">
    <!-- Background image with overlay -->
    <div class="absolute inset-0">
        <img
            src="<?= $IMAGES['heroNightclub'] ?>"
            alt="People dancing in nightclub"
            class="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40"></div>
        <div class="absolute top-1/4 left-0 w-96 h-96 bg-pink-600/30 rounded-full blur-[120px] animate-float"></div>
        <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-float stagger-2"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
            <!-- Left content -->
            <div class="space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left reveal">
                <!-- Live badge -->
                <div class="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-sm text-pink-300">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                    Now Live in 500+ Venues
                </div>

                <!-- Main heading -->
                <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-white">
                    Sing.<br />
                    <span class="gradient-text">Connect.</span><br />
                    Party.
                </h1>

                <!-- Subtitle -->
                <p class="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                    The pro karaoke platform powering legendary nights. Manage your venue, host shows, and let singers shine — all from one beautiful app.
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                    <button class="btn-press group w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-full hover:shadow-2xl hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-2">
                        Start Free Trial
                        <i data-lucide="arrow-right" class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"></i>
                    </button>
                    <button class="btn-press group w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/15 transition-all flex items-center justify-center gap-2">
                        <i data-lucide="play" class="w-4 h-4 sm:w-5 sm:h-5" fill="white"></i>
                        Watch Demo
                    </button>
                </div>

                <!-- App store badges -->
                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                    <?php include __DIR__ . '/app-store-badge.php'; ?>
                </div>
            </div>

            <!-- Right floating cards -->
            <div class="hidden lg:block relative h-[600px]">
                <!-- Main image card -->
                <div class="absolute top-0 right-0 w-72 h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-pink-500/20 float-anim-1">
                    <img src="<?= $IMAGES['womanSinging'] ?>" alt="Woman singing" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div class="absolute bottom-4 left-4 right-4">
                        <div class="flex items-center gap-2 mb-2">
                            <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span class="text-xs text-white font-semibold">LIVE NOW</span>
                        </div>
                        <h3 class="text-white font-bold">Sarah's Open Mic Night</h3>
                        <p class="text-xs text-gray-300">128 singers • 4.9 ★</p>
                    </div>
                </div>

                <!-- Secondary image -->
                <div class="absolute bottom-10 left-0 w-64 h-80 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-orange-500/20 float-anim-2">
                    <img src="<?= $IMAGES['djTanktop'] ?>" alt="DJ" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div class="absolute bottom-4 left-4 right-4">
                        <div class="flex items-center gap-2 mb-2">
                            <div class="px-2 py-0.5 rounded-md bg-orange-500/80 text-[10px] text-white font-bold">DJ MODE</div>
                        </div>
                        <h3 class="text-white font-bold">Mix & Master</h3>
                        <p class="text-xs text-gray-300">Pro audio tools</p>
                    </div>
                </div>

                <!-- Floating revenue card -->
                <div class="absolute top-20 left-8 px-4 py-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl float-anim-3">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
                            <i data-lucide="trending-up" class="w-5 h-5 text-white"></i>
                        </div>
                        <div>
                            <div class="text-xs text-gray-400">Tonight's revenue</div>
                            <div class="text-white font-bold">+$2,847</div>
                        </div>
                    </div>
                </div>

                <!-- Floating singers card -->
                <div class="absolute bottom-32 right-4 px-4 py-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl float-anim-4">
                    <div class="flex items-center gap-3">
                        <div class="flex -space-x-2">
                            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-red-500 border-2 border-black flex items-center justify-center text-sm">🎤</div>
                            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 border-2 border-black flex items-center justify-center text-sm">🎸</div>
                            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-black flex items-center justify-center text-sm">💃</div>
                        </div>
                        <div>
                            <div class="text-xs text-gray-400">Singers waiting</div>
                            <div class="text-white font-bold text-sm">24 in queue</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats row -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16 lg:mt-20 pt-8 border-t border-white/10 reveal">
            <?php foreach ($HERO_STATS as $stat): ?>
                <div class="text-center">
                    <div class="text-2xl sm:text-3xl md:text-4xl font-black gradient-text"><?= htmlspecialchars($stat['value']) ?></div>
                    <div class="text-xs sm:text-sm text-gray-500 mt-1"><?= htmlspecialchars($stat['label']) ?></div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
