<!-- ==================== FEATURE SHOWCASE ==================== -->
<section id="features" class="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
    <div class="absolute top-1/3 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[150px]"></div>
    <div class="absolute bottom-1/3 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[150px]"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-32">
        <?php foreach ($FEATURE_ROWS as $row): ?>
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center <?= $row['reverse'] ? 'lg:[&>div:first-child]:order-2' : '' ?>">
                <!-- Image -->
                <div class="relative reveal">
                    <div class="relative aspect-[4/5] sm:aspect-[16/12] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img src="<?= $row['image'] ?>" alt="<?= htmlspecialchars($row['imageAlt']) ?>" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-br <?= $row['gradient'] ?> opacity-10 mix-blend-overlay"></div>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div class="absolute -inset-4 bg-gradient-to-br <?= $row['gradient'] ?> opacity-20 blur-3xl -z-10 rounded-3xl"></div>
                </div>

                <!-- Text -->
                <div class="space-y-4 sm:space-y-6 reveal">
                    <span class="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r <?= $row['gradient'] ?> uppercase tracking-wider">
                        <?= htmlspecialchars($row['tag']) ?>
                    </span>
                    <h3 class="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                        <?= htmlspecialchars($row['title']) ?>
                    </h3>
                    <p class="text-base sm:text-lg text-gray-400 leading-relaxed">
                        <?= htmlspecialchars($row['description']) ?>
                    </p>
                    <ul class="space-y-3 pt-2">
                        <?php foreach ($row['features'] as $feature): ?>
                            <li class="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                                <i data-lucide="check-circle-2" class="w-5 h-5 flex-shrink-0 mt-0.5 text-pink-400"></i>
                                <?= htmlspecialchars($feature) ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                    <button class="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r <?= $row['gradient'] ?> hover:scale-105 transition-transform shadow-lg">
                        Explore More
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>
