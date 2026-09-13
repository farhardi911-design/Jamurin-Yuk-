document.write(`
<!-- Hero Section -->
<section id="beranda" class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute top-0 right-0 -z-10 w-full h-full bg-cream-light transform -skew-y-6 origin-top-right scale-110"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="flex flex-col lg:flex-row items-center gap-12">
            <!-- Hero Text -->
            <div class="lg:w-1/2 text-center lg:text-left z-10">
                <div class="inline-block px-4 py-1.5 rounded-full bg-cream text-brown-dark font-semibold text-sm mb-6 border border-cream-dark shadow-sm">
                    🍄 Cemilan Sehat & Bikin Nagih!
                </div>
                <h1 class="text-5xl lg:text-7xl font-display text-brown-dark leading-tight mb-6">
                    Kriuknya <br>
                    <span class="text-sage-dark relative inline-block">
                        Nggak Nahan!
                        <!-- Underline dekoratif -->
                        <svg class="absolute w-full h-3 -bottom-1 left-0 text-sage opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="4" fill="none"/></svg>
                    </span>
                </h1>
                <p class="text-lg text-brown/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Nikmati sensasi jamur tiram pilihan yang digoreng garing dengan bumbu rahasia. Cocok buat nemenin waktu santai, nonton drakor, atau kumpul bareng teman. Awas, sekali gigit susah berhenti!
                </p>
                <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <a href="#varian" class="bg-sage-dark hover:bg-brown text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2">
                        <span>Beli Sekarang</span>
                        <i class="fas fa-shopping-cart text-sm"></i>
                    </a>
                    <a href="#tentang" class="bg-white hover:bg-cream-light text-brown-dark px-8 py-4 rounded-full font-bold text-lg border-2 border-cream-dark shadow-sm transform hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2">
                        <i class="fas fa-play text-sage-dark"></i>
                        <span>Cara Pembuatan</span>
                    </a>
                </div>

                <!-- Stats / Trust Indicators -->
                <div class="mt-10 pt-8 border-t border-cream-dark flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-12 text-sm text-brown/70">
                    <div class="flex items-center gap-2">
                        <div class="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sage-dark">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <span class="font-semibold text-brown-dark">100% Jamur Segar</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center text-brown">
                            <i class="fas fa-award"></i>
                        </div>
                        <span class="font-semibold text-brown-dark">Tanpa Pengawet</span>
                    </div>
                </div>
            </div>

            <!-- Hero Image -->
            <div class="lg:w-1/2 relative">
                <!-- Decorative blobs/circles -->
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cream-dark rounded-full opacity-30"></div>

                <!-- Main Image: actual Jamurin packaging -->
                <img src="assets/product-main.jpg" alt="Kemasan Jamurin Jamur Crispy" class="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-[3rem] border-8 border-white transform rotate-3 hover:rotate-0 transition duration-500 object-cover h-[500px]">

                <!-- Floating Elements (Badges) -->
                <div class="absolute top-10 right-0 lg:-right-10 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce" style="animation-duration: 3s;">
                    <div class="flex items-center gap-3">
                        <div class="text-cream-dark text-2xl">
                            <i class="fas fa-star text-yellow-500"></i>
                        </div>
                        <div>
                            <p class="font-bold text-brown-dark">4.9/5</p>
                            <p class="text-xs text-brown/60">Dari 1000+ Pembeli</p>
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-20 left-0 lg:-left-10 bg-brown-dark p-3 rounded-2xl shadow-xl z-20 transform -rotate-6">
                    <p class="font-display text-xl text-cream-light">BEST SELLER!</p>
                </div>
            </div>
        </div>
    </div>
</section>

`);
