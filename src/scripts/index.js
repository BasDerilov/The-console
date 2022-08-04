`use-strict`;
import { Greet } from "./greeting";
import { FakeConsole } from "./console";
import * as functions from "./functions";

let logger = FakeConsole;

const switchElement = document.getElementById("consoleSwitch");
const switchDomainBtn = document.getElementById("1");
const civilizeBtn = document.getElementById("3");
const capitalizeBtn = document.getElementById("4");
const validStringBtn = document.getElementById("5");
const isItJavaBtn = document.getElementById("6");
const checkDatesBtn = document.getElementById("7");
const bombBtn = document.getElementById("8");
const pastaBtn = document.getElementById("9");
const bri4kaBtn = document.getElementById("10");
const fugitiveWordBtn = document.getElementById("11");
const sumAllPrecedingBtn = document.getElementById("12");

Greet();
SwitchConsole();

switchElement.addEventListener("click", SwitchConsole);

switchDomainBtn.addEventListener("click", (event) => {
  const value = prompt("Enter email");
  LogOutput(HandleInput(functions.ReplaceDomain, value), event);
});

civilizeBtn.addEventListener("click", (event) => {
  const value = prompt("Enter your question or sentance");
  LogOutput(HandleInput(functions.Civilize, value), event);
});

capitalizeBtn.addEventListener("click", (event) => {
  const value = prompt("Enter string to capitalise");
  LogOutput(HandleInput(functions.Capitalize, value), event);
});

validStringBtn.addEventListener("click", (event) => {
  const value = prompt("Enter a valid string").trim();
  LogOutput(HandleInput(functions.ValidateString, value), event);
});

isItJavaBtn.addEventListener("click", (event) => {
  const value = prompt("Enter word");
  LogOutput(HandleInput(functions.Java, value), event);
});

checkDatesBtn.addEventListener("click", (event) => {
  const value1 = prompt("Enter first date");
  const value2 = prompt("Enter second date");
  LogOutput(HandleInput(functions.CheckDates, value1, value2), event);
});

bombBtn.addEventListener("click", (event) => {
  const value = prompt("Enter jihad string");
  LogOutput(HandleInput(functions.Bomb, value), event);
});

pastaBtn.addEventListener("click", (event) => {
  const value = prompt("How many people will eat pasta?");
  LogOutput(HandleInput(functions.CalcPasta, value), event);
});

bri4kaBtn.addEventListener("click", (event) => {
  const value1 = prompt("Enter car price");
  const value2 = prompt("Enter car age");

  LogOutput(HandleInput(functions.CarPrice, value1, value2), event);
});

fugitiveWordBtn.addEventListener("click", (event) => {
  const value = prompt("Enter crowd of letters");
  LogOutput(HandleInput(functions.FindTheLowerWord, value), event);
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
