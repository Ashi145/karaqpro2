<!-- ==================== MARQUEE ==================== -->
<div class="bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 py-2.5 sm:py-4 overflow-hidden">
    <div class="flex whitespace-nowrap animate-marquee">
        <?php
        // Render items twice for seamless loop
        for ($i = 0; $i < 2; $i++):
            foreach ($MARQUEE_ITEMS as $item): ?>
                <span class="mx-4 sm:mx-8 text-xs sm:text-sm font-bold text-white"><?= htmlspecialchars($item) ?></span>
            <?php endforeach;
        endfor; ?>
    </div>
</div>
