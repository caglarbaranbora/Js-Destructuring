function fib(n) {
  // Step 1: Define the base case(s) here.
  if (n === 0) {
    console.log(0);
    return 0;
  }
  if (n === 1) {
    console.log(1);
    return 1;
  }
  const result = fib(n - 1) + fib(n - 2);
  console.log(result);
  return result;
}

console.log(fib(5));
