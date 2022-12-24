const homeCountry = "United Kingdom";
const continent = "Europe";
const language = "English";
const isIsland = true;
let ukPopulation = 70;
let halfUkPopulation = ukPopulation / 2;
const otherCountry1 = "Finland";
let otherPopulation1 = 6;
let averagePopulation = 33;
let populationDifference1 = ukPopulation - otherPopulation1;
let populationDifferenceAverage = ukPopulation - averagePopulation;
let description = `The ${homeCountry} is in ${continent}, and its ${ukPopulation} million people speak ${language}`;
// let numNeighbours = Number(
//   prompt("How many nighbour countries does your country have?")
// );

console.log(description);

if (populationDifferenceAverage > 0) {
  console.log(
    `The ${homeCountry}'s population is ${populationDifferenceAverage} million people above the average population of ${averagePopulation} million`
  );
} else if (populationDifferenceAverage < 0) {
  console.log(
    `The ${homeCountry}'s population is ${
      populationDifferenceAverage * -1
    } million people below the average population of ${averagePopulation} million`
  );
} else {
  console.log(
    `The ${homeCountry} has the same population as the average population, ${averagePopulation} million`
  );
}

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No borders");
// }

if (language === "English" && ukPopulation < 50 && !isIsland) {
  console.log(`You should live in the ${homeCountry}`);
} else {
  console.log(`${homeCountry} does not meet your criteria`);
}

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log(`${language} has the greatest number of native speakers`);
    break;
  case "Spanish":
    console.log(
      `${language} has the second greatest number of native speakers`
    );
    break;
  case "English":
    console.log(`${language} has the third greatest number of native speakers`);
    break;
  case "Hindi":
    console.log(
      `${language} has 4th place for greatest number of native speakers`
    );
    break;
  case "Arabic":
    console.log(
      `${language} has 5th place for greatest number of native speakers`
    );
    break;
  default:
    console.log(`${language} is a great language too!`);
}

let ukAboveAverage = ukPopulation > averagePopulation ? "above" : "not above";
console.log(`${homeCountry}'s population is ${ukAboveAverage} average`);
