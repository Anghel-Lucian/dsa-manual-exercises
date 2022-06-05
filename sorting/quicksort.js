function partition(arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;

  for(let i = start; i < end; i++) {
    if(arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

  return pivotIndex;
}

function quickSort(arr, start, end) {
  if(start >= end) {
    return;
  }

  let index = partition(arr, start, end);

  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}

const arr = [9, 12, 734, -34, 58, 1, 0, -35];

quickSort(arr, 0, arr.length - 1);

console.log(arr);