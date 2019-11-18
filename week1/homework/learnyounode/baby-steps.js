const steps = [1, 2, 3];
console.log(steps);
function countSteps(numbers) {
  const babySteps = numbers.reduce((acc, cur) => acc + cur);
  console.log(babySteps);
}

countSteps(steps);