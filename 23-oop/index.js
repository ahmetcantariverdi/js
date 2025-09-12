//! Object
// let araba = {
//     renk: "mavi",
//     hiz: 0 ,
// };
// console.log(araba.renk);
// console.log(araba.hiz);

//! method
//  let araba = {
//     renk: "mavi",
//     hiz: 0,
//     hizlandir: function(deger){
//         this.hiz += deger;
//     },
// };

// araba.hizlandir(30)
// console.log(araba.hiz);

//! constructor ES5

// function Araba(renk){
//     this.renk = renk;
//     this.hiz = 0 ;
// } 

// Araba.prototype.hizlandizr = function(){
//     this.hiz += deger ;
// };

// const araba = new Araba("red");
// araba.hizlandizr(100)

// console.log(araba.renk);
// console.log(araba.hiz);

//! constructor ES6

// class Araba{
//    constructor(renk){
//     this.renk = renk;
//    }  
// }

// let araba = new Araba ( "siyah")
// console.log(araba.renk);

//! class ES6 ile  irlikte gelir 

// class Araba {
//     constructor(renk){
//         this.renk = renk ;
//         this.hiz = 0 ;
//     }
    
//     hizlandir(deger){
//         this.hiz += deger;
//     }
// }

// let arba = new Araba("siyah")
// console.log(araba.renk);
// arba.hizlandir(200)
// console.log(araba.hiz);

