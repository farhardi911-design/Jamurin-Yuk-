// ===== JAMURIN SITE SCRIPT =====
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.add('hidden'));
    });
}

const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
            navbar.classList.replace('bg-cream-light/90', 'bg-cream-light');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.replace('bg-cream-light', 'bg-cream-light/90');
        }
    });
}

// ===== KERANJANG + PROMO =====
const WHATSAPP_NUMBER = '6285136498679';
let cart = JSON.parse(localStorage.getItem('jamurinCart') || '[]');
let appliedPromo = JSON.parse(localStorage.getItem('jamurinPromo') || 'null');

const cartFab = document.getElementById('cart-fab');
const cartPanel = document.getElementById('cart-panel');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartDiscount = document.getElementById('cart-discount');
const cartShipping = document.getElementById('cart-shipping');
const cartTotal = document.getElementById('cart-total');
const promoCodeInput = document.getElementById('promo-code');
const applyPromoButton = document.getElementById('apply-promo');
const promoMessage = document.getElementById('promo-message');
const promoApplied = document.getElementById('promo-applied');
const checkoutButton = document.getElementById('checkout-wa');
const ctaWaButton = document.getElementById('cta-wa');

// Cukup 2 kode promo.
const SHIPPING_COST = 10000;

const PROMOS = {
    JAMUR10: { type: 'percent', value: 10, label: '10%' },
    HEMAT5K: { type: 'fixed', value: 5000, label: 'Rp 5.000' }
};

function rupiah(value) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}

function getSubtotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getDiscount(subtotal) {
    if (!appliedPromo || !PROMOS[appliedPromo.code]) return 0;
    const promo = PROMOS[appliedPromo.code];
    if (promo.type === 'percent') return Math.floor(subtotal * promo.value / 100);
    return Math.min(promo.value, subtotal);
}

function saveCart() {
    localStorage.setItem('jamurinCart', JSON.stringify(cart));
}

function savePromo() {
    if (appliedPromo) localStorage.setItem('jamurinPromo', JSON.stringify(appliedPromo));
    else localStorage.removeItem('jamurinPromo');
}

function showPromoMessage(text, success = false) {
    if (!promoMessage) return;
    promoMessage.textContent = text;
    promoMessage.classList.toggle('success', success);
    promoMessage.classList.toggle('error', !success && !!text);
}

function updatePromoUI() {
    const subtotal = getSubtotal();
    const discount = getDiscount(subtotal);
    const total = Math.max(0, subtotal - discount) + (cart.length ? SHIPPING_COST : 0);

    if (cartSubtotal) cartSubtotal.textContent = rupiah(subtotal);
    if (cartDiscount) cartDiscount.textContent = `- ${rupiah(discount)}`;
    if (cartShipping) cartShipping.textContent = cart.length ? rupiah(SHIPPING_COST) : rupiah(0);
    if (cartTotal) cartTotal.textContent = rupiah(total);
    if (promoApplied) promoApplied.textContent = appliedPromo ? `(${appliedPromo.code})` : '';
    if (promoCodeInput && appliedPromo && promoCodeInput.value !== appliedPromo.code) {
        promoCodeInput.value = appliedPromo.code;
    }
}

function updateCart() {
    if (!cartItems) return;
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCount) cartCount.textContent = totalQty;

    if (!cart.length) {
        appliedPromo = null;
        savePromo();
        if (promoCodeInput) promoCodeInput.value = '';
        showPromoMessage('');
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-basket-shopping"></i>
                <h3>Keranjang masih kosong</h3>
                <p>Yuk pilih jamur krispi favoritmu.</p>
            </div>`;fgcxgf
        updatePromoUI();
        saveCart();
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div>
                <div class="cart-item-name">${escapeHtml(item.name)}</div>
                <div class="cart-item-price">${rupiah(item.price)} / pcs</div>
                <div class="cart-item-controls">
                    <button type="button" onclick="changeQty(${index}, -1)">−</button>
                    <strong>${item.qty}</strong>
                    <button type="button" onclick="changeQty(${index}, 1)">+</button>
                    <button type="button" class="remove-item" onclick="removeItem(${index})">Hapus</button>
                </div>
            </div>
            <strong>${rupiah(item.price * item.qty)}</strong>
        </div>
    `).join('');

    updatePromoUI();
    saveCart();
}

function escapeHtml(text) {
    return String(text).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#039;', '"':'&quot;' })[char]);
}

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) existing.qty += 1;
    else cart.push({ name, price, qty: 1 });
    updateCart();
    openCart();
}

