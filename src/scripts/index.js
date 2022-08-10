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

Btn1.addEventListener("click", (event) => {});

Btn2.addEventListener("click", (event) => {});

Btn3.addEventListener("click", (event) => {});

Btn4.addEventListener("click", (event) => {});

Btn5.addEventListener("click", (event) => {});

Btn6.addEventListener("click", (event) => {});

Btn7.addEventListener("click", (event) => {});

Btn8.addEventListener("click", (event) => {});

Btn9.addEventListener("click", (event) => {});

Btn10.addEventListener("click", (event) => {});

Btn11.addEventListener("click", (event) => {});

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
