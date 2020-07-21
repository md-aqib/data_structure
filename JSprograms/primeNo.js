//prime no. program: Number which have only 2 factors, 1 and the no itself
function primeNo(num) {
  if (num === 1 || num <= 0) {
    return false;
  }
  if (num === 2) {
    return true;
  } else {
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(primeNo(9));
