//Find metodu ilgili array içerisinde belirtilen şarta göre arama işlemi yapar ve bulduğu ilk değeri geriye döndürür.
const personel = [
  { id: 1, isim: "Emre Can", soyisim: "Ayar", sehir: "İstanbul" },
  { id: 2, isim: "Mert Can", soyisim: "Ayar", sehir: "Trabzon" },
  { id: 3, isim: "Büşra", soyisim: "Ekinci", sehir: "Giresun" },
  { id: 4, isim: "Emine", soyisim: "Oskay", sehir: "Samsun" },
];

const aranaDeger = personel.find((item) => item.isim.startsWith("E"));
console.log(aranaDeger);
