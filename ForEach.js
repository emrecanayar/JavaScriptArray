//Javascript ForEach metodu.

const personel = [
  { id: 1, isim: "Emre Can", soyisim: "Ayar", sehir: "İstanbul" },
  { id: 2, isim: "Mert Can", soyisim: "Ayar", sehir: "Trabzon" },
  { id: 3, isim: "Büşra", soyisim: "Ekinci", sehir: "Giresun" },
  { id: 4, isim: "Yaren", soyisim: "Oskay", sehir: "Samsun" },
];

personel.forEach((item) => console.log(item));

personel.forEach((item) => console.log(item.isim));
