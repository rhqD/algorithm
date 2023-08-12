const LCS = (a, b) => {
  const memo = [];

  let maxLength = 0;
  let end = -1;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      memo[i] = memo[i] ?? [];
      if (a[i] === b[j]) {
        memo[i][j] = (memo[i - 1]?.[j - 1] ?? 0) + 1;
        if (maxLength < memo[i][j]) {
          maxLength = memo[i][j];
          end = i;
        }
      } else {
        memo[i][j] = 0;
      }
    }
  }
  return a.substr(end - maxLength + 1, maxLength);
};

console.log(LCS("1AB2345CD", "12345EF"));