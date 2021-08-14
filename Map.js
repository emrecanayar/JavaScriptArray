const personel = [
  { id: 1, isim: "Emre Can", soyisim: "Ayar", sehir: "İstanbul" },
  { id: 2, isim: "Mert Can", soyisim: "Ayar", sehir: "Trabzon" },
  { id: 3, isim: "Büşra", soyisim: "Ekinci", sehir: "Giresun" },
  { id: 4, isim: "Yaren", soyisim: "Oskay", sehir: "Samsun" },
];

//Map fonksiyonu forEach fonksiyonun aksine geriye bir dizi sonucu döndürür.

const newArray = personel.map((item) => item.sehir);
console.log(newArray);

personel.map((item) => console.log(item.isim));
