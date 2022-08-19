import {
  ExitGame,
  FormStakeSize,
  InGameStakeSizeCheck,
  NameValidation,
  NumericValidation,
  Spin,
  StartGame,
} from "./functions";
require("bootstrap");

export const [
  form,
  nameInput,
  balanceInput,
  stakeInput,
  startBtn,
  lastWin,
  exitBtn,
  slotsArr,
  inGameBalance,
  inGameStake,
  spinBtn,
  game,
  spinnerArr,
] = [
  document.getElementById("form"),
  document.getElementById("nameInput"),
  document.getElementById("balanceInput"),
  document.getElementById("stakeInput"),
  document.getElementById("start"),
  document.getElementById("lastWinAmount"),
  document.getElementById("exit"),
  document.querySelectorAll(".slot"),
  document.getElementById("inGameBalance"),
  document.getElementById("inGameStake"),
  document.getElementById("spin"),
  document.getElementById("game"),
  document.querySelectorAll(".spinner"),
];

inGameStake.addEventListener("keypress", NumericValidation);
inGameStake.addEventListener("keyup", InGameStakeSizeCheck);
nameInput.addEventListener("keypress", NameValidation);
balanceInput.addEventListener("keypress", NumericValidation);
stakeInput.addEventListener("keypress", NumericValidation);
stakeInput.addEventListener("keyup", FormStakeSize);
startBtn.addEventListener("click", StartGame);
exitBtn.addEventListener("click", ExitGame);
spinBtn.addEventListener("click", Spin);
