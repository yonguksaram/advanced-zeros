module.exports = function getZerosCount(number, base) {
  let maxDiv = base;
  for (let i = maxDiv; i > 1; i--) {
    if (maxDiv % i == 0) {
      maxDiv = i;
    }
  }
  let countMaxDiv = 0;
  let countMaxBase = base;
  while (countMaxBase % maxDiv == 0) {
    countMaxDiv++;
    countMaxBase = countMaxBase / maxDiv;
  }
  let power = 0;
  let powerMax = 1;
  while (number / powerMax > 1) {
    powerMax *= maxDiv;
    power += Math.floor(number / powerMax);
  }
  return Math.floor(power / countMaxDiv)
}