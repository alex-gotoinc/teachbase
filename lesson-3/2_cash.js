const cache = () => {
  let cachedData = [];

  const isFromCache = (data, cache = cachedData) => {
    return JSON.stringify(data) === JSON.stringify(cache)
  }

  return (x, n) => {
    let res = x;

    for (let i = 1; i < n; i++) {
      res *= x;
    }

    const obj = {
      value: res,
      fromCache: isFromCache([x, n], cachedData)
    }

    cachedData = [x, n];
    return obj;
  }
}

const calculate = cache();

console.log(calculate(3, 3));
console.log(calculate(2, 10));
console.log(calculate(2, 10));

