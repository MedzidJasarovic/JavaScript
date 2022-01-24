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




////////////////////////////////////////Napisi program koji nalazi dva clana iz niza cija je suma neki ciljani broj
brojevi[10,20,30,40,50,60,70,80,90,100];
meta=110;
for(i=0;i<brojevi.length;i++)
{
  for(j=0;j<brojevi.length;j++)
  {
    if((brojevi[i]+brojevi[j])=meta)
    {
      console.log(meta + " se dobija od: "+ brojevi[i]+" + "+ brojevi[j]+" .");
    }

  }
}

///////////////////////////// Array shuffle

arej = [1, 2, 3, 4, 5, 6, 7, 8, 9];

cobi = arej.length;

while (cobi > 0) {
  index = Math.floor(Math.random() * cobi);
  cobi--;
  temp = arej[cobi];
  arej[cobi] = arej[index];
  arej[index] = temp;
}
console.log(arej);


str = "Medzid";
rts = "";
for (i = str.length - 1; i >= 0; i--) {        //////////////////////////////String reverser (Codewars)
  rts += str[i];
}
console.log(rts);
return rts;


// n = 456;
// n1 = n.toString();
// suma = 0;
// for (i = 0; i < n1.length; i++) {
//   suma += parseInt(n1[i]);
// }
// while(suma>=10) {
//   for (i = 0; i < suma.length; i++) {
//     suma += parseInt(n1[i]);

// }
// console.log(suma);

/////////////////////////////////////////////////////////////VELJiki programmmmmmm
broj = prompt("Unesite broj elemenata vaseg niza");
ar1 = [];
for (i = 0; i < broj; i++) {
  ar1[i] = prompt("Unesite element stringa");
}
console.log(ar1);
console.log("Da li ste pravilno uneli elemente?");
odgovor = prompt("Unesite DA ili Ne");
while (odgovor == "NE") {
  dod = prompt("Za dodavanje elemenata unesite 1 a za uklanjanje unesite 0");
  if (dod == 0) {
    a = prompt("Sa kojeg indeksa uklanjate?");
    b = prompt("Koliko elemenata uklanjate?");
    ar1.splice(a, b);
  } else if (dod == 1) {
    a = prompt("Sa kojeg indeksa dodajete?");
    dodati = prompt("Unesite element koji zelite da dodate");
    ar1.splice(a, 0, dodati);
  }
  console.log(ar1);
  odgovor = prompt("Jeste li sada zadovoljni?");
}
*/
data = [3, 21, 32, 36, 37, 56, 8, 12, 16, 18, 20, 68, 69];
alert(data);
broj = prompt("Unesite broj koji zelite da nadjete iz niza");
for (i = 0; i < data.length; i++) {
  if (data[i] == broj) {
    alert("Nalazi se na indeksu " + i);
    break;
  } else if (data[data.length - 1] != broj) {
    alert("Niste uneli broj koji se nalazi u nizu");
  }
}
