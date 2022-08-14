`use-strict`;
import { Greet } from "./greeting";
import { FakeConsole } from "./console";
import * as functions from "./functions";
import {
  Drink,
  Toner,
  Friquency,
  Change,
  Winery,
  Indicer,
  Student,
  Dominos,
  Image,
} from "./abstractions";

let logger = FakeConsole;

const switchElement = document.getElementById("consoleSwitch");
const Btn1 = document.getElementById("1");
const Btn2 = document.getElementById("2");
const Btn3 = document.getElementById("3");
const Btn4 = document.getElementById("4");
const Btn5 = document.getElementById("5");
const Btn6 = document.getElementById("6");
const Btn7 = document.getElementById("7");
const Btn8 = document.getElementById("8");
const Btn9 = document.getElementById("9");
const Btn10 = document.getElementById("10");
const Btn11 = document.getElementById("11");
const Btn12 = document.getElementById("12");

Greet();
SwitchConsole();

switchElement.addEventListener("click", SwitchConsole);

Btn1.addEventListener("click", (event) => {
  const value = Drink.GenerateRandomMenu(5);
  AlertUsedArray(value);
  LogOutput(Drink.SortDrinks(value), event);
});

Btn2.addEventListener("click", (event) => {
  const value = new Toner(15, 5, 12);
  AlertUsedObj(value);
  LogOutput(value.InkLevels(), event);
});

Btn3.addEventListener("click", (event) => {
  const value = ["A", "B", "A", "A", "A", "C", "C", "C", "C", "D"];
  AlertUsedArray(value);
  LogOutput(new Friquency(value), event);
});

Btn4.addEventListener("click", (event) => {
  const value = parseInt(prompt("Enter the change you have"));
  LogOutput(new Change(value), event);
});

Btn5.addEventListener("click", (event) => {
  const value = parseInt(
    prompt(
      "Enter the amount of wines in the store (if you enter more than 9 your PC will die)"
    )
  );

  const wineList = new Winery().GenerateWineList(value);
  const bestWine = Winery.GetSecondBestWine(wineList);

  LogOutput(wineList, event);
  bestWine !== null
    ? logger.log(
        `The second best wine is: ${bestWine.brand} - ${bestWine.price}`
      )
    : logger.log(`The second best wine is: ${bestWine}`);
});

Btn6.addEventListener("click", (event) => {
  const value = prompt("enter string");

  LogOutput(new Indicer(value), event);
});

Btn7.addEventListener("click", (event) => {
  const value = [
    new Student("Ivan", [5, 4, 3, 2, 6]),
    new Student("Petko", [3, 2, 3, 5]),
    new Student("Stancho", [2, 2, 5, 2, 3, 5]),
  ];

  const students = Student.TopNote(value);
  LogOutput(students, event);
  LogOutput(Student.TopNoteStudent(students), event);
});

Btn8.addEventListener("click", (event) => {
  const value = {
    DimitarTrendafilov: [5.5, 4.5, 6, 3],
    IvanVladimirov: [4, 7.2, 6],
    VasilDudinski: [18.5],
    NikiAngelov: [3.5, 3.5, 2.5, 3, 4],
  };

  const minOrders = parseFloat(
    prompt("Enter minimum count of orders for free pizza")
  );
  const minValue = parseFloat(prompt("Enter minimum total spending value"));

  LogOutput(Dominos.FindEligible(value, minValue, minOrders), event);
});

Btn9.addEventListener("click", (event) => {
  const value = prompt("Enter image link");
  LogOutput(new Image(value), event);
});

function SwitchConsole() {
  if (switchElement.checked === true) {
    logger = console;
  } else {
    logger = FakeConsole;
  }
}

// function HandleInput(callback) {
//   if (arguments.length === 1) {
//     logger.log("Not enough arguments");
//   } else if (arguments.length === 2) {
//     return callback(arguments[1]);
//   } else if (arguments.length === 3) {
//     return callback(arguments[1], arguments[2]);
//   } else if (arguments.length === 4) {
//     return callback(arguments[1], arguments[2], arguments[3]);
//   } else {
//     logger.log("Too many arguments!");
//   }
// }

function LogOutput(value, event) {
  logger.log(`The output of ${event.originalTarget.innerHTML} is : `);
  if (value.length) {
    switchElement.checked === true
      ? ""
      : logger.log(
          "Maybe use the browser console for this one (upper ricght corner tickbox)"
        );
    value.forEach((element) => {
      logger.log(element);
    });
  } else {
    logger.log(value);
  }
}

function AlertUsedArray(arr) {
  const values = [];

  arr.forEach((element) => {
    values.push(Object.values(element));
  });

  alert(
    `The array that will be passed in is: ${values}\nYou can change that in the source code`
  );
}

function AlertUsedObj(obj) {
  alert(
    `The object has the following values ${Object.keys(obj)} : ${Object.values(
      obj
    )}`
  );
}
