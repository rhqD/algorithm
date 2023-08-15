const LIS = arr => {
  if (arr.length < 1) {
    return 0;
  }
  const memo = [1];

  const f = i => {
    if (memo[i] !== undefined) {
      return memo[i];
    }
    const subResults = Array.from({ length: i }).map((_, index) => {
      const subResult = f(index);
      return arr[index] <= arr[i] ? subResult + 1 : 1;
    });
    const best = Math.max(...subResults);
    memo[i] = best;
    return best;
  };

  f(arr.length - 1);
  return Math.max(...memo);
};

console.log(LIS([6, 3, 1, 5, 2, 3, 7]));

