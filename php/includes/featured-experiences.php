<!-- ==================== FEATURED EXPERIENCES ==================== -->
<section id="discover" class="py-16 sm:py-24 lg:py-32 bg-black relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10 sm:mb-16 lg:mb-20 reveal">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs sm:text-sm text-pink-400 mb-4 sm:mb-6">
                <i data-lucide="sparkles" class="w-3 h-3 sm:w-4 sm:h-4"></i>
                Built for Everyone
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                One platform.<br />
                <span class="gradient-text">Endless possibilities.</span>
            </h2>
            <p class="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-400">
                Whether you're a venue owner, a DJ, or a passionate singer — KaraQpro has the tools to make every night unforgettable.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <?php foreach ($FEATURED_CARDS as $i => $card): ?>
                <div class="group relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden cursor-pointer reveal hover-lift" style="animation-delay: <?= $i * 150 ?>ms;">
                    <img
                        src="<?= $card['image'] ?>"
                        alt="<?= htmlspecialchars($card['title']) ?>"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                    <div class="absolute inset-0 bg-gradient-to-br <?= $card['gradient'] ?> opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"></div>

                    <div class="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                        <span class="inline-block self-start px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white bg-gradient-to-r <?= $card['gradient'] ?> mb-3 sm:mb-4 uppercase tracking-wider">
                            <?= htmlspecialchars($card['tag']) ?>
                        </span>
                        <h3 class="text-2xl sm:text-3xl font-black text-white mb-2 sm:mb-3 leading-tight">
                            <?= htmlspecialchars($card['title']) ?>
                        </h3>
                        <p class="text-sm sm:text-base text-gray-300 mb-4">
                            <?= htmlspecialchars($card['description']) ?>
                        </p>
                        <div class="flex items-center gap-1 text-sm font-semibold text-white group-hover:gap-2 transition-all">
                            Learn more
                            <i data-lucide="chevron-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
