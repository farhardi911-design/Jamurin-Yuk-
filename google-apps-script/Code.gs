// ===== JAMURIN GOOGLE APPS SCRIPT =====
// Satu Web App untuk:
// 1) menyimpan subscriber email
// 2) menyimpan detail checkout ke Google Sheet
//
// Buat Google Sheet, buka Extensions > Apps Script,
// lalu paste file ini dan Deploy sebagai Web app.
// Execute as: Me
// Who has access: Anyone

const SHEET_ORDERS = 'Orders';
const SHEET_SUBSCRIBERS = 'Subscribers';
const ADMIN_EMAIL = 'GANTI_EMAIL_ADMIN_DI_SINI';

function doPost(e) {
  try {
    const data = JSON.parse(e?.postData?.contents || '{}');

    if (data.action === 'order') {
      return saveOrder_(data);
    }

    return saveSubscriber_(data);
  } catch (err) {
    return json_({ ok: false, message: err.message });
  }
}

function saveOrder_(data) {
  const sheet = getSheet_(SHEET_ORDERS, [
    'Waktu', 'Nama', 'Alamat', 'Catatan', 'Produk',
    'Jumlah', 'Subtotal', 'Promo', 'Diskon', 'Ongkir', 'Total'
  ]);

  const items = Array.isArray(data.items) ? data.items : [];
  const productText = items.map(item =>
    `${String(item.name || '')} x ${Number(item.qty || 0)}`
  ).join(' | ');

  const quantity = items.reduce((sum, item) => sum + Number(item.qty || 0), 0);

  sheet.appendRow([
    new Date(),
    String(data.name || ''),
    String(data.address || ''),
    String(data.note || ''),
    productText,
    quantity,
    Number(data.subtotal || 0),
    String(data.promo || ''),
    Number(data.discount || 0),
    Number(data.shipping || 0),
    Number(data.total || 0)
  ]);
  formatSheet_(sheet, [
    'Waktu', 'Nama', 'Alamat', 'Catatan', 'Produk',
    'Jumlah', 'Subtotal', 'Promo', 'Diskon', 'Ongkir', 'Total'
  ]);

  // Opsional: kirim notifikasi email ke admin.
  if (ADMIN_EMAIL && !ADMIN_EMAIL.startsWith('GANTI_')) {
    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: 'Pesanan baru Jamurin',
      htmlBody:
        '<h3>Pesanan baru Jamurin</h3>' +
        '<p><strong>Nama:</strong> ' + escapeHtml_(data.name || '-') + '</p>' +
        '<p><strong>Alamat:</strong> ' + escapeHtml_(data.address || '-') + '</p>' +
        '<p><strong>Produk:</strong> ' + escapeHtml_(productText || '-') + '</p>' +
        '<p><strong>Total:</strong> Rp ' + Number(data.total || 0).toLocaleString('id-ID') + '</p>'
    });
  }

  return json_({ ok: true, message: 'Pesanan tersimpan.' });
}

function saveSubscriber_(data) {
  const email = String(data.email || '').trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json_({ ok: false, message: 'Email tidak valid.' });
  }

  const sheet = getSheet_(SHEET_SUBSCRIBERS, ['Waktu', 'Email']);
  const lastRow = sheet.getLastRow();

  const emails = lastRow > 1
    ? sheet.getRange(2, 2, lastRow - 1, 1)
        .getValues().flat().map(String).map(v => v.toLowerCase())
    : [];

  if (emails.includes(email)) {
    return json_({ ok: true, message: 'Email sudah terdaftar.' });
  }

  sheet.appendRow([new Date(), email]);
  formatSheet_(sheet, ['Waktu', 'Email']);

  if (ADMIN_EMAIL && !ADMIN_EMAIL.startsWith('GANTI_')) {
    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: 'Subscriber baru Jamurin',
      htmlBody:
        '<p>Ada pelanggan baru yang berlangganan promo Jamurin:</p>' +
        '<p><strong>' + escapeHtml_(email) + '</strong></p>'
    });
  }

  return json_({ ok: true, message: 'Berhasil.' });
}

function getSheet_(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);

  if (!sheet) {
    sheet = ss.insertSheet(name);
  }

  // Otomatis buat/rapikan header tabel.
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  formatSheet_(sheet, headers);

  return sheet;
}

