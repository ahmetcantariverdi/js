//! fonksiyonlar kendi scope alanlarını oluştueue.
//! var ile if block içerisinde scope sıkınto oluşturur.
//! let ve const ile block için scope oluşumunu saağlayabilir.

let kullanici = "globale scope: Emin";
const isim = "Emin ";
isim = "Nur";

function isimYazdir() {
    let kullanici = "function scope: Nur";
    console.log(kullanici);
} 
function isimYazdir2() {

    console.log(kullanici);
} 
if (true){
    let kullanici = "if scope: Mehmet";
    console.log(kullanici);
    
}
console.log(kullanici);
isimYazdir()
isimYazdir2()
