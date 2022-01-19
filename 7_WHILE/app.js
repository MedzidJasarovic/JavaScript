/*
a = prompt("Unesite sifru, mora biti makar 6 karaktera duga");
while (a.length < 6) {
  alert("SIFRA NIJE DOVOLJNO DUGA");
  a = prompt("Pokusajte ponovo");
}




let a = parseInt(prompt("Unesite broj"));
let summ = 0;
while (a >= 0) {
    /////////////////////////////////////////////////////////////////////TRZI UNOS DOK SE NE UNESE NEGATIVAN BROJ
    summ += a;
  a = parseInt(prompt("Nastavi da unosis"));
}
console.log(summ);
//////////////////////////////////////////
a = prompt("Unesite neko ime ili END");
while (a.toUpperCase() !== "END") {
  console.log(a);
  a = prompt("Nastavi da unosis onda ..."); //////////////////////////////////////////////////////////TRAZI IME DOK NE UNESES END, ISPISUJE SVA IMENA
}
console.log("Gotovo");



summ = 0;
brojac = 0;
a = parseInt(prompt("Unesite ocenu"));
while (a >= 1 && a <= 5) {
  summ += a;
  brojac++;
  a = parseInt(prompt("Unesite sledecu ocenu"));///////////////////////////////////////TRAZI OCENU I RACINA A.SREDINU SVE DOK SE NE UNESE POGRESNA OCENA
}

console.log(summ / broja);

a = parseInt(prompt("Unesite broj"));
br = Math.round(Math.random()) * 10;
while (a !== br) {
  if (a < br) {
    alert("Trazeni broj  je veci");
  } else if (a > br) {
    alert("Trazeni broj je manji");
  }
  a = parseInt(prompt("Unesite ponovo broj"));
}
console.log("Cestitam pogodili ste , trazeni broj je :" + br);

//Domaci: napraviti kalkulator

operator=prompt("Unesite operator")
while(operator!=="STOP")
{b1=parseInt(prompt("Unesite prvi broj"))
b2=parseInt(prompt("Unesite drugi broj"))
  if
}
t/v2
t = prompt("Unesite svoju tezinu");
v = prompt("Unesite svoju visinu");
bmi = t / (v * v);
if (bmi <= 18.5) {
  console.log("Underweight");
} else if (bmi <= 25.0) {
  console.log("Normal");
} else if (bmi <= 30.0) {
  console.log("overweight");
} else if (bmi > 30.0) {
  console.log("Obesse");
}
 n = parseInt(prompt("Unesite broj"));
brojac = 1;
while (brojac <= n) {
  if (brojac % 2 != 0) {
    console.log(brojac);
  }
  brojac++;
}

brj = prompt("Unesite broj");
while (brj !== "STOP") {
  if (brj > 0) {
    console.log("Positive");
  } else if (brj < 0) {
    console.log("Negative");
  } else if (brj == 0) {
    console.log("Zero");
  } else {
    console.log("Niste uneli broj");
  }
  brj = prompt("Unesite sledeci broj ili STOP");
}

g = prompt("Unesite  pocetnu godinu");
g2 = prompt("Unesite krajnju vrednost");
for (i = g; i <= g2; i++) {
  if (i % 4 == 0) {
    console.log(i);
  }
}


broj = prompt("Unesite broj");
brojac = 1;
suma = 1;
while (brojac <= broj) {
  suma *= brojac;
  brojac++;
}
console.log(suma);

tekst = "medzid";
tekst1 = tekst.slice(4, tekst.length);
console.log(tekst1);


tekst = promp("Unestie neki tekst");
slovo = tekst.slice(0);
console.log(tekst + slovo);
/////////////////////////////////////////////////////////DOMACIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

///////////////////////////////////////////////////////////////Napisi program koji dati broj konvertuje u minute i sate

br = prompt("Unesite broj minuta");
sati = Math.floor(br / 60);
minuti = br - sati * 60;
if (br < 0) {
  console.log("Uneli ste negativan broj minuta");
} else if (br <= 60) {
  console.log(br);
} else {
  console.log(sati + " : " + minuti);
}


////////////////////////////////////////Napisi program koji za uneti tekst svakoj unetoj reci pocento slovo stavlja na uppercase

tekst = prompt("Unesite neki tekst lol");
ntekst = "";
for (i = 0; i < tekst.length; i++) {
  if (i === 0) {
    ntekst += tekst[i].toUpperCase();
  }
  if (tekst[i] == " ") {
    ntekst += " " + tekst[i + 1].toUpperCase();
    i++;
  } else {
    ntekst += tekst[i];
  }
}
alert(ntekst);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ar = [];
br = prompt("Unesite broj elemenita koja zelite da unesete");
for (i = 0; i < br; i++) {
  ar[i] = prompt("Unesite " + (i + 1) + ". clan");
}

for (i = br - 1; i >= 0; i--) {
  console.log(ar[i]);
}

ar = [];
sum = 0;
broj = prompt("Unesite broj elemenata koje zelite da saberete");
for (i = 0; i < broj; i++) {
  ar[i] = parseInt(prompt("Unesite broj"));
  sum += ar[i];
}
console.log(sum);

*/
ero = [11, 34, 3, 32, 11, 9, 5, 69];
max = ero[0];
for (i = 0; i < ero.length; i++) {
  if (ero[i] > max) {
    max = ero[i];
  }
}
console.log(max);
