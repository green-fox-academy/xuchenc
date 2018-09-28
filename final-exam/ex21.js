function newList(arr1, arr2) {
  const difference = arr1.filter(x => !arr2.includes(x));
  return difference;
}

console.log(newList([1, 2, 3, 4], [2, 4, 6, 8]));
console.log(newList([1, 1, 1, 1], [1, 2, 3, 4]));
console.log(newList([1, 1, 1, 1], [2, 2, 3, 4]));
