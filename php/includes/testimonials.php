<!-- ==================== TESTIMONIALS ==================== -->
<section id="community" class="py-16 sm:py-24 lg:py-32 bg-black relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10 sm:mb-16 reveal">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs sm:text-sm text-yellow-400 mb-4 sm:mb-6">
                <i data-lucide="star" class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor"></i>
                Loved by Venues
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                The community<br />
                <span class="gradient-text">speaks for itself</span>
            </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <?php foreach ($TESTIMONIALS as $i => $t): ?>
                <div class="group p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all reveal" style="animation-delay: <?= $i * 150 ?>ms;">
                    <div class="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                        <?php for ($s = 0; $s < $t['rating']; $s++): ?>
                            <i data-lucide="star" class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor"></i>
                        <?php endfor; ?>
                    </div>
                    <p class="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">"<?= htmlspecialchars($t['content']) ?>"</p>
                    <div class="flex items-center gap-2 sm:gap-3">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br <?= $t['gradient'] ?> flex items-center justify-center text-base sm:text-xl flex-shrink-0">
                            <?= $t['avatar'] ?>
                        </div>
                        <div class="min-w-0">
                            <div class="text-sm sm:text-base font-bold text-white truncate"><?= htmlspecialchars($t['name']) ?></div>
                            <div class="text-xs sm:text-sm text-gray-500 truncate"><?= htmlspecialchars($t['role']) ?></div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
