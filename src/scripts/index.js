import { NameValidation, NumericValidation, Hide, Show } from "./functions";
import { Slots } from "./game";

const [form, nameInput, balanceInput, stakeInput] = [
  document.getElementById("form"),
  document.getElementById("nameInput"),
  document.getElementById("balanceInput"),
  document.getElementById("stakeInput"),
];

let slotsGame = undefined;

const nameRegex = new RegExp("[a-zA-Z ]");
const moneyRegex = new RegExp("[0-9]");

nameInput.addEventListener("keypress", NameValidation);
balanceInput.addEventListener("keypress", NumericValidation);
stakeInput.addEventListener("keypress", NumericValidation);

document.getElementById("start").addEventListener("click", (_ev) => {
  // form.classList.add("visually-hidden");

  if (nameInput.value.length !== 0) {
    if (balanceInput.value.length !== 0) {
      if (stakeInput.value.length !== 0) {
        Hide(form);
        slotsGame = new Slots(
          nameInput.value,
          balanceInput.value,
          stakeInput.value
        );
      } else {
        alert("Stake field is required");
      }
    } else {
      alert("Balance field is required");
    }
  } else {
    alert("Name field is required");
  }
});
