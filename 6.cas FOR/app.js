/* unos = prompt("Unesi rec");
for (i = 1; i < unos.lenght; i++) {
  console.log(unos[i]);
}


for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j); //TABLICA MNOZENJA
  }
}


zvezdicagobr = "";
for (i = 1; i <= 10; i++) {
  zvezdicagobr += " * ";                     //Pise gomilu zvezdica
  console.log(zvezdicagobr);
}


rec = prompt("Unesite datu rec ili recenicu");

cer = "";
for (i = rec.length - 1; i >= 0; i--) {
  cer += rec[i];
}
console.log(cer);

if (rec === cer) {
  console.log("Rec je palindaaaagradsa");        //JEBENI ZADATAK DA ODREDIS DAL JE REC PALINDROM AAFKFASLJ
} else {
  console.log("Nije palinadadada");
}



pisanje = "";
pisibroj = 0;
for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    pisibroj += 1;
    pisanje += " " + pisibroj + " ";
    console.log(pisanje);
  }
}

unos = prompt("Unesite broj: ");
for (i = 1; i <= unos; i++) {
  summ = "";
  for (j = 1; j <= i; j++) {
    summ += i;
  } // pise 1 22 333 4444 55555
  console.log(summ);
}
samo koristi *=




--------------------------------------------------------------------------Vezbanje-------------------------------------------------------------
*/
rec = prompt("Unesi rec gosn");
for (i = 0; i < rec.length; i++) {
  // PISE SE LENGTH alo
  console.log(rec[i]);
}
