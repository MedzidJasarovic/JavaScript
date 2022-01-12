// PRVI CAS-----------------------------------------------------------

/* broj1 = prompt("Unesi prvi broj,trazi daris ");
broj2 = prompt("Unesi drugi broj, trazi daris ");
broj3 = parseInt(broj1) + parseInt(broj2);
console.log(broj3);   



 /*  prompt("Ovo sad ovde ce da ti racuna broj dana u broju godina");
brojgodina=prompt("Unesite broj godina")
brojmeseci=parseInt(brojgodina)*365;
brojdana=parseInt(brojgodina)*365;
console.log("U",brojgodina,"godina ima",brojmeseci,"meseci i",brojdana,"dana");


*/
//----------------------------------------------------------------------------------
/*

let niz = [Imena,Prezimena];     //deklaracija funkcije i niza
const funkcija = (niz) => {
  for (i; i < niz.lenght; i++) {
    if (i != 4) {
      console.log(i);
    }
  }
};

*/

/*
let Imena = { ime: "Medzid", ime2: "Belma" }; //kreiranje objekta 
let Prezimena = { prezime: "Jasarovic", prezime2: "Maljanovic" };

let slova = [a, b, c, d, e, f, g];
let rezultat = slova.length; //dobijanje duzine niza
let odabranoslovo=slova[5]//pristupanje clana niza po indeksu

let imeee = Imena.ime; // uzimanje vrednosti kljuca iz objekta
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
*/

// 2 CAS   (BOOLEAN OPERATORI)------------------------------------------------------------------------------

/*null  - rezervisano mesto u memoriji bez brednosti
 = uzima vrednost
 == iste vrednosti
 === iste vrednosti i tio (strick equal)


  false || false === false
  false || true === true
  true  || false === true
  true  || true === true


  false && false === false
  true && false === false
  false && true === false
  true && true === true

  

broj1 = prompt("Unesi prvi broj");
broj2 = prompt("Unesi drugi broj");
console.log(parseInt(broj1) < parseInt(broj2));


b1 = prompt("Unesi broj");
console.log(parseInt(b1) % 2 == 0);



ime = prompt("unesite vase ime");
duzina = ime.lenght;
console.log(duzina);     // .log daje duzinu stringa


|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

*/

/* TRECI CAS (MANIPULACIJA STRINGOVIMA)
----------------------------------------------------------------------------------
p = "Jasarovic";
a = prompt("Unesi ime");
console.log("Uppercase ime je " + a.toUpperCase());
console.log("Lowercase ime je " + a.toLowerCase());
console.log(a.includes("a"));
console.log(a.concat(p));
console.log(a.indexOf("e"));
console.log(a.concat(p).slice(7, 13)); // ako se koriste - vrednosti npr -1 je prvi karakter sa kraja stringa
console.log(a.replace("Medzid", "Masina"));
text = "masina,kukurek,oreo,Cazim,kakoolol";
console.log(text.split(","));
console.log(
  `Ovo je neki broj ${
    3 - 4 - 113 + 1223 * 2 - 1111
  } i to je uradjeno poput backtexta`
);
  
 


a = prompt("Unesite svoju sifru");
b = prompt("Ponovite svoju sifru");
if (a == b) {
  console.log("Uneli ste tacnu sifru");
} else {
  console.log("Uneta sifra nije tacna");
}



b = prompt("Unesite broj izmedju 1 i 10");
if (b >= 1 && b <= 10) {
  console.log("Tacno masino");
} else {
  console.log("Netacno gr");
}

    

//zadatak od 2 intedzera izbaci veci
*/

/*
b = prompt("Ubaci prvi broj");
a = prompt("Unesi drugi broj");
if (a > b) {
  console.log("veci je", a);
} 
if(a<b) {
  console.log("veci je", b);
}
if(a=b)
{
  console.log("jednaki su")
}
else()
{
  console.log("Niste uneli dobro brojeve gr")
}
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

*/

//---------------------------------------------------------------------------
//  JAVA SCRIPT 4. CAS

/*
a = 10;

if (a >= 10) {
  console.log("A je vece ili jednako 10");
  console.log("A je vece ili jednako 10");
  console.log("A je vece ili jednako 10");
  console.log("A je vece ili jednako 10");
  console.log("A je vece ili jednako 10");
  console.log("A je vece ili jednako 10");
}

console.log("Posle if-a");



if()

  else if()         sve je jedan blok
     
    else()

    */

