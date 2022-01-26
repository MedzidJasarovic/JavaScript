////////////////////////////Proveri da li su elementi jednog niza kvadrirani elementi drugog niza

// array1 = [121, 144, 19, 161, 19, 144, 19, 11];
// array2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

// function comp(array1, array2) {
//   let rezultat = false;

//   if (array1 && array2) {
//     if (array1.length === 0 && array2.length === 0) {
//       rezultat = true;
//     } else {
//       const squareRoots = array2.map((num) => Math.sqrt(num));
//       array1.sort((a, b) => a - b);
//       squareRoots.sort((a, b) => a - b);
//       for (let i = 0; i < squareRoots.length; i++) {
//         if (array1.indexOf(squareRoots[i]) !== array1.indexOf(array1[i])) {
//           rezultat = false;
//           break;
//         }
//         rezultat = true;
//       }
//     }
//   }
//   return rezultat;
// }
// a1 = [4, 8, 6, 1, 3, 0, 9, 10, 1000];
// a1 = a1.sort((a, b) => a - b); /////////////////////////////////SORTIRA ELEMENTE NIZA PO VELICINI
// console.log(a1);

//////////////////////////////////////////////////////////Proveri da li je isti broj Xx i Oo u stringu

str = "xXxXxOoOoO";
xcount = 0;
ocount = 0;
for (i = 0; i < str.length; i++) {
  if (str[i] === "X" || str[i] === "x") {
    xcount++;
  } else if (str[i] === "O" || str[i] === "o") {
    ocount++;
  }
}
if (xcount == ocount) {
  return true;
} else {
  return false;
}
