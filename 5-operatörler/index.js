let number1 = 10 ;
let number2 = 20 ;
let number3 = 30 ;
//! 1 Aritmatik Oparetörler
//? +,-,*,%,/,++,--
result= number1 + number3 ;
result= number1 - number3 ;
result= number1 / number3 ;
result= number1 * number3 ;
result= number1 % 9 ;
result= number1++;
result= ++number1;
console.log(result);

//! 2 Atama Oparetörleri
//? =,+=,-=,*=,/=,%=
result= number1;
result+= number2;
result-= number2;
result*= number2;
result/= number2;
result%= number2;
console.log(result);
//! 3 Karşılaştırma Oparetörleri
//? ==,!= , === ,< ,>=, <=
result = number1 != number2; 
result = 10 === "10"; /*tip kontrol , diğer tip*/ 
result = number1 != number2; 
result = number1 > number2; 
result = number1 < number2; 
 result = number1 <= number2; 
 console.log(result);

//! 4 Mantıksal Oparetörler
//? &&:ve,  ||: veya, !: tersi

// &  Ve: ikişartı da sağlaması lazım.
console.log(number1 !== number2 && number1 < number2);

// || veya : Turue için bir şartı sağlamasa yeter.
 
console.log(number1>number3 || number1==number1);