//5 11 jutro 11 18 dan 18 20 vece 20 5 Noc   ZADATAK GRRRRRR
/*
|
|
|
|
|
|
|
a = prompt("Unesi koliko je sati (samo sate!!!!)");
if (a >= 5 && a <= 11) {
  console.log("Sad je jutro");
} else if (a > 11 && a < 18) {
  console.log("Sad je dan");
} else if (a > 18 && 20) {
  console.log("Sad je vece");
} else if ((a > 20 && 24) || (a > 0 && a < 5)) {
  console.log("Sad je noc");
} else if (a > 24 || a < 0) {
  console.log("Uneli ste pogresan broj");


  // sve ovo moze prakticnije

  1.zadatak ocena i bodovi
  2.da li je moguc trougao od datih stranice
}






a = prompt("Unesi broj");
console.log("a je a=", a);
*/
// unos = prompt("Unesi rec");
// for (i = 1; i < unos.lenght; i++) {
//   console.log(unos[i]);
// }

/*

zvezda = "";
ponavljanje = prompt("Unesite broj redova zvezdaranja");
for(j=0;j<ponavljanje;j++)
{
  space+=" "
}
for(i=0;i<ponavljanje;i++)
{
  zvezda+="*"
  space-=""
  console.log
}




for (i = 0; i < ponavljanje; i++) {
  zvezda += " * ";
  console.log(zvezda);
}

//deli text kad nadje space
text1 = "Ovoj je prvi tekst";
text2 = "Ovo je druggi text";
console.log(text1.concat(text2));

text1 = "Ovo je kao neka moja recenica";
n = text1.split(" ");              
for (i = 0; i < n.length; i++) {
  console.log(n[i]);
}

text1 = "Tekst";
for (i = 0; i < 5; i++) {
  console.log(text1);
}
// ispisuje samo elemente niza deljive sa 5
niz = [1, 2, 3, 4, 5, 6, 8, 12, 13, 14, 15, 16, 17, 18, 12, 5000, 6900, 69]; 
for (i = 0; i < niz.length; i++) {
  if (niz[i] % 5 == 0) {
    console.log(niz[i]); 
  }
}
// izracunava zbir svih clanova niza
summ = 0;
niz = [1, 2, 3, 4, 5, 6, 8, 12, 13, 14, 15, 16, 17, 18, 12, 5000, 6900, 69]; // izracunava zbir svih clanova niza
for (i = 0; i < niz.length; i++) {
  summ += niz[i];
}
console.log(summ);

//kreirannje fukcije koja izracunava proizvod dva uneta broja
function saberi() {
  a = prompt("Unesite prvi broj");
  b = prompt("Unesite drugi broj"); //kreirannje fukcije koja izracunava proizvod dva uneta broja
  summ = a * b;
  console.log(summ);
}
saberi();

  //Zadatak menja znak unetog broja
broj = prompt("Unesite broj koji zelite da pretvorite");
function pretvori(broj) {
  if (broj == 0) { 
    console.log("Uneti broj je nula i ne moze mu se menjati znak");           //Zadatak menja znak unetog broja
  } else {
    pretvoren = broj * -1;
  }
  console.log(pretvoren);
}
pretvori(broj);
//Zadatak od korisnika uzima tekst i broj ponavljanja teksta i tako ga ispisuje

function napisi() {
  tekst = prompt("Unesite tekst koji zelite da se ispise");
  ponavljanje = prompt("Unesite broj ponavljanja teksta");
  if (tekst == "") {
    console.log("Niste uneli tekst");
  }
  if (ponavljanje <= 0) {
    console.log("Unesite pozitivan broj ponavljanja"); //Zadatak od korisnika uzima tekst i broj ponavljanja teksta i tako ga ispisuje
  }
  for (i = 0; i < ponavljanje; i++) {
    console.log(tekst);
  }
}
napisi();
// shit zadatak

for (i = 1; i <= 10; i++) {
  console.log(i + " kvadriran~" + i * i); //shit zadatak
}

// pise piramidu pomocu zvezda
counter = "";
for (i = 0; i < 10; i++) {
  counter += " *";
  console.log(counter); //pise piramidu pomocu zvezda
}

for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i + " ovaj broj je paran");
  } else {
    console.log(i + " Ovaj broj je neparan");
  }
}
*/
a = prompt("Unesite vrednost", "");
alert(a);
