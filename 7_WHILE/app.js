/*
a = prompt("Unesite sifru, mora biti makar 6 karaktera duga");
while (a.length < 6) {
  alert("SIFRA NIJE DOVOLJNO DUGA");
  a = prompt("Pokusajte ponovo");
}


a = prompt("Unesite broj ili END");
while (a !== "END") {
  a = prompt("Nastavi da unosis onda ...");
}
*/
let a = parseInt(prompt("Unesite broj"));
let summ = 0;
while (a >= 0) {
  summ += a;
  a = parseInt(prompt("Nastavi da unosis"));
}
console.log(summ);
