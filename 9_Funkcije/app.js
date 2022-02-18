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

let number = [45, 11, 2, 1, 69, 5, 22, 12, 21, 333, 44, 6969, 696969];
var novi = [];
function kvadriraj(el, indeks) {
  if (el > 20) {
    novi.push(el);
  }
}

number.forEach(kvadriraj);
console.log(novi);
