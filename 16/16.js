function sum(...args) {
  let sum = 0;
  args.map((element) => sum += element)
  return sum;
}

console.log(sum(1, 2, 3, 4))