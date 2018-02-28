module.exports = function getZerosCount(number, base) {
  let maxDiv = base;
  for (let i=maxDiv; i>1; i--) {
    if (maxDiv%i==0) {
      maxDiv = i;
    }
  }
  let countMaxDiv = 0;
  let countMaxBase = base;
  while (true) {
    if (countMaxBase % maxDiv == 0) {
      countMaxDiv++;
      countMaxBase = countMaxBase / maxDiv;
    } else {
      break
    }
  }
  let power = 0;
  let powerMax = 1;
  while (true) {
    powerMax *= maxDiv;
    power += Math.floor(number/powerMax);
    if (number/powerMax <= 1)
      break
  }
    return Math.floor(power/countMaxDiv)
}