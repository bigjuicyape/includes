// my includes assignment
function myIncludes(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return false;
}
// my index assignment
function myIndexOf(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return false;
}
// my average assignment
function average(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  return (average /= array.length);
}
// my max assignment
function myMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}
// my count assignment
function count(array, item) {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      num++;
    }
  }
  return num;
}
// my swap assignment
function swap(array, i1, i2) {
  let newarray = array.slice();
  newarray[i1] = array[i2];
  newarray[i2] = array[i1];
  return newarray;
}
