document.write(`
<!-- Products / Varian Rasa Section -->
<section id="varian" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-sage-dark font-bold tracking-widest uppercase text-sm mb-2">Pilihan Kesukaanmu</h2>
            <h3 class="text-4xl md:text-5xl font-display text-brown-dark mb-4">Varian Rasa <span class="text-sage-dark">Andalan</span></h3>
            <p class="text-brown/70 text-lg">Pilih rasa favoritmu! Semuanya dibalut dengan bumbu rahasia yang meresap sempurna ke dalam krispinya jamur.</p>
        </div>

        <div class="product-row">

            <!-- Product Card 1 -->
            <div class="product-card bg-white rounded-3xl p-6 card-shadow border border-cream-dark/40 flex flex-col items-center text-center relative overflow-hidden group">
                <div class="absolute top-0 right-0 bg-brown-dark text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">HOT</div>
                <div class="w-40 h-40 mb-6 relative">
                    <div class="absolute inset-0 bg-cream rounded-full transform group-hover:scale-110 transition duration-500"></div>
                    <img src="assets/crispy-bowl.jpg" alt="Rasa Balado Pedas" class="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-md p-2">
                </div>
                <h4 class="text-xl font-bold text-brown-dark mb-2 font-display">Balado Pedas Gila</h4>
                <p class="text-brown/60 text-sm mb-4">Buat kamu pecinta pedas sejati. Berani coba?</p>
                <div class="mt-auto w-full">
                    <div class="text-2xl font-bold text-sage-dark mb-4">Rp 15.000</div>
                    <button type="button" class="add-to-cart w-full bg-brown-dark hover:bg-sage-dark text-white font-bold py-3 px-4 rounded-xl transition duration-300" data-product="Balado Pedas Gila" data-price="15000">Tambah ke Keranjang</button>
                </div>
            </div>

            <!-- Product Card 2 -->
            <div class="product-card bg-white rounded-3xl p-6 card-shadow border border-cream-dark/40 flex flex-col items-center text-center relative overflow-hidden group">
                 <div class="absolute top-0 right-0 bg-cream-dark text-brown-dark text-xs font-bold px-3 py-1 rounded-bl-lg z-10">FAVORIT</div>
                <div class="w-40 h-40 mb-6 relative">
                    <div class="absolute inset-0 bg-cream rounded-full transform group-hover:scale-110 transition duration-500"></div>
                    <img src="assets/crispy-bowl.jpg" alt="Rasa BBQ" class="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-md p-2">
                </div>
                <h4 class="text-xl font-bold text-brown-dark mb-2 font-display">BBQ Asap</h4>
                <p class="text-brown/60 text-sm mb-4">Aroma daging panggang yang gurih dan manis.</p>
                <div class="mt-auto w-full">
                    <div class="text-2xl font-bold text-sage-dark mb-4">Rp 15.000</div>
                    <button type="button" class="add-to-cart w-full bg-brown-dark hover:bg-sage-dark text-white font-bold py-3 px-4 rounded-xl transition duration-300" data-product="BBQ Asap" data-price="15000">Tambah ke Keranjang</button>
                </div>
            </div>

            <!-- Product Card 3 -->
            <div class="product-card bg-white rounded-3xl p-6 card-shadow border border-cream-dark/40 flex flex-col items-center text-center relative overflow-hidden group">
                <div class="absolute top-0 right-0 bg-sage text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">ORIGINAL</div>
                <div class="w-40 h-40 mb-6 relative">
                    <div class="absolute inset-0 bg-cream rounded-full transform group-hover:scale-110 transition duration-500"></div>
                    <img src="assets/crispy-bowl.jpg" alt="Rasa Original Gurih" class="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-md p-2">
                </div>
                <h4 class="text-xl font-bold text-brown-dark mb-2 font-display">Original Gurih</h4>
                <p class="text-brown/60 text-sm mb-4">Rasa asli jamur krispi dengan taburan garam laut.</p>
                <div class="mt-auto w-full">
                    <div class="text-2xl font-bold text-sage-dark mb-4">Rp 13.000</div>
                    <button type="button" class="add-to-cart w-full bg-brown-dark hover:bg-sage-dark text-white font-bold py-3 px-4 rounded-xl transition duration-300" data-product="Original Gurih" data-price="13000">Tambah ke Keranjang</button>
                </div>
            </div>

            <!-- Product Card 4 -->
            <div class="product-card bg-white rounded-3xl p-6 card-shadow border border-cream-dark/40 flex flex-col items-center text-center relative overflow-hidden group">
                <div class="w-40 h-40 mb-6 relative">
                    <div class="absolute inset-0 bg-cream rounded-full transform group-hover:scale-110 transition duration-500"></div>
                    <img src="assets/crispy-bowl.jpg" alt="Rasa Keju" class="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-md p-2">
                </div>
                <h4 class="text-xl font-bold text-brown-dark mb-2 font-display">Keju Manis</h4>
                <p class="text-brown/60 text-sm mb-4">Perpaduan gurih dan manis keju yang lumer di mulut.</p>
                <div class="mt-auto w-full">
                    <div class="text-2xl font-bold text-sage-dark mb-4">Rp 16.000</div>
                    <button type="button" class="add-to-cart w-full bg-brown-dark hover:bg-sage-dark text-white font-bold py-3 px-4 rounded-xl transition duration-300" data-product="Keju Manis" data-price="16000">Tambah ke Keranjang</button>
                </div>
            </div>

        </div>
    </div>
</section>

`);
