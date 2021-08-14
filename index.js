console.log("Merhaba Javascript");

//Geleneksel JavaScript fonksiyon tanımlamaları.

function Topla(x, y) {
  return x + y;
}

const Topla = function (x, y) {
  return x + y;
};

//Arrow Function kullanımı

const Topla = (x, y) => x + y;

const Fark = (x, y) => {
  return x - y;
};

const Carp = (x) => x * 12;

let Sonuc = (x, y, z) => {
  let sonuc = x + y + z;
  return sonuc;
};
