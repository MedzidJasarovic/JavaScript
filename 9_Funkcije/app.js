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

// const arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// zleVariable = 0;
// function isFalsey(el) {
//   if (Boolean(el) === false) {
//     zleVariable++;
//   }
// }
// arr.forEach(isFalsey);
// console.log(zleVariable);

//////////////////////////////////////////////////////// MAP // MAP NE DIRA POSTOJECI ARRAY
//VEC KREIRA NOVI ARRAY I PUSH

// const a=[1,2,3,4]

// const b=a.map((el,i)=>{
// return el+i})
// console.log(b)
///////////////////////////////////////////////////
// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const kvadriran = niz.map((el) => {
//   return el ** 2;
// });
// console.log(kvadriran);

///////////////////////////////////////  FUNKCIJA KOJA DUPLIRA SVE CLANOVE
// dupli = [];
// function dupliraj(arr) {
//   dupli = arr.map((el) => {
//     return el * 2;
//   });
// }
// niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// dupliraj(niz);
// console.log(dupli);

///////////////////////////////////////////UZI ARRAY BROJEVA I KONVERTUJ IH U STRING
brojevi = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
string = [];
function toString(arr) {
  string = arr.map((el) => {
    return el.toString();
  });
}
toString(brojevi);
console.log(string);
