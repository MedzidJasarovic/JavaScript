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
// brojevi = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
// string = [];
// function toString(arr) {
//   string = arr.map((el) => {
//     return el.toString();
//   });
// }
// toString(brojevi);
// console.log(string);

//////////////////////////////////// Imena
// fixed = [];
// imena = ["mips", "dips", "kvips", "svips", "krips", "HAHvcssds", "SVEVELIKA"];
// function popravi(arr) {
//   fixed = arr.map((el) => {
//     elementic = "";
//     a = el.toLowerCase();
//     for (i = 0; i < a.length; i++) {
//       if (i == 0) {
//         elementic += a[0].toUpperCase();
//       } else {
//         elementic += a[i];
//       }
//     }
//     return elementic;
//   });
// }
// popravi(imena);
// console.log(fixed);

// ILI ILI ILI ILI ILI

// function capitalizeNames(arr) {
//   return arr.map((el) => {
//     el = el.toLowerCase();
//     el = el[0].toUpperCase() + el.slice(1);
//     return el;
//   });
// }
// console.log(
//   capitalizeNames([
//     "mips",
//     "dips",
//     "kvips",
//     "svips",
//     "krips",
//     "HAHvcssds",
//     "SVEVELIKA",
//   ])
// );

// /////////////////////////////////////////////  DAJ ARRAY IMENA

function namesOnly(arr) {
  return arr.map((el) => {
    return el.name;
  });
}
console.log(
  namesOnly([
    {
      name: "Hazbula",
      age: 19,
    },
    {
      name: "Dzadzo Dzake",
      age: 11,
    },
  ])
);

/////////////////////////////////////////////////////////// PROVERI DA LI SU UNDERAGE
function isUnderage(arr) {
  return arr.map((el) => {
    if (el.age >= 18) {
      return el.name + " can buy marihuana";
    } else {
      return el.name + " cant buy marihuana";
    }
  });
}
console.log(
  isUnderage([
    {
      name: "Hazbula",
      age: 19,
    },
    {
      name: "Dzadzo Dzake",
      age: 11,
    },
  ])
);

/////////////////////////////////////////////////////////////////IZREDJAJ PODATKE

// function namesOnly(arr) {
//   return arr.map((el) => {
//     return "Zove se " + el.name + " i ima " + el.age + " godina.";
//   });
// }
// console.log(
//   namesOnly([
//     {
//       name: "Hazbula",
//       age: 19,
//     },
//     {
//       name: "Dzadzo Dzake",
//       age: 11,
//     },
//   ])
// );
//////////////////////////////////////KREIRAJ FUNKCIJU KOJA UZIMA  STRING I PRAVI INICIJALE
/////////(gago Meki ZAzo fr ===> G.M.Z.F.)

reci = "U Kraju zvali su me Suki, brz sam ko SUZUKI brm";
reci = reci.split(" ");

function napraviInicijale(str) {
  return str.map((el) => {
    el = el.toLowerCase();
    el = el[0].toUpperCase();
    el += ".";
    return el;
  });
}
console.log(napraviInicijale(reci).join(""));

/////////////////////ZA STRING BROJEVA RETURNAJ True ako je paran a false ako je neparan

brojke = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function toBool(nmb) {
  return nmb.map((el) => {
    if (el % 2 == 0) {
      return true;
    } else {
      return false;
    }
  });
}
console.log(toBool(brojke));
