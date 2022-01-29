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
///
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////
// a1 = [4, 8, 6, 1, 3, 0, 9, 10, 1000];
// a1 = a1.sort((a, b) => a - b); /////////////////////////////////SORTIRA ELEMENTE NIZA PO VELICINI
// console.log(a1);
////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////Proveri da li je isti broj Xx i Oo u stringu

// str = "xXxXxOoOoO";
// xcount = 0;
// ocount = 0;
// for (i = 0; i < str.length; i++) {
//   if (str[i] === "X" || str[i] === "x") {
//     xcount++;
//   } else if (str[i] === "O" || str[i] === "o") {
//     ocount++;
//   }
// }
// if (xcount == ocount) {
//   return true;
// } else {
//   return false;
// }

///////////////////////////////////////////////////nadji jedinstven broj u nizu
// arr = [1, 0, 0];
// arr1 = [3, 10, 3, 3, 3];

// arr = arr.sort((a, b) => a - b);
// console.log(arr);
// if (arr[0] != arr[1]) {
//   return arr[0];
// } else {
//   return arr[arr.length - 1];
// }

////////////////////////////////////////Uneti tekst podeli na clanove niza od 2 karaktera ako je neparan broj karaktera poslednjem dodati "_"

// str = "abc";

// i = 0;
// result = [];
// if (str.length % 2 !== 0) {
//   str = str + "_";
// }
// while (i < str.length) {
//   result.push(str[i] + str[i + 1]);
//   i += 2;
// }

// console.log(result);

//////////////////////////////////////////////MEKSICKI TALAS _____________ hello -> [Hello,hEllo,heLlo,helLo,hellO]

// str = "hello";
// newArr = [];
// for (i = 0; i < str.length; i++) {
//   copy = str.split("");
//   if (copy[i] !== " ") {
//     copy[i] = copy[i].toUpperCase();
//     newArr.push(copy.join(""));
//   }
// }

// return newArr;

///////////////////////////////////////////////////////////////////TOWER BUILDER!!!!!!!!!!!!!!!
// nFloors = prompt("Number of floors?");
// var toranj = [];
// var numSpaces = 0;

// for (i = nFloors; i > 0; i--) {
//   toranj.push(
//     " ".repeat(numSpaces) +
//       "*".repeat(i) +
//       "*".repeat(i - 1) +
//       " ".repeat(numSpaces)
//   );

//   numSpaces++;
// }

// console.log(toranj);

////////////////////////////////////////////////////////PROFI ZADATAK PETI KJU RESIO GA KO MASINA BAS SES
// seconds = 6700;
// minute = 0;
// sat = 0;
// if (seconds > 359999 || seconds < 0) {
//   console.log("jedi gocna");
// } else {
//   sat = Math.floor(seconds / 3600);
//   minute = Math.floor((seconds - sat * 3600) / 60);
//   seconds = seconds - sat * 3600 - minute * 60;
// }

// sat < 10 ? (sat = sat = "0" + sat) : (sat = sat);
// minute < 10 ? (minute = minute = "0" + minute) : (minute = minute);
// seconds < 10 ? (seconds = seconds = "0" + seconds) : (seconds = seconds);
// return sat + ":" + minute + ":" + seconds;

///////////////////////////////////////////RETURN FIRST NON REPEATABLE characte/////////////////////// PETI KJUUU ALE

// function firstNonRepeatingLetter(str) {
//   arra1 = str.split("");

//   upper = arra1.join("").toUpperCase();
//   result = "";
//   ctr = 0;

//   if (arra1 == arra1.reverse) {
//     return arra1[0];
//   } else {
//     for (i = 0; i < upper.length; i++) {
//       ctr = 0;

//       for (var j = 0; j < arra1.length; j++) {
//         if (upper[i] === upper[j]) {
//           ctr += 1;
//         }
//       }

//       if (ctr < 2) {
//         result = str[i];
//         break;
//       }
//     }
//     return result;
//   }
// }
///////////////////////BOLJI SOLUTION
// function firstNonRepeatingLetter(s) {
//     let str = s.toLowerCase();
//     for(let i = 0; i < str.length; i++) {
//       if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//         return s[i];
//       }
//     }
//     return "";
//   }

///////////////////////////////////////////////////

// str1 = "guccci";
// str2 = "gucci";
// arr1 = str1.split("");
// arr2 = str2.split("");
// const containsAll = arr2.every((element) => {
//   return arr1.includes(element);
// });

// if (containsAll) {
//   console.log(true);
// } else {
//   console.log(false);
// }
///////////////

/////////////////////////////////////////////////////ADDING BIG NUMBERS 4 KYU

function add(a, b) {
  var result = "";
  var carry = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || carry) {
    carry += ~~a.pop() + ~~b.pop();
    result = (carry % 10) + result;
    carry = carry > 9;
  }
  return result;
}
