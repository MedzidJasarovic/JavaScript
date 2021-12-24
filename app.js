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
*/

// 2 cas ------------------------------------------------------------------------------

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
*/

/* treci cas
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

*/

//zadatak od 2 intedzera izbaci veci

b = prompt("Ubaci prvi broj");
a = prompt("Unesi drugi broj");
if (a > b) {
  console.log("veci je", a);
} else {
  console.log("veci je", b);
}
