`use-strict`;
import { Greet } from "./greeting";
import { FakeConsole } from "./console";
import * as functions from "./functions";

let logger = FakeConsole;

const switchElement = document.getElementById("consoleSwitch");
const celsiusToFarenBtn = document.getElementById("CelsiusToFaren");
const farenToCelsiusBtn = document.getElementById("FarenToCelsius");
const positiveOrNegativeBtn = document.getElementById("PositiveOrNegative");
const getAverageBtn = document.getElementById("GetAverage");
const closestToHundredBtn = document.getElementById("ClosestToHundred");
const getGradeBtn = document.getElementById("GetGrade");
const minutesToSecondsBtn = document.getElementById("MinutesToSeconds");
const sumOfTwoPrecedingBtn = document.getElementById("SumOfTwoPreceding");
const daysToYearsBtn = document.getElementById("DaysToYears");
const basketballPointsBtn = document.getElementById("BasketballPoints");
const animalLegsBtn = document.getElementById("AnimalLegs");
const sumAllPrecedingBtn = document.getElementById("SumAllPreceding");

Greet();
SwitchConsole();

switchElement.addEventListener("click", SwitchConsole);

celsiusToFarenBtn.addEventListener("click", (event) => {
  const value = parseInt(prompt("Enter celsius"));

  if (value !== null) {
    logger.log(
      `The output of ${event.originalTarget.innerHTML} is : ${
        Math.round(functions.CelsiusToFarenheit(value) * 10) / 10
      }`
    );
  }
});

farenToCelsiusBtn.addEventListener("click", (event) => {
  const value = parseInt(prompt("Enter farenheit"));

  if (value !== null) {
    logger.log(
      `The output of ${
        event.originalTarget.innerHTML
      } is : ${functions.FarenheitToCelsius(value)}`
    );
  }
});

positiveOrNegativeBtn.addEventListener("click", (event) => {
  const value = parseInt(prompt("Entet a number"));

  if (value !== null) {
    logger.log(
      `The output of ${
        event.originalTarget.innerHTML
      } is : ${functions.PositiveOrNegative(value)}`
    );
  }
});

getAverageBtn.addEventListener("click", (event) => {
  const valueOne = parseInt(prompt("Enter first number"));
  const valueTwo = parseInt(prompt("Enter second number"));

  if (valueOne !== null && valueTwo !== null) {
    logger.log(
      `The output of ${event.originalTarget.innerHTML} is : ${functions.Average(
        valueOne,
        valueTwo
      )}`
    );
  }
});

closestToHundredBtn.addEventListener("click", (event) => {
  const valueOne = parseInt(prompt("Enter first number"));
  const valueTwo = parseInt(prompt("Enter second number"));

  if (valueOne !== null && valueTwo !== null) {
    logger.log(
      `The output of ${
        event.originalTarget.innerHTML
      } is : ${functions.ReturnClosestToHundred(valueOne, valueTwo)}`
    );
  }
});

getGradeBtn.addEventListener("click", (event) => {
  const value = parseInt(prompt("Enter points"));

  if (value !== null) {
    logger.log(
      `The output of ${
        event.originalTarget.innerHTML
      } is : ${functions.GetGrade(value)}`
    );
  }
});

minutesToSecondsBtn.addEventListener("click", (event) => {
  const value = parseInt(prompt("Enter points"));

  if (value !== null) {
    logger.log(
      `The output of ${
        event.originalTarget.innerHTML
      } is : ${functions.MinutesToSeconds(value)}`
    );
  }
});

sumOfTwoPrecedingBtn.addEventListener("click", (event) => {
  const value = parseInt(prompt("Enter value"));

  if (value !== null) {
    logger.log(
      `The output of ${
        event.originalTarget.innerHTML
      } is : ${functions.SumPreceedingTwo(value)}`
    );
  }
});

daysToYearsBtn.addEventListener("click", (event) => {
  const value = parseInt(prompt("Enter years"));

  if (value !== null) {
    logger.log(
      `The output of ${
        event.originalTarget.innerHTML
      } is : ${functions.YearsToDays(value)}`
    );
  }
});

basketballPointsBtn.addEventListener("click", (event) => {
  const valueOne = parseInt(prompt("Enter two pointers"));
  const valueTwo = parseInt(prompt("Enter three pointers"));

  if (valueOne !== null && valueTwo !== null) {
    logger.log(
      `The output of ${
        event.originalTarget.innerHTML
      } is : ${functions.BasketballCalc(valueOne, valueTwo)}`
    );
  }
});

animalLegsBtn.addEventListener("click", (event) => {
  const valueOne = parseInt(prompt("Enter chickens"));
  const valueTwo = parseInt(prompt("Enter pigs"));
  const valueThree = parseInt(prompt("Enter cows"));

  if (valueOne !== null && valueTwo !== null && valueThree !== null) {
    logger.log(
      `The output of ${
        event.originalTarget.innerHTML
      } is : ${functions.CountAnimalLegs(valueOne, valueTwo, valueThree)}`
    );
  }
});

sumAllPrecedingBtn.addEventListener("click", (event) => {
  const value = parseInt(prompt("Enter value"));

  if (value !== null) {
    logger.log(
      `The output of ${
        event.originalTarget.innerHTML
      } is : ${functions.SumPreceeding(value)}`
    );
  }
});

// const value = prompt("Hello");
// console.log(value);

function SwitchConsole() {
  if (switchElement.checked === true) {
    logger = console;
  } else {
    logger = FakeConsole;
  }
}
