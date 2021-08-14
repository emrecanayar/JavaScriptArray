//Reduce metodu bir arrayin tüm elemanlarına uygulanır ve geriye tek bir değer döndürür.

const numbers = [5, 6, 7, 10];

const toplam = (x, y) => {
  return x + y;
};

console.log(numbers.reduce(toplam));
