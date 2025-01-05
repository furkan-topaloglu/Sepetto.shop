
// String ve metotları
const ilkisim="Furkan";
const lastname= "Topaloğlu";
const age="22";
let hobi="Fenerbahçe Sinema Spor Kitap";

let veri;

// string birleştirme

veri=ilkisim+" "+lastname;

veri="Furkan";
veri +=" Topaloğlu";

veri= 'Benim adım  '+ilkisim+' '+lastname+' '+age+'ve Gebzede yaşıyorum';
veri=ilkisim.concat(' ',lastname);


veri= veri.toUpperCase();

veri=veri.toLowerCase();

//veri=veri.substring(3,7);
//veri=veri.indexOf("u");
//veri=veri.replace('Furkan','Kaan');
//veri=veri.length;
veri=hobi.split(' ');

console.log(veri);
console.log(typeof veri);