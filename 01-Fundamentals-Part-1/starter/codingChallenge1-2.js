//Test Data 1
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;
bmiDifferential = bmiMark - bmiJohn;

//Test Data 2
const massMark2 = 95;
const massJohn2 = 85;
const heightMark2 = 1.88;
const heightJohn2 = 1.76;
const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmiJohn2 = massJohn2 / heightJohn2 ** 2;
const markHigherBMI2 = bmiMark2 > bmiJohn2;
bmiDifferential2 = bmiMark2 - bmiJohn2;

console.log(`Mark has a BMI of ${bmiMark}`);
console.log(`John has a BMI of ${bmiJohn}`);
console.log(
  `The statement "Mark has a higher BMI than John" is ${markHigherBMI}`
);

if (bmiDifferential > 0) {
  console.log(`Mark's BMI is ${bmiMark - bmiJohn} higher than John's!`);
} else if (bmiDifferential < 0) {
  console.log(`John's BMI is ${bmiJohn - bmiMark} higher than Mark's!`);
} else {
  console.log(`Mark and John have the same BMI`);
}

console.log(`Mark has a BMI of ${bmiMark2}`);
console.log(`John has a BMI of ${bmiJohn2}`);
console.log(
  `The statement "Mark has a higher BMI than John" is ${markHigherBMI2}`
);

if (bmiDifferential2 > 0) {
  console.log(`Mark's BMI is ${bmiMark2 - bmiJohn2} higher than John's!`);
} else if (bmiDifferential2 < 0) {
  console.log(`John's BMI is ${bmiJohn2 - bmiMark2} higher than Mark's!`);
} else {
  console.log(`Mark and John have the same BMI`);
}
