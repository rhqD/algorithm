const LCS = (a, b) => {
  const memo = {};

  const f = (m, n) => {
    const key = `${m}_${n}`;
    if (key in memo) {
      return memo[key];
    }
    if (m < 0 || n < 0) {
      return '';
    }
    const f_m_1_n_1 = f(m - 1, n - 1);
    if (a[m] === b[n]) {
      memo[key] = `${f_m_1_n_1}${a[m]}`;
      return memo[key];
    }
    const f_m_1_n = f(m - 1, n);
    const f_m_n_1 = f(m, n - 1);
    memo[key] = f_m_1_n.length > f_m_n_1.length ? f_m_1_n : f_m_n_1;
    return memo[key];
  };

  const result = f(a.length - 1, b.length - 1);

  return result.length === 0 ? -1 : result;
};


console.log(LCS('1A2C3D4B56', 'B1D23A456A'));
console.log(LCS('abc', 'def'));
console.log(LCS('abc', 'abc'));
console.log(LCS('ab', ''));