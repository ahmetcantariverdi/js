let histry = new Date();

let result ;
//! get metots
result = histry.getDate();/*ayın kaçında olduğumuzu gösterir */
result = histry.getDay();/* haftanın hangi gününde olduğumuzu sayı ile belirtir "0 pazar ve 6 cumartesi"*/
result = histry.getFullYear(); /*yılı  österi günceldir aynı diğerleri gibi */
result = histry.getHours(); /* güncel olark saati gösterir. */
result = histry.getTime(); /*mlisaniye yi gösterir. */

//!Tarihi güncelleme methotları - Set methods
//  histry.setFullYear(2027);
histry.setMonth(2);
histry.setDate (15);
console.log(histry);
//! Doğum Tarihi
let dateBirth = new Date(1998,4,14);
result =histry.getFullYear() - dateBirth.getFullYear();


console.log(result);
