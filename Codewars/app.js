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

// function add(a, b) {
//   var result = "";
//   var carry = 0;
//   a = a.split("");
//   b = b.split("");
//   while (a.length || b.length || carry) {
//     carry += ~~a.pop() + ~~b.pop();
//     result = (carry % 10) + result;
//     carry = carry > 9;
//   }
//   return result;
// }

/////////////////////////////////////////////////NADJI MINU

// polje = [
//   [1, 0],
//   [0, 0],
// ];
// mina = [];
// for (i = 0; i < polje.length; i++) {
//   for (j = 0; j < polje.length; j++)
//     if (polje[i][j] == 1) {
//       mina.push(i);
//       mina.push(j);
//     }
// }
// console.log(mina);

///////////////////////////////////////Fake binary

// x = "123447777588912344312";
// y = x.split("");
// tuki = [];
// vracen = "";
// for (i = 0; i < x.length; i++) {
//   if (y[i] < 5) {
//     tuki.push(0);
//   } else if (y[i] >= 5) {
//     tuki.push(1);
//   }
// }
// vracen = tuki.join("");
// console.log(vracen);

// /////////////////////////////////////////// reverse or rotate
// function revrot(str, sz) {
//   if (sz <= 0 || !str || sz > str.length) return "";

//   const sumCubes = (chunk) =>
//     chunk.split("").reduce((sum, digit) => (sum += digit ** 3), 0);
//   const reverse = (chunk) => chunk.split("").reverse().join("");
//   const rotate = (chunk) => chunk.slice(1) + chunk.slice(0, 1);

//   const chunks = [];

//   for (let i = 0; i < str.length; i += sz) {
//     let chunk = str.slice(i, i + sz);

//     if (chunk.length < sz) continue;

//     chunk = sumCubes(chunk) % 2 ? rotate(chunk) : reverse(chunk);

//     chunks.push(chunk);
//   }

//   return chunks.join("");
// }

////////////////////////////////////////////////////////////////////////////////TWICE AS OLD 8KYU

// o = 54;
// s = 26;
// counter = 0;

// if (o / s < 2 && o % s != 0) {
//   for (i = 0; i < s; i++) {
//     counter++;
//     o--;
//     s--;

//     if (o % s == 2) {
//       break;
//     }
//   }
// } else if (o / s > 2 && o % s != 0) {
//   for (i = 0; i < s; i++) {
//     counter++;
//     o++;
//     s++;

//     if (o % s == 2) {
//       break;
//     }
//   }
// } else if (o % s == 0) {
//   counter = 0;
// }

// console.log(counter);

// twice = (o - s) * 2;
// twice < 0 ? twice * -1 : twice;

///////////////////
// ime = "Johan Jonino";
// jojo = ime.split(" ");
// jo1 = ime[0].toUpperCase();
// jo2 = ime[1].toUpperCase();
// jb1 = false;
// jb2 = false;

// if (jojo.lenght < 2) {
//   return false;
// } else {
//   if (jo1[0] == "J" && jo1[1] == "O") {
//     jb1 = true;
//   }
// }

//////////////////////////////////////////////////////////////////// COUNT THE MONKEYS
// function monkeyCount(n) {
//   var monkeys = [];
//   for (var i = 1; i < n + 1; i++) {
//     monkeys.push(i);
//   }
//   return monkeys;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////String incrementer 5kyu

// function incrementString(strng) {
//   return strng.replace(/\d$/, (match) => {
//     if (!match) return 1;
//     const numStr = String(parseInt(match) + 1);
//     const diff = match.length - numStr.length;
//     return diff > 0 ? "0".repeat(diff) + numStr : numStr;
//   });
// }

///////////////////////////////////////////////////////REMOVE VOVELS

// function shortcut(string) {
//   let vowels = "aeiou";

//   let result = [];

//   for (let i = 0; i < string.length; i++) {
//     if (!vowels.includes(string[i])) {
//       result.push(string[i]);
//     }
//   }
//   return result.join("");
// }

