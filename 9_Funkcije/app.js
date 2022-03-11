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

// function namesOnly(arr) {
//   return arr.map((el) => {
//     return el.name;
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

/////////////////////////////////////////////////////////// PROVERI DA LI SU UNDERAGE
// function isUnderage(arr) {
//   return arr.map((el) => {
//     if (el.age >= 18) {
//       return el.name + " can buy marihuana";
//     } else {
//       return el.name + " cant buy marihuana";
//     }
//   });
// }
// console.log(
//   isUnderage([
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

// reci = "U Kraju zvali su me Suki, brz sam ko SUZUKI brm";
// reci = reci.split(" ");

// function napraviInicijale(str) {
//   return str.map((el) => {
//     el = el.toLowerCase();
//     el = el[0].toUpperCase();
//     el += ".";
//     return el;
//   });
// }
// console.log(napraviInicijale(reci).join(""));

/////////////////////ZA STRING BROJEVA RETURNAJ True ako je paran a false ako je neparan

// brojke = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function toBool(nmb) {
//   return nmb.map((el) => {
//     if (el % 2 == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }
// console.log(toBool(brojke));

///////////////////////////////////////////////////FILTER///////////////////////
///////////////////////////////////////////////////FILTER///////////////////////
///////////////////////////////////////////////////FILTER///////////////////////
///////////////////////////////////////////////////FILTER////////////////////////
///////////////////////////////////////////////////FILTER///////////////////////
///////////////////////////////////////////////////FILTER///////////////////////

//  FILTER SLUZI DA PRODJE KROZ ARRAY I DA RETURNA SAMO ONE ELEMENTE
// KOJI ISPUNJAVAJU NEKI USLOV, TJ CALLBACK

// const numbers = [1, 2, 3, 45, 5, 6, 7, 8, 9, 0, 22, 3, 4, 2234, 5324];
// const parni = numbers.filter((el) => {
//   return el % 2 == 0;
// });
// console.log(parni);

////////////////// RETURNAJ ELEMENTE 5 ili vece

// function fiveOrGreater(arr) {
//   const veci = arr.filter((el) => {
//     return el >= 5;
//   });
//   return veci;
// }

// console.log(fiveOrGreater([1, 3, 4, 777, 123213, 11]));

// mozemo da napisemo return arr.filter(el=> el>=5)

/////////////////////////////////// returnaj ako el ima 5 ili manje karaktera

// function fiveCharacterOrFewerOnly(arr) {
//   return arr.filter((el) => el.length <= 5);
// }
// console.log(
//   fiveCharacterOrFewerOnly(["55555", "jedandvatri", "cetiri", "pet"])
// );

//////////////////////////////////////////////////////// RETURNAJ MEMBERE KOJI MOGU DA UDJU U KLUB

// function iluminati(arr) {
//   return arr.filter((el) => !el.member);
// }
// console.log(
//   iluminati([
//     { name: "hasbula", member: true },
//     { name: "Miljena", member: false },
//   ])
// );

///////////////////////////////////////////////////////////////// FILTRIRAJ SAMO ELEMENTE KOJI SE ZAVRSAVAJU NA PARAN INDEKS

// function parni(arr) {
//   return arr.filter((el) => !(el.length % 2));
// }
// console.log(parni(["1", "22", "333", "4444", "5555"]));

//////////////////////////////////////////////EVERY////////////////EVERY/////////////////EVERY///

//////////////////////////////////////////////EVERY////////////////EVERY/////////////////EVERY///

//////////////////////////////////////////////EVERY////////////////EVERY/////////////////EVERY///

//////////////////////////////////////////////EVERY////////////////EVERY/////////////////EVERY///

//////////////////////////////////////////////EVERY////////////////EVERY/////////////////EVERY///

// EVery prolazi kroz array i proverava da li svi elementi iz arraya ispunjavaju neki uslov , returna true/false values

// const numbers = [1, 2, 3, 4, 5, 6, 7, 6, 87, 8, 1];
// const isAllHigh = numbers.every((value) => {
//   return value >= 1;
// });
// console.log(isAllHigh);

//////////////////////////////////////////////////////////// proveri da li su svi clanvi stripaaea

// function clan(arr) {
//   return arr.every((el) => el.member);
// }
// console.log(
//   clan([
//     { name: "hasbula", member: true },
//     { name: "Miljena", member: true },
//   ])
// );

/////////////////////////////SOME//////////////////////SOME////////////////////SOME//////////////////

/////////////////////////////SOME//////////////////////SOME////////////////////SOME//////////////////

/////////////////////////////SOME//////////////////////SOME////////////////////SOME//////////////////

/////////////////////////////SOME//////////////////////SOME////////////////////SOME//////////////////

/////////////////////////////SOME//////////////////////SOME////////////////////SOME//////////////////

/////////////////////////////SOME//////////////////////SOME////////////////////SOME//////////////////

//Proverava da li postoji bilo koji clan u arrayu koji ispunjava dati callback / uslov

// broj = [22, 31, 1, 341, 213, 1];
// function isAnyHigh(arr) {
//   return arr.some((el) => el % 2);
// }
// console.log(isAnyHigh(broj));

////////////////////////////////////
// function fn(el) {
//   return el++;
// }

// a = [
//   [1, 2, 3, 4],
//   [11, 12, 13, 14],
//   [23, 13, 51],
// ];

// for (i = 0; i < a.length; i++) {
//   a[i].map(fn);
// }
// console.log(a);
///////////////////////////////////////////////////////////////
// function shifter(s) {
// slova = ["H", "I", "N", "O", "S", "X", "Z", "M", "W"];
//   s = s.split(" ");
//   counterr = 0;

//   let p = [...new Set(s)];
//   for (i = 0; i < p.length; i++) {
//     counter = 0;
//     for (j = 0; j < p[i].length; j++) {
//       if (p[i][j].includes(slova.some)) {
//         counter++;
//         if (counter == p[i].length) {
//           counterr++;
//         }
//       }
//     }
//   }
//   return counterr;
// }
// slova = ["H", "I", "N", "O", "S", "X", "Z", "M", "W"];
// s = "BIMH XK OXQ Y ZI NE MXI OK N XM DS TMN WOJN MUUJR KWGNG";
// s = s.split(" ");

///////////////////////////////////////////////////////////////PROMISE NAM SLUZI DA NEKU RADNJU ZA KOJU NE ZNAMO KOLIKO CE DA
/// TRAJE POSALJEMO NA WEB API NA IZBRSAVANJE I JER JE PROMISE(OBECANJE) ONA SE VRACA NAKON STO SE STACK OSOLODI
//try catch then itd/....// ELABORIRAJ TRY CATCH lols balls
// console.log("Huge balls");

// OSI MODEL  =  Opens System Interconnection Model
//https://linuxhint.com/network-osi-layers-explained/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FETCH
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FETCH
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FETCH
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FETCH
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FETCH
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FETCH
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FETCH
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Fetch
// console.log("SUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII 11 1 1 1 1 11 ");
// fetch("https://catfact.ninja/facts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(() => {
//     console.log("Fetch failed");
//   });
// console.log("2222222222222222222222");
//
//
//
//
// async function getData()
// {
// //     const response = await fetch("https://catfact.ninja/facts")
// // }
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     a = response;
//     console.log(response);
//     console.log(a.name);
//   })
//   .catch(() => {
//     console.log("Fetch failed");
//   });
// async function getData() {
//   objekti = await fetch("https://jsonplaceholder.typicode.com/users").then();
//   console.log(objekti);
// }
for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
