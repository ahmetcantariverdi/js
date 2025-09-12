let products = ["iphone 15", "samsung a72","xiaomi note 12"]
let result ;

 result = products ;
//! arey to string
// result = products.toString(); //stringe çevirir.
// result = products.join(""); //stringe çevirir ve ayırma yerlerini yani , leri istediğimiz değişkene çevirebiliriz.

//! Diziden eleman silme  
// result= products.shift();//İlk elemanı siler geri döndürür.
// result= products.pop();;//son elemanı siler geri döndürür


//! Diziye eleman ekleme 
// result= products.push("huwai");//sonuna bir ekleme yapar
// result= products.unshift("huwai");//başına bir ekleme yapar

//!Dizi birleştirme
let urunler1 = ["asus","hp"]
let urunler2 = ["casper","app"]
let urunler3 = ["exper","acer"]
let urunler4= ["dell","samsung"]

// result = urunler1.concat(urunler2,urunler3,urunler4);//Dizileri iç içe ekleme yi sağlar

// result= urunler1.splice(0,0, urunler2);//bir den fazla  dizide ekleme yapabilir.
// result= urunler1.splice(0,0, elma);//bir dizide ekleme yapabilir.
result= urunler1.splice(0, 2);// birinci elemanı siler ve sayıyı arttırdıkça silinen eleman sayısıda aynı çlçüde artar.

console.log(result);
console.log(urunler1);
