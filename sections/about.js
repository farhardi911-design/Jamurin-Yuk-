document.write(`
<!-- Why Us Section -->
<section id="tentang" class="py-20 bg-cream-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-16">
            <!-- Image side -->
            <div class="lg:w-1/2">
                <div class="grid grid-cols-2 gap-4">
                    <img src="assets/zipper.jpg" alt="Kemasan Zipper Jamurin" class="rounded-3xl object-cover h-64 w-full shadow-lg transform translate-y-8">
                    <img src="assets/back-pack.jpg" alt="Kemasan Belakang Jamurin" class="rounded-3xl object-cover h-64 w-full shadow-lg">
                </div>
            </div>

            <!-- Text side -->
            <div class="lg:w-1/2">
                <h2 class="text-3xl md:text-4xl font-display text-brown-dark mb-6">Kenapa Harus <span class="text-sage-dark">Jamurin?</span></h2>
                <p class="text-brown/70 text-lg mb-8 leading-relaxed">
                    Kami tidak main-main dalam urusan rasa dan kualitas. Setiap bungkus Jamurin dibuat dengan cinta dan dedikasi untuk memberikan pengalaman ngemil terbaik buat kamu.
                </p>

                <div class="space-y-6">
                    <!-- Point 1 -->
                    <div class="flex items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-cream flex items-center justify-center text-brown-dark text-xl">
                            <i class="fas fa-check"></i>
                        </div>
                        <div>
                            <h4 class="text-xl font-bold text-brown-dark mb-1">Jamur Tiram Pilihan</h4>
                            <p class="text-brown/70">Hanya menggunakan jamur segar berkualitas tinggi langsung dari petani lokal.</p>
                        </div>
                    </div>

                    <!-- Point 2 -->
                    <div class="flex items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-cream flex items-center justify-center text-brown-dark text-xl">
                            <i class="fas fa-fire"></i>
                        </div>
                        <div>
                            <h4 class="text-xl font-bold text-brown-dark mb-1">Teknik Goreng Spesial</h4>
                            <p class="text-brown/70">Digoreng dengan suhu tepat menggunakan minyak berkualitas, minim minyak, maksimal krispinya!</p>
                        </div>
                    </div>

                    <!-- Point 3 -->
                    <div class="flex items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-cream flex items-center justify-center text-brown-dark text-xl">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div>
                            <h4 class="text-xl font-bold text-brown-dark mb-1">Bumbu Melimpah</h4>
                            <p class="text-brown/70">Bumbu racikan sendiri yang meresap sampai ke serat jamur terdalam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

`);
