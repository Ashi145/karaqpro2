<!-- ==================== PRICING ==================== -->
<section id="pricing" class="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(236,72,153,0.15),_transparent_60%)]"></div>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10 sm:mb-16 reveal">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-400 mb-4 sm:mb-6">
                <i data-lucide="sparkles" class="w-3 h-3 sm:w-4 sm:h-4"></i>
                Simple Pricing
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                Plans that scale<br />
                <span class="gradient-text">with your venue</span>
            </h2>
            <p class="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-400">
                Start free and upgrade as you grow. No hidden fees, cancel anytime.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
            <?php foreach ($PRICING_PLANS as $i => $plan): ?>
                <div class="relative rounded-3xl p-6 sm:p-8 reveal <?= $plan['popular']
                        ? 'bg-gradient-to-b from-pink-900/40 via-black to-black border-2 border-pink-500/40 shadow-2xl shadow-pink-500/20'
                        : 'bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10' ?>"
                     style="animation-delay: <?= $i * 150 ?>ms;">
                    <?php if ($plan['popular']): ?>
                        <div class="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-xs font-bold text-white whitespace-nowrap shadow-lg shadow-pink-500/30">
                            ⭐ Most Popular
                        </div>
                    <?php endif; ?>

                    <h3 class="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2"><?= htmlspecialchars($plan['name']) ?></h3>
                    <p class="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6"><?= htmlspecialchars($plan['description']) ?></p>

                    <div class="mb-5 sm:mb-8">
                        <span class="text-4xl sm:text-5xl font-black text-white"><?= htmlspecialchars($plan['price']) ?></span>
                        <?php if (!empty($plan['period'])): ?>
                            <span class="text-gray-500 text-sm sm:text-base ml-1"><?= htmlspecialchars($plan['period']) ?></span>
                        <?php endif; ?>
                    </div>

                    <ul class="space-y-2 sm:space-y-3 mb-5 sm:mb-8">
                        <?php foreach ($plan['features'] as $feature): ?>
                            <li class="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                                <i data-lucide="check-circle-2" class="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0 mt-0"></i>
                                <?= htmlspecialchars($feature) ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>

                    <button class="w-full py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all hover:scale-105 <?= $plan['popular']
                            ? 'bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50'
                            : 'bg-white/5 text-white border border-white/10 hover:bg-white/10' ?>">
                        <?= htmlspecialchars($plan['cta']) ?>
                    </button>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
