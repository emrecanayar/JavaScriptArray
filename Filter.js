//Filter metodu ilgili diziye bir filtreleme işlemi yapar ve belirtilen filtreye göre elemanları geriye dizi olarak döndürür.

const personel = [
  { id: 1, isim: "Emre Can", soyisim: "Ayar", sehir: "İstanbul" },
  { id: 2, isim: "Mert Can", soyisim: "Ayar", sehir: "Trabzon" },
  { id: 3, isim: "Büşra", soyisim: "Ekinci", sehir: "Giresun" },
  { id: 4, isim: "Yaren", soyisim: "Oskay", sehir: "Samsun" },
];

const filterArray = personel.filter((item) => {
  return item.sehir.length > 6;
});

console.log(filterArray);