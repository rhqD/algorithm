const f = (arr, i = arr.length - 1) => {
  if (i === 0) {
    return arr[0];
  }
  const subResult = f(arr, i - 1);
  const prev = arr[i - 1];
  const curr = arr[i];
  if (prev <= curr) {
    return subResult + (curr - prev);
  }
  return subResult;
}

console.log(f([1,2,3,2,1]));
console.log(f([0,1,2,0,2,4,2,1,0]));
console.log(f([1,2,4,5,4,6,8,9,5,4,3,4,6,3]));
console.log(f([0,1,0,2,0,3,0,4]));