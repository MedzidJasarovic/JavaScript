// broj = prompt("Koliko imena zelite da unesete");
// ime = "";
// function sayHello(ime) {
//   console.log("Hello " + ime);
// }
// for (i = 0; i < broj; i++) {
//   ime = prompt("Unesite ime");
//   sayHello(ime);
// }

// function summ(a, b) {
//   console.log(a + b);
// }
// summ(3, 5);

////////////////////////////////////////////////////Deklaracocija funkcija

// function mojaFunkcija() {
//   console.log(" Moja fukica");
// }

// b = function () {
//   console.log(" b b b b b b b b b");
// };

// b();

// c = () => {
//   console.log("C c c c c c c ");
// };

// c();

///////////////////////////////////////////////////CALL BACK FUNKCIJAA

///CALLBACK(POZOVI KASNIJE) JE FUNKCIJA KOJU DEFINISEMO A NAKON TOGA, KAD JE POTREBNO, JE SALJEMO NEGDE KAO ARGUMENT

// let tekst = "the quick brown fox";
// tekst = tekst.split("");
// novi = [];
// function kvadriraj(el, indeks) {
//   if (indeks % 2 === 0) {
//     novi.push(el.toLowerCase());
//   } else {
//     novi.push(el.toUpperCase());
//   }
// }

// tekst.forEach(kvadriraj);
// console.log(novi.join(""));

const arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
zleVariable = 0;
function isFalsey(el) {
  if (Boolean(el) === false) {
    zleVariable++;
  }
}
arr.forEach(isFalsey);
console.log(zleVariable);