function changeQty(index, delta) {
    if (!cart[index]) return;
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

window.changeQty = changeQty;
window.removeItem = removeItem;

function openCart() {
    cartPanel?.classList.add('is-open');
    cartOverlay?.classList.add('is-open');
    cartPanel?.setAttribute('aria-hidden', 'false');
    cartOverlay?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartPanel?.classList.remove('is-open');
    cartOverlay?.classList.remove('is-open');
    cartPanel?.setAttribute('aria-hidden', 'true');
    cartOverlay?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

cartFab?.addEventListener('click', openCart);
cartClose?.addEventListener('click', closeCart);
cartOverlay?.addEventListener('click', closeCart);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        addToCart(button.dataset.product, Number(button.dataset.price));
    });
});

function applyPromo() {
    const code = (promoCodeInput?.value || '').trim().toUpperCase();
    if (!code) {
        appliedPromo = null;
        savePromo();
        showPromoMessage('Kode promo opsional — boleh dikosongkan.', false);
        updatePromoUI();
        return;
    }

    if (!PROMOS[code]) {
        appliedPromo = null;
        savePromo();
        showPromoMessage('Kode promo tidak valid.', false);
        updatePromoUI();
        return;
    }

    appliedPromo = { code };
    savePromo();
    showPromoMessage(`Promo ${code} berhasil dipakai!`, true);
    updatePromoUI();
}

applyPromoButton?.addEventListener('click', applyPromo);
promoCodeInput?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        applyPromo();
    }
});


// ===== DASHBOARD PENJUALAN =====
function getOrderHistory() {
    try {
        return JSON.parse(localStorage.getItem('jamurinOrders') || '[]');
    } catch {
        return [];
    }
}

function saveOrderHistory(orders) {
    localStorage.setItem('jamurinOrders', JSON.stringify(orders));
}

function formatOrderDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '-';
    return date.toLocaleString('id-ID', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
}

function updateSalesDashboard() {
    const orders = getOrderHistory();
    const orderCount = orders.length;
    const totalIncome = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
    const totalItems = orders.reduce((sum, order) =>
        sum + (order.items || []).reduce((qty, item) => qty + Number(item.qty || 0), 0), 0);

    const avgIncome = orderCount ? Math.round(totalIncome / orderCount) : 0;
    const avgItems = orderCount ? totalItems / orderCount : 0;

    const orderStat = document.getElementById('stat-orders');
    const incomeStat = document.getElementById('stat-income');
    const itemsStat = document.getElementById('stat-items');
    const list = document.getElementById('sales-order-list');

    if (orderStat) orderStat.textContent = orderCount;
    if (incomeStat) incomeStat.textContent = rupiah(avgIncome);
    if (itemsStat) itemsStat.textContent = `${Number(avgItems.toFixed(1))} pcs`;

    if (!list) return;

    if (!orders.length) {
        list.innerHTML = '<div class="sales-empty">Belum ada checkout yang tercatat.</div>';
        return;
    }

    list.innerHTML = [...orders].reverse().map((order, index) => {
        const items = (order.items || []).map(item =>
            `${escapeHtml(item.name)} × ${Number(item.qty || 0)}`
        ).join(', ');

        return `
            <div class="sales-order-card">
                <div class="sales-order-top">
                    <strong>Pesanan #${orders.length - index}</strong>
                    <span>${formatOrderDate(order.date)}</span>
                </div>
                <div class="sales-order-customer">${escapeHtml(order.name || '-')}</div>
                <div class="sales-order-items">${items || '-'}</div>
                <div class="sales-order-bottom">
                    <span>${Number(order.totalItems || 0)} pcs</span>
                    <strong>${rupiah(Number(order.total || 0))}</strong>
                </div>
            </div>
        `;
    }).join('');
}

function recordCheckoutOrder(order) {
    const orders = getOrderHistory();
    orders.push(order);
    saveOrderHistory(orders);
    updateSalesDashboard();
}

async function sendOrderToGoogleSheet(order) {
    if (!ORDER_SHEET_URL) return;

    try {
        // text/plain dipakai supaya Apps Script menerima request sederhana
        // tanpa preflight CORS yang tidak diperlukan.
        await fetch(ORDER_SHEET_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'order',
                ...order
            }),
            keepalive: true
        });
    } catch (error) {
        // WhatsApp tetap dilanjutkan walaupun pencatatan server gagal.
        console.error('Gagal mengirim pesanan ke Google Sheet:', error);
    }
}

