`use-strict`;
import { Greet } from "./greeting";
import { FakeConsole } from "./console";
import * as functions from "./functions";

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
  let value = prompt("enter bools separated by spaces");
  value = value.split(" ");

  value.forEach((element, i) => {
    if (element === "true") value[i] = true;
    else if (element === "false") value[i] = false;
  });

  LogOutput(HandleInput(functions.EvaluateArray, value), event);
});

Btn2.addEventListener("click", (event) => {
  const value = prompt("Enter Nemo sentance");
  LogOutput(HandleInput(functions.FindNemo, value), event);
});

Btn3.addEventListener("click", (event) => {
  const value = [1, 2, 3, true, false, "5", 2, [10]];
  AlertUsedArray(value);
  LogOutput(HandleInput(functions.SumNumbers, value), event);
});

Btn4.addEventListener("click", (event) => {
  const value = [
    [1, 2, 1],
    [2, 2, 2],
    [3, 1, 2],
  ];
  AlertUsedArray(value);
  LogOutput(HandleInput(functions.CalcVolume, value), event);
});

Btn5.addEventListener("click", (event) => {
  const value = [2, 1, 4, 9, 6];
  AlertUsedArray(value);
  LogOutput(HandleInput(functions.IsArrayUnique, value), event);
});

Btn6.addEventListener("click", (event) => {
  const value = [1, 2, 3, true, false, 5];
  AlertUsedArray(value);
  LogOutput(HandleInput(functions.MirrorArray, value), event);
});

Btn7.addEventListener("click", (event) => {
  const value1 = [5, 8, 3, 8, 4, 7, 0, 6];
  AlertUsedArray(value1);
  const value2 = prompt("Enter sorting method");
  LogOutput(HandleInput(functions.SortArray, value1, value2), event);
});

Btn8.addEventListener("click", (event) => {
  const value = ["Dimitar", "Ivan", "Ivan", "Vasil", "Niki"];
  AlertUsedArray(value);
  LogOutput(HandleInput(functions.RemoveDublicates, value), event);
});

Btn9.addEventListener("click", (event) => {
  const value = [3, 6, 12, 36];
  AlertUsedArray(value);
  LogOutput(HandleInput(functions.IsFactorChain, value), event);
});

Btn10.addEventListener("click", (event) => {
  const value = [10, 11, 12, 9, 10];
  AlertUsedArray(value);
  LogOutput(HandleInput(functions.ProgressDays, value), event);
});

Btn11.addEventListener("click", (event) => {
  const value = ["4 5 6", "6 5 4", "5 5 5"];
  AlertUsedArray(value);
  LogOutput(HandleInput(functions.IsSpecialMatrix, value), event);
});

function SwitchConsole() {
  if (switchElement.checked === true) {
    logger = console;
  } else {
    logger = FakeConsole;
  }
}

function HandleInput(callback) {
  if (arguments.length === 1) {
    logger.log("Not enough arguments");
  } else if (arguments.length === 2) {
    return callback(arguments[1]);
  } else if (arguments.length === 3) {
    return callback(arguments[1], arguments[2]);
  } else if (arguments.length === 4) {
    return callback(arguments[1], arguments[2], arguments[3]);
  } else {
    logger.log("Too many arguments!");
  }
}

function LogOutput(value, event) {
  logger.log(`The output of ${event.originalTarget.innerHTML} is : ${value}`);
}

function AlertUsedArray(arr) {
  alert(
    `The array that will be passed in is: ${arr}\nYou can change that in the source code`
  );
}
