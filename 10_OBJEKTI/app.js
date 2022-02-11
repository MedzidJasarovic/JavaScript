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
function covek() {
  const osoba = {};
  osoba.ime = prompt("Unesite ime");
  osoba.prezime = prompt("Unesite prezime");
  osoba.godine = prompt("Unesite godine");
  osoba.visina = prompt("Unesite visinu");
  return osoba;
}

console.log(covek());
