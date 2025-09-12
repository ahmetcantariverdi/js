const ad = "Ahmetcan ";
const soyad = "Tanriverdi ";
const yas = 18 ;
const sehir = "Ankara";
const meslek = "Full-stack öğrencisi";
const bio = "Benim adım ve soyadım "+ ad + soyad + "Yaşadığım yerse "+ sehir + "yaşımsa tam olark "+yas; 
// backtick daha kolay
const newbio = `Benim adım ${ad} soyadımsa ${soyad} Yaşadığım yerse ${sehir} ve tam olarak ${yas} yaşımdayım aynı zamanda ${meslek} 'yim umarım başarırım. `
console.log(newbio);
