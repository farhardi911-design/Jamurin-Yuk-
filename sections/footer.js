document.write(`
<!-- Footer -->
<footer class="bg-brown-dark text-cream-light pt-12 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <!-- Brand Info -->
            <div class="col-span-1 lg:col-span-1">
                <div class="flex items-center gap-2 mb-6">
                    <img src="assets/logo-mark.png" alt="Jamurin" class="h-10 w-auto rounded-md bg-cream-light p-1">
                    <span class="font-display text-2xl tracking-wide text-cream-light">Jamurin</span>
                </div>
                <p class="text-cream/70 mb-6 leading-relaxed">
                    Cemilan jamur krispi kekinian dengan berbagai varian rasa yang menggugah selera. Dibuat dari jamur pilihan untuk kepuasan ngemilmu.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream-light hover:bg-sage-dark hover:text-white transition duration-300">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream-light hover:bg-sage-dark hover:text-white transition duration-300">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream-light hover:bg-sage-dark hover:text-white transition duration-300">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream-light hover:bg-sage-dark hover:text-white transition duration-300">
                        <i class="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="text-lg font-bold mb-6 text-cream-light border-b border-white/20 pb-2 inline-block">Tautan Cepat</h4>
                <ul class="space-y-3">
                    <li><a href="#beranda" class="text-cream/70 hover:text-white transition duration-300">Beranda</a></li>
                    <li><a href="#tentang" class="text-cream/70 hover:text-white transition duration-300">Tentang Kami</a></li>
                    <li><a href="#varian" class="text-cream/70 hover:text-white transition duration-300">Varian Produk</a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h4 class="text-lg font-bold mb-6 text-cream-light border-b border-white/20 pb-2 inline-block">Hubungi Kami</h4>
                <ul class="space-y-4">
                    <li class="flex items-start gap-3">
                        <i class="fas fa-map-marker-alt text-cream mt-1"></i>
                        <span class="text-cream/70">Jl.Pesantunan, Kec. Kedungwuni Barat, KAB.Pekalongan, Jawa Tengah, Indonesia</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fas fa-phone-alt text-cream"></i>
                        <span class="text-cream/70">085136498679</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fas fa-envelope text-cream"></i>
                        <span class="text-cream/70">halo@jamurin.com</span>
                    </li>
                </ul>
            </div>

            <!-- Newsletter -->
            <div>
                <h4 class="text-lg font-bold mb-6 text-cream-light border-b border-white/20 pb-2 inline-block">Berlangganan Promo</h4>
                <p class="text-cream/70 mb-4 text-sm">Dapatkan info rasa baru dan promo menarik langsung ke emailmu.</p>
                <form id="promo-subscribe-form" class="flex">
                    <input id="promo-email" type="email" placeholder="Email kamu..." autocomplete="email" required class="bg-white/10 text-white placeholder-cream/50 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-sage w-full">
                    <button type="submit" class="bg-sage-dark hover:bg-sage text-white px-4 py-2 rounded-r-lg transition duration-300">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
                <p id="promo-subscribe-message" class="text-cream/60 text-xs mt-2"></p>
            </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-white/20 pt-8 text-center md:flex md:justify-between md:items-center">
            <p class="text-cream/60 text-sm mb-4 md:mb-0">&copy; 2026 Jamurin. Hak Cipta Dilindungi.</p>
            <div class="flex justify-center space-x-6 text-sm text-cream/60">
                <a href="#" class="hover:text-white transition duration-300">Kebijakan Privasi</a>
                <a href="#" class="hover:text-white transition duration-300">Syarat & Ketentuan</a>
            </div>
        </div>
    </div>
</footer>

`);