// words = ["one", "two", "", "three", "four", "", ""];
// w = [];
// ar1 = [];
// ar2 = [];
// if (words == []) {
//   console.log("");
// } else {
//   for (i = 0; i < words.length; i++) {
//     if (words[i] != "") {
//       w.push(words[i]);
//     }
//   }
// }
// if (w.length == 1) {
//   return w.join("");
// } else if (w.length == 2) {
//   return w.join(" and ");
// } else if (w.length >= 3) {
//   for (i = 0; i < w.length - 1; i++) {
//     ar1.push(w[i]).join(", ");
//     ar2.push(w[w.length - 1]).join("");
//   }
//   return ar1 + " and " + ar2;
// }
///////////////////////////////////////////////////////////////IZMEDJU SVAKE DRUGE PRECI STAVITI ZAREZ A IZMEDJU 2 POSLEDNJE and
// words = ["one", "two", "", "three", "four", "", ""];
// w = [];
// ar1 = [];
// ar2 = [];
// a3 = "";
// if (words == []) {
//   console.log("");
// } else {
//   for (i = 0; i < words.length; i++) {
//     if (words[i] != "") {
//       w.push(words[i]);
//     }
//   }
// }
// if (w.length == 1) {
//   console.log(w.join(""));
// } else if (w.length == 2) {
//   console.log(w.join(" and "));
// } else if (w.length >= 3) {
//   for (i = 0; i < w.length - 1; i++) {
//     ar1.push(w[i]);
//     console.log(ar1);
//   }
//   //   ar1.join(", ");
//   ar2.push(w[w.length - 1]);
//   ar2.join("");
//   console.log(ar1.join(", ") + " and " + ar2);
// }

///////////////////////////////////////////////////////////////////////////////////////////WHOOO LIKES IT 6KYU
// function likes(names) {
//   let ljudi = names.length - 2;
//   a1 = [];
//   a2 = [];

//   if (names.length == 0) {
//     return "no one likes this";
//   } else if (names.length == 1) {
//     return names.join("") + " likes this";
//   } else if (names.length == 2) {
//     return names.join(" and ") + " like this";
//   } else if (names.length == 3) {
//     for (i = 0; i < names.length - 1; i++) {
//       a1.push(names[i]);
//     }

//     a2.push(names[names.length - 1]);
//     a2.join("");
//     return a1.join(", ") + " and " + a2 + " like this";
//   } else if (names.length > 3) {
//     return (
//       names[0].toString() +
//       ", " +
//       names[1].toString() +
//       " and " +
//       ljudi +
//       " others like this"
//     );
//   }
// }

///////////////////////////////////////////////////// 3kyu HELP THE GENERAL DECODE SECRET ENEMY MESSAGES(OVO JE SAMO POKUSAJ!!!)

////// PRVO RESENJE

// device.decode = function (w) {  //////MOE RESENJE NAJBOLJE
//   for (i = 0; i < 65; i++) {
//     w = device.encode(w);
//   }
//   ("");
//   return w;
// };

///////////////////////////////////////// DRUGO RESENJE

// var chrs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.0123456789? ";

// function build_alphabets_table() {
//   return chrs.split("").map(function (c) {
//     return device.encode(new Array(67).join(c));
//   });
// }

// device.decode = function (w) {
//   var tbl = build_alphabets_table();
//   return w.replace(/./g, function (c, i) {
//     return (
//       chrs[
//         tbl
//           .map(function (a) {
//             return a[i % 66];
//           })
//           .indexOf(c)
//       ] || c
//     );
//   });
// };

///////////////////////////////////////////////////////////SQUARE EVERY DIGIT
// rezultat = "";

// num = num.toString().split("");
// kvadriran = [];
// for (i = 0; i < num.length; i++) {
//   kvadriran.push(num[i] * num[i]);
//   rezultat += kvadriran[i].toString();
// }
// return rezultat.to();

