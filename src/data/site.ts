// Ganti nilai di bawah ini dengan data asli sebelum situs dipublikasikan.
export const site = {
  name: "Punk'kas Art Studio",
  tagline: "Pangkas rambut dan dark art studio di jantung terminal lama.",
  instagramHandle: "punkkas_artstudio",
  instagramUrl: "https://www.instagram.com/punkkas_artstudio",
  // TODO: ganti dengan nomor WhatsApp asli (format 62xxxxxxxxxx, tanpa spasi/plus)
  whatsappNumber: "6281234567890",
  whatsappMessage: "Halo Punk'kas, saya mau pangkas rambut",
  address: "Terminal Guguak Katitiran, Batusangkar, Tanah Datar, Sumatera Barat",
  mapsQuery: "Terminal Guguak Katitiran, Batusangkar",
  hours: [
    { days: "Senin - Jumat", time: "19.00 - 23.00" },
    { days: "Sabtu - Minggu", time: "16.00 - 23.00" },
  ],
} as const;

export function whatsappLink(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function isOpenNow(date = new Date()) {
  const day = date.getDay(); // 0 Sun - 6 Sat
  const minutes = date.getHours() * 60 + date.getMinutes();
  const isWeekend = day === 0 || day === 6;
  const start = isWeekend ? 16 * 60 : 19 * 60;
  const end = 23 * 60;
  return minutes >= start && minutes < end;
}

// TODO: konfirmasi ulang daftar layanan dan harga ke pemilik sebelum publish.
export const services = [
  { name: "Pangkas rambut dewasa", price: "25rb - 35rb" },
  { name: "Pangkas rambut anak", price: "20rb - 30rb" },
  { name: "Cukur jenggot dan rapikan", price: "15rb - 20rb" },
  { name: "Pangkas plus cuci rambut", price: "35rb - 45rb" },
] as const;
