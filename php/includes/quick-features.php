<!-- ==================== QUICK FEATURES ==================== -->
<section class="py-16 sm:py-24 lg:py-32 bg-black relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10 sm:mb-16 reveal">
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                Every feature you need.<br />
                <span class="gradient-text">None you don't.</span>
            </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            <?php foreach ($QUICK_FEATURES as $i => $f): ?>
                <div class="group p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all reveal hover-lift-sm" style="animation-delay: <?= $i * 50 ?>ms;">
                    <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br <?= $f['color'] ?> flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                        <i data-lucide="<?= $f['icon'] ?>" class="w-5 h-5 sm:w-6 sm:h-6"></i>
                    </div>
                    <h3 class="text-sm sm:text-base font-bold text-white mb-1"><?= htmlspecialchars($f['title']) ?></h3>
                    <p class="text-xs sm:text-sm text-gray-500"><?= htmlspecialchars($f['desc']) ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
