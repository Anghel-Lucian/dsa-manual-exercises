function merge(left, right) {
  let sortedArr = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  const half = arr.length / 2;

  if(arr.length <= 1) return arr;

  const left = arr.splice(0, half);
  const right = arr;

  return merge(mergeSort(left), mergeSort(right));
}

const arr = [8, 54, 47, 23, 85, 12, 51, 81, 69, 45];

console.log(mergeSort(arr));