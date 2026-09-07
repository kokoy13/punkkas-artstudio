// Ganti nilai di bawah ini dengan data asli sebelum situs dipublikasikan.
export const site = {
  name: "Punk'kas Art Studio",
  tagline: "Pangkas rambut dan dark art studio di jantung terminal lama.",
  instagramHandle: "punkkas_artstudio",
  instagramUrl: "https://www.instagram.com/punkkas_artstudio",
  whatsappNumber: "6282391292827",
  whatsappMessage: "Halo Punk'kas, saya mau pangkas rambut",
  address: "Terminal Guguak Katitiran, Batusangkar, Tanah Datar, Sumatera Barat",
  // Pin resmi "Punkkas Art Studio" di Google Maps (maps.app.goo.gl/S5BeNySih1rMfzP49).
  mapsUrl: "https://maps.app.goo.gl/S5BeNySih1rMfzP49",
  hours: [
    { days: "Senin - Jumat", time: "19.00 - 23.00" },
    { days: "Sabtu - Minggu", time: "16.00 - 23.00" },
  ],
} as const;

export function whatsappLink(message = site.whatsappMessage) {
  const params = new URLSearchParams({
    phone: site.whatsappNumber,
    text: message,
    type: "phone_number",
    app_absent: "0",
  });
  return `https://api.whatsapp.com/send/?${params.toString()}`;
}

function openWindow(date: Date) {
  const day = date.getDay(); // 0 Sun - 6 Sat
  const isWeekend = day === 0 || day === 6;
  return { start: isWeekend ? 19 * 60 - 3 * 60 : 19 * 60, end: 23 * 60 };
}

export function isOpenNow(date = new Date()) {
  const minutes = date.getHours() * 60 + date.getMinutes();
  const { start, end } = openWindow(date);
  return minutes >= start && minutes < end;
}

// Label jam buka berikutnya untuk ditampilkan saat status sedang tutup.
export function nextOpenLabel(date = new Date()) {
  const minutes = date.getHours() * 60 + date.getMinutes();
  const { start } = openWindow(date);
  if (minutes < start) {
    return `Buka jam ${String(Math.floor(start / 60)).padStart(2, "0")}.00`;
  }
  const tomorrow = new Date(date);
  tomorrow.setDate(date.getDate() + 1);
  const { start: tomorrowStart } = openWindow(tomorrow);
  return `Buka besok jam ${String(Math.floor(tomorrowStart / 60)).padStart(2, "0")}.00`;
}

// Harga rata untuk semua layanan pangkas di Punk'kas.
export const flatPrice = "20.000";

export const services = [
  "Pangkas dewasa",
  "Pangkas anak-anak",
  "Cukur jenggot",
  "Cuci rambut",
] as const;
