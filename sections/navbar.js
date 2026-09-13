document.write(`
<!-- Navbar -->
<nav class="fixed w-full z-50 bg-cream-light/90 backdrop-blur-md shadow-sm transition-all duration-300" id="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                <img src="assets/logo-mark.png" alt="Jamurin" class="h-12 w-auto">
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-8 items-center">
                <a href="#beranda" class="text-brown-dark hover:text-sage-dark font-medium transition duration-300">Beranda</a>
                <a href="#tentang" class="text-brown-dark hover:text-sage-dark font-medium transition duration-300">Tentang</a>
                <a href="#varian" class="text-brown-dark hover:text-sage-dark font-medium transition duration-300">Varian Rasa</a>

                <a href="#pesan" class="bg-sage-dark hover:bg-brown text-white px-6 py-2 rounded-full font-bold shadow-md transform hover:scale-105 transition duration-300">Pesan Sekarang</a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
                <button id="mobile-menu-btn" class="text-brown-dark hover:text-sage-dark focus:outline-none">
                    <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu (Hidden by default) -->
    <div id="mobile-menu" class="hidden md:hidden bg-cream-light border-t border-cream-dark absolute w-full shadow-lg">
        <div class="px-4 pt-2 pb-6 space-y-2 text-center">
            <a href="#beranda" class="block px-3 py-2 text-base font-medium text-brown-dark hover:text-sage-dark hover:bg-cream rounded-md">Beranda</a>
            <a href="#tentang" class="block px-3 py-2 text-base font-medium text-brown-dark hover:text-sage-dark hover:bg-cream rounded-md">Tentang</a>
            <a href="#varian" class="block px-3 py-2 text-base font-medium text-brown-dark hover:text-sage-dark hover:bg-cream rounded-md">Varian Rasa</a>

            <a href="#pesan" class="block px-3 py-3 mt-4 text-base font-bold text-white bg-sage-dark hover:bg-brown rounded-full w-3/4 mx-auto">Pesan Sekarang</a>
        </div>
    </div>
</nav>

`);
