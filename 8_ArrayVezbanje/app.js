/* 19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]

array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13, 5, 69, 8];
summ = [];

if (array1.length > array2.length) {
  min = array2.length;
} else {
  min = array1.length;
}

if (array1.length > array2.length) {
  max = array1.length;
} else {
  max = array2.length;
}

for (i = 0; i < min; i++) {
  summ[i] = array1[i] + array2[i];
}

for (i = Math.abs(array1.length - array2.length); i < max; i++) {
  if (array1.length > array2.length) {
    summ[i] = array1[i];
  } else {
    summ[i] = array2[i];
  }
}

console.log(summ);
*/
// 23. Write a JavaScript function to find the difference of two arrays. Go to the editor
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

// ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ar2 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// razlika = [];
// // for (i = 0; i < ar2.length; i++) {
// //   if (ar1[i] == null) {
// //     break;
// //   }
// //   else if(ar1[i])
// // }

// //////////////////////
// for (i = 0; i < ar1.length; i++) {
//   for (j = 0; j < ar2.length; j++) {
//     if (ar1[i] != ar2[j]) {
//     }
//   }
// }
/*
/////////////////////// METODE SA NIZOVIMA METODE SA NIZOVIMA METODE SA NIZOVIMA METODE SA NIZOVIMA METODE SA NIZOVIMA
//////////////////
/////////////////
//////////////////
//////////////
vocke = ["jabuke", "tresnje", "banane", "jagode"];
console.log(vocke);
vocke.push("ananas"); //Dodaje oni element na kraj niza
a = vocke.push("mandarine");
console.log(vocke);
console.log(a);
/////////////////
/////////////////
///////////////
/////////////
vocke.pop(); ////////////////////////// Uklanja posledji element niza
console.log(vocke);
uklonjenaVrednost = vocke.pop(); ////////////////// Varijabli dodeljujemo uklonjenu vrednost
console.log(uklonjenaVrednost);
console.log(vocke);
//////////////////////////////////
/////////////////////////////////
///////////////////////////////
stringVocki = vocke.join("-");
console.log(stringVocki);
console.log(vocke.join("-")); //////////////////////Pretvara elemente u string i moze da stavlja neki separator izmedju svakog clana
//////////////////////
//////////////////////
///////////////////
////////////////
b = vocke.shift();
console.log(vocke); /////////////////////// Shift uklanja prvi element niza i moze da ga prosledi nekoj varijabli
console.log(b);
vocke.unshift("Tuki-fruit"); /////////dodaje novi element na pocetak niza
console.log(vocke);
//////////////////
/////////////////
//////////////
///////////////
povrcke = ["paradajz", "kukuruz", "paprika"];
novi = vocke.concat(povrcke, ["pirinac"]); ////////////// Concat dodaje jedan string na drugi
console.log(novi);
////////////////
///////////////
//////////////PROBAJ SPLICE DA ODRADIS
//////////
///////////
slajsan = vocke.slice(1, 3);
console.log(slajsan); ////////////////Slice uzima elemente sa datih indexa (ne uzima prvi ali uzima poslednji index i ne menja niz)
////////////
///////////
////////////


ar1 = ["plava1", "plava2", "plava3", "crvena1"];
ar2 = ["crvena1", "crvena1", "crvena2", "plava3"];
ar3 = [];
indeks = 0;
for (i = 0; i < ar1.length; i++) {
  for (j = 0; j < ar2.length; j++)
    if (ar1[i] === ar2[j]) {
      ar3[indeks] = ar1[i];
      indeks++;
    }
}
console.log(ar3);


niz = [1, "", 2, false, 2, undefined, 3, null];
truti = [];
for (i = 0; i < niz.length; i++) {
  if (Boolean(niz[i]) == true) {
    truti.push(niz[i]);
  }
}
console.log(truti);
*/
///////////////////////////////////////////////////////Ispisati program koji izacuje razlicite clanove iz dva

niz1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
niz2 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
razlika = niz1.concat(niz2);
for (i = 0; i < razlika.length; i++) {
  for (j = 0; j < razlika.length; i++) {
    if (razlika[i] == razlika[j]) {
      delete razlika[j];
    }
  }
}
console.log(razlika);
