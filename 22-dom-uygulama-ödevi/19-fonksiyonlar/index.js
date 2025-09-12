// let sayi1 = 10;
// let sayi2 = 20 ;
// let toplam  = sayi1 + sayi2 ;
// let sayi3 = 30;
// let sayi4 = 40 ;
// let toplam2 = sayi4 + sayi3 ;

// console.log(toplam);
// console.log(toplam2);

   //! Üsttekinin kısa yolu basit toplama foncsiyonu. 
// function sayiToplami (sayi1,sayi2){
//     let toplam = sayi1 + sayi2;
//    console.log(toplam);
// }
// sayiToplami(10,20)
// sayiToplami(30,40)

//! Üsteki gibi ama sonsuz sayı elde ediyoruz gelişmiş goksiyon. 
//    let toplam = 0;
// function sayiToplami(...sayilar) {
//    for (let sayi of sayilar){
//     toplam += sayi
//    }
    
// }
// sayiToplami(10,20,30,40 )
// console.log(toplam);


//!Yaş hesaplama  
function yasheseplama (dogumyili) {
    let yil = new Date().getFullYear();
    console.log(yil - dogumyili);
    
}
yasheseplama(1920)
yasheseplama(2000)
yasheseplama(2007)
yasheseplama(2005)
yasheseplama(2004)
yasheseplama(2002)
yasheseplama(2002)
yasheseplama(2001)
yasheseplama(1997)
yasheseplama(1998)
yasheseplama(1999)