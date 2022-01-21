/* 19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
*/
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
