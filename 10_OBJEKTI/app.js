// var library = [
//   {
//     autor: "Bill Gates",
//     readingStatus: true,
//   },
//   {
//     autor: "Steve Jobs",
//     readingStatus: true,
//   },
//   {
//     autor: "Suzanaaa",
//     readingStatus: false,
//   },
// ];
// for (i = 0; i < library.length; i++) {
//   console.log(library[i].autor, library[i].readingStatus); /////////////////// ISPISE SVE TRAZENE ATRIBUTE
// }

///////////////////////////// OBJEKTI SU REFERENTN TIPOVI PODATAKA ///////IDI NA W3Resource
// function covek() {
//   const osoba = {};
//   osoba.ime = prompt("Unesite ime");
//   osoba.prezime = prompt("Unesite prezime");
//   osoba.godine = prompt("Unesite godine");
//   osoba.visina = prompt("Unesite visinu");
//   return osoba;
// }

// console.log(covek());

/////////////////////////////////////////////////////////////////////////

// const car = {
//   name: "Audi",
//   model: "A7",
// };

// const keys = Object

// auto = {
//   ime: "",
//   marka: "",
//   enterior: "",
//   exterior: "",
// };

//////////////////////////////// WRITE A PROGRAM TO LIST THE PROPERTIES OF JAVASCRIPT OBJECT

// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// // console.log(
// //   student.name.toString() +
// //     ", " +
// //     student.sclass.toString() +
// //     ", " +
// //     student.rollno.toString()
// // );
// capcap = Object.keys(student);
// console.log(capcap.length);

// var student = [
//   {
//     name: "Aldin",
//     height: 187,
//     gender: "male",
//     age: 19,
//   },
//   {
//     name: "Vahid",
//     height: 187,
//     gender: "male",
//     age: 19,
//   },
//   {
//     name: "Medzid",
//     height: 187,
//     gender: "male",
//     age: 9,
//   },
//   {
//     name: "Almir",
//     height: 187,
//     gender: "male",
//     age: 19,
//   },
//   {
//     name: "Damir",
//     height: 187,
//     gender: "male",
//     age: 4,
//   },
// ];

// function punoletan(arr) {
//   const punoletni = [];
//   for (i = 0; i < arr.lenght; i++) {
//     if (arr[i].age >= 18) {
//       punoletni.push(arr[i]);
//     }
//   }
//   return punoletni;
// }

// console.log(punoletan(student));

auto = {
  marka: "Audi",
  model: "RS7",
  godina: 2021,
  km: 1003,
  zapremina: "4000cc",
  snaga: "519hp / 387 KW",
};
key = [];
rezultat = [];

key.push(Object.keys(auto));
velju = [];
velju.push(Object.values(auto));

for (i = 0; i < key.length; i++) {
  par = [];
  par.push(key[i]);
  par.push(velju[i]);
  rezultat.push(par);
}
console.log(rezultat);
