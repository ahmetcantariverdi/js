let meyve = ["elma","armut","karpuz","avakado","ejder meyvesi"];

console.log(meyve[0]);
console.log(meyve[1]);
console.log(meyve[2]); //?şimdiye kadar böyle yapardık bu uzun ve yorucu bir yoldur .
console.log(meyve[3]);
console.log(meyve[4]);
console.log(meyve[5]);

for( let i = 0; i < meyve.length; i++){
    console.log(meyve [i]);
}

//! 0 dan 100'e kadar yazıları yazdır.
for( let i = 0; i <= 100; i = i +2 ){
console.log(i);
}

//! Sayı toplama 
// let sayilar =  [10,20,30,200,5,12,4];
// console.log( sayilar[0]+ sayilar[1]+sayilar[2]+sayilar[3]+sayilar[4]+sayilar[5]+sayilar[6]); //? Eski yöntem
 
// let toplam = 0;
// for (let i = 0; i < sayilar.length; i++) {
//  console.log(toplam = toplam + sayilar[i]); 
// }

// //! Kısa yol index 
// let sayilar =  [10,20,30,200,5,12,4];
// let toplam = 0;
// for (let i in sayilar){
//     console.log(toplam += sayilar[i]);
// }

// //! Direk sayıları alma 
// let sayilar =  [10,20,30,200,5,12,4];
// let toplam = 0;
