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

rec = prompt("Unesi rec gosn");
for (i = 0; i < rec.length; i++) {
  // PISE SE LENGTH alo
  console.log(rec[i]);
}


for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(" " + i + " * " + j + " = " + j * i);
  }
}

zvezda = "";
// ponavljanje = prompt("Unesite broj redova zvezdaranja");
ponavljanje = 5;
for (i = 0; i < ponavljanje; i++) {
  zvezda += " * ";
  console.log(zvezda);
}


rec = prompt(
  "Unesite vi neku kao rec ili recenicu  i  ja ti kazem da li je palinda ili nije palida lolz"
);
cer = "";
for (i = rec.length - 1; i >= 0; i--) {
  cer += rec[i];
}
if (cer === rec) {
  console.log("Jeste palindaaa");
} else {
  console.log("Nije palinda");
}

-------------------------------------------------------------------------------------------------------------------- */
//Nadji zbir faktorijala  unetog broja, npr 5 -> 1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5
/*

faktorijal = 1;
faktorijalsumm = 0;
a = prompt("Unesite broj");

for (i = 1; i <= a; i++) {
  faktorijal *= i;
  faktorijalsumm += faktorijal;
}

console.log(faktorijalsumm);

//Drugi nacin
a = 6;
for (i = 1; i <= a; i++) {
  fakt = 1;
  for (j = a; j <= i; j++) {
    fakt = fakt * j;
  }
  console.log(fakt);
}

 //ispisuje ti kul tablicu mnozenja, probaj i videces
for (j = 1; j <= 10; j++) {
  red = "";
  for (i = 1; i <= 10; i++) {
    red += `${i * j} \t`;
  }
  console.log(red);
}

negativna = 0; /////////////////////////////////////////////////////////////////////////////Zadtak koji odredjuje srednju pozitivnu i srednju negativnu vrednost temperature
ncounter = 0;
pozitivna = 0;
pcounter = 0;
for (i = 1; i <= 10; i++) {
  temperatura = parseInt(prompt("Unesi temperaturu za:" + i + " dan"));
  if (temperatura < 0) {
    negativna += temperatura;
    ncounter++;
  } else if (temperatura > 0) {
    pozitivna += temperatura;
    pcounter++;
  }
}
console.log("Prosecna pozitivna je: " + pozitivna / pcounter);
console.log("Prosecna negativna je: " + negativna / ncounter);
*/
