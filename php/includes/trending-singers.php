<!-- ==================== TRENDING SINGERS ==================== -->
<section class="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-950 to-black relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12 reveal">
            <div>
                <div class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs sm:text-sm text-orange-400 mb-4">
                    <i data-lucide="trending-up" class="w-3 h-3 sm:w-4 sm:h-4"></i>
                    Trending This Week
                </div>
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                    Tonight's biggest<br />
                    <span class="gradient-text">karaoke moments</span>
                </h2>
            </div>
            <button class="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-pink-300">
                View all <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            <?php foreach ($TRENDING_SINGERS as $i => $singer): ?>
                <div class="group relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer reveal hover-lift" style="animation-delay: <?= $i * 100 ?>ms;">
                    <img
                        src="<?= $singer['image'] ?>"
                        alt="<?= htmlspecialchars($singer['name']) ?>"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                    <!-- Play overlay -->
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-pink-500/50">
                            <i data-lucide="play" class="w-6 h-6 sm:w-7 sm:h-7 text-white ml-1" fill="white"></i>
                        </div>
                    </div>

                    <!-- Plays badge -->
                    <div class="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md">
                        <i data-lucide="headphones" class="w-3 h-3 text-pink-400"></i>
                        <span class="text-[10px] sm:text-xs text-white font-semibold"><?= htmlspecialchars($singer['plays']) ?></span>
                    </div>

                    <!-- Singer info -->
                    <div class="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <div class="flex items-center gap-1.5 mb-1">
                            <span class="text-base sm:text-lg"><?= $singer['emoji'] ?></span>
                            <span class="text-xs sm:text-sm font-bold text-white truncate"><?= htmlspecialchars($singer['name']) ?></span>
                        </div>
                        <p class="text-[10px] sm:text-xs text-gray-300 truncate"><?= htmlspecialchars($singer['song']) ?></p>
                    </div>

                    <!-- Heart -->
                    <button class="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <i data-lucide="heart" class="w-4 h-4 text-pink-400"></i>
                    </button>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