function checkoutViaWhatsApp() {
    if (!cart.length) {
        alert('Keranjang masih kosong. Pilih produk terlebih dahulu.');
        return;
    }

    const name = document.getElementById('customer-name')?.value.trim();
    const address = document.getElementById('customer-address')?.value.trim();
    const email = document.getElementById('customer-email')?.value.trim().toLowerCase();
    const note = document.getElementById('customer-note')?.value.trim();

    // Nama, alamat, dan email wajib diisi saat checkout dari keranjang.
    // Promo tetap opsional.
    if (!name || !address || !email) {
        openCart();
        alert('Isi nama, alamat, dan email terlebih dahulu ya.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        openCart();
        alert('Masukkan email yang valid ya.');
        return;
    }

    const subtotal = getSubtotal();
    const discount = getDiscount(subtotal);
    const total = Math.max(0, subtotal - discount) + SHIPPING_COST;

    const lines = cart.map((item, i) => [
        `${i + 1}. ${item.name}`,
        `   ${item.qty} x ${rupiah(item.price)}`,
        `   Total: ${rupiah(item.price * item.qty)}`
    ].join('\n'));

    const promoInfo = appliedPromo && PROMOS[appliedPromo.code]
        ? `${appliedPromo.code} (${PROMOS[appliedPromo.code].label})`
        : 'Tidak digunakan';

    const message = [
        'PESANAN JAMURIN',
        '',
        'DETAIL PESANAN',
        '━━━━━━━━━━━━━━━━━━',
        ...lines,
        '',
        'RINGKASAN',
        '━━━━━━━━━━━━━━━━━━',
        `Subtotal : ${rupiah(subtotal)}`,
        `Promo    : ${promoInfo}`,
        `Diskon   : ${rupiah(discount)}`,
        `Ongkir   : ${rupiah(SHIPPING_COST)}`,
        `*TOTAL    : ${rupiah(total)}*`,
        '',
        'DATA PEMBELI',
        '━━━━━━━━━━━━━━━━━━',
        `Nama     : ${name}`,
        `Email    : ${email}`,
        `Alamat   : ${address}`,
        `Catatan  : ${note || '-'}`,
        '',
        'KONFIRMASI',
        '━━━━━━━━━━━━━━━━━━',
        'Halo Jamurin, saya ingin memesan produk di atas.',
        'Mohon konfirmasi ketersediaan dan pembayarannya ya'
    ].join('\n');

    const orderItems = cart.map(item => ({
        name: item.name,
        price: Number(item.price),
        qty: Number(item.qty)
    }));

    const order = {
        action: 'order',
        date: new Date().toISOString(),
        name,
        email,
        address,
        note: note || '',
        items: orderItems,
        subtotal,
        promo: appliedPromo?.code || '',
        discount,
        shipping: SHIPPING_COST,
        total,
        totalItems: orderItems.reduce((sum, item) => sum + item.qty, 0)
    };

    // Simpan salinan lokal untuk dashboard di browser ini.
    recordCheckoutOrder(order);

    // Kirim salinan yang sama ke Google Sheet.
    sendOrderToGoogleSheet(order);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
}

// KEDUA tombol menggunakan fungsi checkout yang sama.
checkoutButton?.addEventListener('click', checkoutViaWhatsApp);
ctaWaButton?.addEventListener('click', (e) => {
    e.preventDefault();
    checkoutViaWhatsApp();
});

updateCart();
updateSalesDashboard();

// ===== BERLANGGANAN PROMO EMAIL =====
// Setelah Google Apps Script dideploy, tempel URL Web App di bawah ini.
const PROMO_SUBSCRIBE_URL = 'https://script.google.com/macros/s/AKfycbzt6hn60S6fl0PtnqQ9kUaAHLYPW-BKaAputzUvugtuXLZ2NDZIC3vZZ3uK3rmkYtug/exec';
// Endpoint Google Apps Script yang sama dipakai untuk mencatat pesanan ke Google Sheet.
const ORDER_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzt6hn60S6fl0PtnqQ9kUaAHLYPW-BKaAputzUvugtuXLZ2NDZIC3vZZ3uK3rmkYtug/exec';

const promoSubscribeForm = document.getElementById('promo-subscribe-form');
const promoEmailInput = document.getElementById('promo-email');
const promoSubscribeMessage = document.getElementById('promo-subscribe-message');

promoSubscribeForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = (promoEmailInput?.value || '').trim();
    if (!email) return;

    if (!PROMO_SUBSCRIBE_URL) {
        if (promoSubscribeMessage) promoSubscribeMessage.textContent = 'Fitur promo belum dihubungkan ke server.';
        return;
    }

    const button = promoSubscribeForm.querySelector('button[type="submit"]');
    if (button) button.disabled = true;
    if (promoSubscribeMessage) promoSubscribeMessage.textContent = 'Menyimpan email...';

    try {
        const response = await fetch(PROMO_SUBSCRIBE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ email })
        });
        const result = await response.json();
        if (!result.ok) throw new Error(result.message || 'Gagal menyimpan email.');

        if (promoSubscribeMessage) promoSubscribeMessage.textContent = 'Berhasil! Kamu akan menerima info promo Jamurin.';
        promoSubscribeForm.reset();
    } catch (error) {
        if (promoSubscribeMessage) promoSubscribeMessage.textContent = 'Gagal berlangganan. Coba lagi.';
        console.error(error);
    } finally {
        if (button) button.disabled = false;
    }
});
