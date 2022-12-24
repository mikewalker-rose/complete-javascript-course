const minimumScore = 100;
//Dolphins Data
const dolphinsGame1 = 97;
const dolphinsGame2 = 112;
const dolphinsGame3 = 101;
const dolphinsAverage = (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) / 3;
//Koalas Data
const koalasGame1 = 109;
const koalasGame2 = 95;
const koalasGame3 = 106;
const koalasAverage = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

console.log(`Dolphins average score is ${dolphinsAverage}`);
console.log(`Koalas average score is ${koalasAverage}`);
if (dolphinsAverage > koalasAverage && dolphinsAverage >= minimumScore) {
  console.log(`Dolphins are the winner by ${dolphinsAverage - koalasAverage}`);
} else if (dolphinsAverage > koalasAverage && dolphinsAverage < minimumScore) {
  console.log(
    `Dolphins would have won if their score wasn't ${
      minimumScore - dolphinsAverage
    } less than the minimum score of ${minimumScore}`
  );
} else if (koalasAverage > dolphinsAverage && koalasAverage >= minimumScore) {
  console.log(`Koalas are the winner by ${koalasAverage - dolphinsAverage}`);
} else if (koalasAverage > dolphinsAverage && dolphinsAverage < minimumScore) {
  console.log(
    `Koalas would have won if their score wasn't ${
      minimumScore - koalasAverage
    } less than the minimum score of ${minimumScore}`
  );
} else if (koalasAverage === dolphinsAverage && koalasAverage >= minimumScore) {
  console.log(`It is a draw!`);
} else {
  console.log(
    `It would have been a draw, if the minimum score was not below ${minimumScore} by ${
      minimumScore - koalasAverage
    }`
  );
}
