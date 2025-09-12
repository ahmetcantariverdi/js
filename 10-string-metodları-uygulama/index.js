let url = "https://www.bilgisayargenetigi.com";
let youtube = "Bilgisayar Genetiği";
let result;

//! Karakter sayısı bulma
result = url.length;
result = youtube.length;
result = youtube.replace(" ", " ").length;

// youtube karakteri kaç değişkenden oluşuyor 
result = youtube.split(" ").length;
result = url.split(".");

//! kanal adı başlangıç kontrol
result = youtube.startsWith("Bilgisayar");
// if{
//     console.log("yapılacaklar");
// }
// else{
//     console.log("false oldu");
// }
// console.log(result);

// kelime kontrolü
if (youtube.indexOf("Genetiği") > -1) {
    console.log("çalıştı");
}
else {
    console.log("Çalışmadı");
};

//! url ve youtube değişken birleştirme

youtube = youtube.toLowerCase().replace(" ", "-");
url = url.replace("com", "com/");
const newurl = url.replace(url, url + youtube)

console.log(newurl);