function setupSheets() {
  getSheet_(SHEET_ORDERS, [
    'Waktu', 'Nama', 'Alamat', 'Catatan', 'Produk',
    'Jumlah', 'Subtotal', 'Promo', 'Diskon', 'Ongkir', 'Total'
  ]);

  getSheet_(SHEET_SUBSCRIBERS, ['Waktu', 'Email']);

  return 'Tabel Orders dan Subscribers siap dipakai.';
}

function formatSheet_(sheet, headers) {
  const lastRow = Math.max(sheet.getLastRow(), 1);
  const lastCol = headers.length;
  const range = sheet.getRange(1, 1, lastRow, lastCol);

  // Semua isi tabel otomatis rata tengah dan wrap.
  range
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle')
    .setWrap(true);

  // Header otomatis dibuat tebal dan tetap di atas.
  sheet.getRange(1, 1, 1, lastCol)
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle')
    .setWrap(true);

  sheet.setFrozenRows(1);

  // Lebar kolom otomatis mengikuti isi, lalu diberi batas supaya tidak berantakan.
  for (let col = 1; col <= lastCol; col++) {
    sheet.autoResizeColumn(col);
    const width = sheet.getColumnWidth(col);
    sheet.setColumnWidth(col, Math.min(Math.max(width + 12, 90), 260));
  }

  // Kolom teks panjang dibuat lebih lebar.
  if (lastCol >= 5) sheet.setColumnWidth(5, 180); // Catatan
  if (lastCol >= 6) sheet.setColumnWidth(6, 220); // Produk
  if (lastCol >= 4) sheet.setColumnWidth(4, 220); // Alamat
}

function escapeHtml_(value) {
  return String(value).replace(/[&<>'"]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[c]));
}

function json_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}


// ===== ADMIN DASHBOARD (server-side protected) =====
// Password admin disimpan di Script Properties, bukan di JavaScript website.
// Jalankan setupAdmin() sekali setelah mengganti ADMIN_PASSWORD.
const ADMIN_PASSWORD = 'GANTI_PASSWORD_ADMIN_DI_SINI';
const ADMIN_TOKEN_TTL = 21600; // 6 jam

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Admin')
    .setTitle('Jamurin — Admin Dashboard');
}

function setupAdmin() {
  if (!ADMIN_PASSWORD || ADMIN_PASSWORD.startsWith('GANTI_')) {
    throw new Error('Ganti ADMIN_PASSWORD di Code.gs terlebih dahulu.');
  }
  PropertiesService.getScriptProperties().setProperty('JAMURIN_ADMIN_PASSWORD', ADMIN_PASSWORD);
  setupSheets();
  return 'Password admin tersimpan dan tabel Orders/Subscribers sudah disiapkan.';
}

function adminLogin(password) {
  const saved = PropertiesService.getScriptProperties().getProperty('JAMURIN_ADMIN_PASSWORD');
  if (!saved) return { ok:false, message:'Admin belum diset. Jalankan setupAdmin() sekali.' };
  if (String(password || '') !== saved) return { ok:false, message:'Password admin salah.' };

  const token = Utilities.getUuid();
  CacheService.getScriptCache().put('ADMIN_' + token, '1', ADMIN_TOKEN_TTL);
  return { ok:true, token };
}

function getAdminOrders(token) {
  if (!isAdminToken_(token)) return { ok:false, message:'Sesi admin habis.' };

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_ORDERS);
  if (!sheet || sheet.getLastRow() < 2) return { ok:true, orders:[] };

  const values = sheet.getDataRange().getValues();
  const orders = values.slice(1).map(row => ({
    date: formatAdminDate_(row[0]),
    name: String(row[1] || ''),
    address: String(row[2] || ''),
    note: String(row[3] || ''),
    items: parseProductText_(row[4]),
    totalItems: Number(row[5] || 0),
    subtotal: Number(row[6] || 0),
    promo: String(row[7] || ''),
    discount: Number(row[8] || 0),
    shipping: Number(row[9] || 0),
    total: Number(row[10] || 0)
  }));

  return { ok:true, orders };
}

function isAdminToken_(token) {
  return !!token && CacheService.getScriptCache().get('ADMIN_' + token) === '1';
}

function formatAdminDate_(value) {
  if (!(value instanceof Date)) return String(value || '-');
  return Utilities.formatDate(value, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm');
}

function parseProductText_(text) {
  return String(text || '').split(' | ').filter(Boolean).map(part => {
    const m = part.match(/^(.*) x (\d+(?:\.\d+)?)$/);
    return { name: m ? m[1] : part, qty: m ? Number(m[2]) : 0 };
  });
}
