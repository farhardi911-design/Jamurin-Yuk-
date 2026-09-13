document.write(`
<!-- CTA Banner -->
<section id="pesan" class="py-10 md:py-12 relative">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="bg-gradient-to-r from-brown-dark to-sage-dark rounded-[2rem] p-7 md:p-10 text-center shadow-2xl relative overflow-hidden">
            <!-- BG Decoration -->
            <svg class="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 text-white opacity-10 w-96 h-96" fill="currentColor" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
            <svg class="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 text-white opacity-10 w-64 h-64" fill="currentColor" viewBox="0 0 100 100"><rect width="100" height="100" rx="20"/></svg>

            <h2 class="text-3xl md:text-4xl font-display text-white mb-3 relative z-10">Lagi Pengen Ngemil?</h2>
            <p class="text-cream-light text-base md:text-lg mb-6 max-w-2xl mx-auto relative z-10">
                Pesan sekarang dan nikmati camilan jamur krispi favoritmu.<br>
                <span class="promo-inline">
                <strong>Promo:</strong> gunakan kode <strong class="promo-code promo-code-green">JAMUR10</strong> untuk diskon 10% atau <strong class="promo-code promo-code-orange">HEMAT5K</strong> untuk potongan Rp5.000.
                </span>
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <a href="#" id="cta-wa" class="bg-white hover:bg-cream-light text-sage-dark font-bold text-base py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-3">
                    <i class="fab fa-whatsapp text-2xl"></i>
                    Pesan via WhatsApp
                </a>
                <a href="#" class="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-base py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-3">
                    <i class="fab fa-instagram text-2xl"></i>
                    Lihat Instagram
                </a>
            </div>
        </div>
    </div>
</section>

`);
