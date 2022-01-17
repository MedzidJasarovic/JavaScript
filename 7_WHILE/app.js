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
*/ n = parseInt(prompt("Unesite broj"));
brojac = 1;
while (brojac <= n) {
  if (brojac % 2 != 0) {
    console.log(brojac);
  }
  brojac++;
}
