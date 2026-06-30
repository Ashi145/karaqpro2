<!-- ==================== FOOTER ==================== -->
<footer class="bg-black border-t border-white/10 py-10 sm:py-12 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            <!-- Brand column -->
            <div class="col-span-2 md:col-span-1">
                <div class="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 flex items-center justify-center">
                        <i data-lucide="mic-2" class="w-4 h-4 sm:w-5 sm:h-5 text-white"></i>
                    </div>
                    <span class="text-lg sm:text-xl font-bold text-white">
                        Kara<span class="gradient-text">Qpro</span>
                    </span>
                </div>
                <p class="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                    The professional karaoke platform for venues, DJs, and hosts worldwide.
                </p>
                <div class="flex gap-3">
                    <?php foreach (['🐦','📷','🎵','📘'] as $s): ?>
                        <button class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-sm transition-colors">
                            <?= $s ?>
                        </button>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Link sections -->
            <?php foreach ($FOOTER_SECTIONS as $section): ?>
                <div>
                    <h4 class="text-xs sm:text-sm font-bold text-white mb-3 sm:mb-4 uppercase tracking-wider">
                        <?= htmlspecialchars($section['title']) ?>
                    </h4>
                    <ul class="space-y-2 sm:space-y-3">
                        <?php foreach ($section['links'] as $link): ?>
                            <li>
                                <a href="#" class="text-xs sm:text-sm text-gray-500 hover:text-pink-400 transition-colors">
                                    <?= htmlspecialchars($link) ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Bottom bar -->
        <div class="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p class="text-xs sm:text-sm text-gray-600">
                &copy; <?= date('Y') ?> KaraQpro. All rights reserved.
            </p>
            <div class="flex items-center gap-4 sm:gap-6">
                <?php foreach (['Privacy', 'Terms', 'Cookies'] as $link): ?>
                    <a href="#" class="text-xs sm:text-sm text-gray-600 hover:text-gray-400 transition-colors">
                        <?= htmlspecialchars($link) ?>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</footer>
