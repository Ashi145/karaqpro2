<!-- ==================== CTA SECTION ==================== -->
<section class="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
    <div class="absolute inset-0">
        <img src="<?= $IMAGES['nightclubDance'] ?>" alt="Nightclub" class="w-full h-full object-cover opacity-30" />
        <div class="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-600/30 via-red-500/30 to-orange-500/30 rounded-full blur-[150px]"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="space-y-5 sm:space-y-8 reveal">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-pink-300">
                <i data-lucide="mic-2" class="w-3 h-3 sm:w-4 sm:h-4"></i>
                Ready to transform your venue?
            </div>

            <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95]">
                Your stage<br />
                <span class="gradient-text">awaits.</span>
            </h2>

            <p class="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Join 500+ venues already running unforgettable karaoke nights with KaraQpro. No credit card required.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                <button class="btn-press group w-full sm:w-auto px-8 sm:px-10 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-full hover:shadow-2xl hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-2">
                    Register Your Venue
                    <i data-lucide="arrow-right" class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button class="btn-press w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/15 transition-all">
                    Schedule Demo →
                </button>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-3 pt-4">
                <?php include __DIR__ . '/app-store-badge.php'; ?>
            </div>
        </div>
    </div>
</section>