////////////////////////////////////////////////////////////////////MUMBLING
// s = "abcde";
// rezultat = [];
// s = s.toUpperCase().split("");
// for (i = 0; i < s.length; i++) {
//   for (j = 0; j < i + 1; j++) {
//     rezultat.push(s[i]);
//   }
// }
// console.log(rezultat);
////////////////////////////////////////////////////////////// SUM STRINGS AS NUMBERS 4 kyu

// function sumStrings(a, b) {
//   return a >= 9007199254740992 - 1 || b >= 9007199254740992 - 1
//     ? bigInt(a, b)
//     : a * 1 + b * 1 + "";
// }

// function bigInt(a, b) {
//   var c = "";
//   var d = 0;

//   var zero = new Array(Math.abs(a.length - b.length) + 1).join("0");

//   a.length >= b.length ? (b = zero + b) : (a = zero + a);

//   for (var i = b.length - 1; i >= 0; i--) {
//     var sum = a[i] * 1 + b[i] * 1 + d;
//     if (sum >= 10) {
//       sum = sum - 10;
//       d = 1;
//     } else {
//       d = 0;
//     }
//     c = sum + c;
//   }

//   return d > 0 ? d + c : c;
// }

//////////////////////////////////////CAT AND DOG YEARS

// var humanYearsCatYearsDogYears = function (human) {
//   dog = 0;
//   cat = 0;
//   result = [];
//   if (human == 1) {
//     cat = 15;
//     dog = 15;
//   } else if (human == 2) {
//     cat = 24;
//     dog = 24;
//   } else if (human > 2) {
//     cat = 24 + (human - 2) * 4;
//     dog = 24 + (human - 2) * 5;
//   }
//   result.push(human);
//   result.push(cat);
//   result.push(dog);
//   return result;
// };

////////////////////////////////MUMBLING
// function accum(s) {
//   var letters = s.split(""),
//     words = [];

//   for (var i = 0; i < letters.length; i++) {
//     words.push(
//       letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
//     );
//   }

//   return words.join("-");
// }

// function mod(x, y) {
//   //works as expected for negative x
//   var sign = y < 0 ? -1 : 1;
//   while (x < 0) {
//     x += sign * y;
//   }
//   return x % y;
// }

// device.decode = function (string) {
//   var substitutions =
//     "abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH"; // length = 66
//   return [].map
//     .call(string, function (chr, idx) {
//       var pos = substitutions.indexOf(chr);
//       return pos == -1 ? chr : substitutions[mod(pos - 1 - idx, 66)];
//     })
//     .join("");
// };

// //for educational purposes, the encode function
// encode = function (string) {
//   var substitutions =
//     "abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH"; // length = 66
//   return [].map
//     .call(string, function (chr, idx) {
//       var pos = substitutions.indexOf(chr);
//       return pos == -1 ? chr : substitutions[(pos + 1 + idx) % 66];
//     })
//     .join("");
// };

//////////////////////////////////////////////////////////////////////////// BILIARDS TRYANGLE

// resio gaa a

//////////////////////////////////////////////////////////////////////PERMUTATIONS

// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// function genPerms(chars, left, right, set) {
//   if (left === right) {
//     set.add(chars.join(""));
//   } else {
//     for (let i = left; i <= right; i++) {
//       swap(chars, left, i);
//       genPerms(chars, left + 1, right, set);
//       swap(chars, left, i);
//     }
//   }
// }

// function permutations(string) {
//   const N = string.length;
//   const chars = string.split("");
//   const set = new Set();
//   genPerms(chars, 0, N - 1, set);
//   return Array.from(set);
// }

////////////////////////////////////////////////// ROMAN TO INT

var romanNumerals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};
roman = roman.split("");
var m = 0;
n = roman[0];
roman.reduce(function (pre, item, index) {
  var j = romanNumerals[n] || 0;
  var k = romanNumerals[item] || 0;
  m += j < k ? -j : j;
  n = item;
});
return m + romanNumerals[roman[roman.length - 1]];
