import * as main from "./index";
import { Modal } from "bootstrap";
import { Slots } from "./game";

let gameObj = undefined;
let delay = 500;

export const NameValidation = (event) => {
  const regex = new RegExp("[a-zA-Z ]");
  BlockInput(event, regex);
};
export const NumericValidation = (event) => {
  const regex = new RegExp("[0-9]");
  BlockInput(event, regex);
};
export const InGameStakeSizeCheck = (event) => {
  CorrectInput(event, gameObj.balance);
};
export const FormStakeSize = (event) => {
  CorrectInput(event, main.balanceInput.value);
};

export const StartGame = (_event) => {
  if (main.nameInput.value.length !== 0) {
    if (main.balanceInput.value.length !== 0) {
      if (main.stakeInput.value.length !== 0) {
        Hide(main.form);
        gameObj = new Slots(
          main.nameInput.value,
          parseInt(main.balanceInput.value),
          parseInt(main.stakeInput.value)
        );
        main.inGameStake.max = gameObj.balance;
        InitGame();
      } else {
        alert("Stake field is required");
      }
    } else {
      alert("Balance field is required");
    }
  } else {
    alert("Name field is required");
  }
};

export const ExitGame = (_event) => {
  Hide(main.game);
  main.modalplayerName.textContent = gameObj.playerName;
  main.modalWinnings.textContent = gameObj.balance;
  main.modalStake.textContent = gameObj.stake;
  main.modalSpins.textContent = gameObj.spins;
  Show(main.form);
};

export const Spin = async (_event) => {
  gameObj.stake = main.inGameStake.value;
  gameObj.Spin();

  main.spinBtn.disabled = true;

  for (let i = 0; i < main.spinnerArr.length; i++) {
    main.slotsArr[i].textContent = "";
    Show(main.spinnerArr[i]);
  }
  await new Promise((resolve) => setTimeout(resolve, delay + 500));

  for (let i = 0; i < gameObj.tokens.length; i++) {
    const element = gameObj.tokens[i];
    await new Promise((resolve) => setTimeout(resolve, delay));
    Hide(main.spinnerArr[i]);
    main.slotsArr[i].textContent = element;
  }

  main.inGameStake.max = gameObj.balance;
  main.lastWin.textContent = gameObj.lastWin;
  main.inGameBalance.textContent = gameObj.balance;
  main.spinBtn.disabled = false;
  if (gameObj.balance <= 0) {
    NotEnoughMoneyModal();
  }
};

function InitGame() {
  Show(main.game);

  main.inGameStake.value = gameObj.stake;
  main.inGameBalance.innerText = gameObj.balance;
}

function BlockInput(event, regex) {
  const key = event.key;
  // console.log(regex.test(key), regex, key);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
}

function CorrectInput(event, maxValue) {
  if (parseInt(event.target.value) > parseInt(maxValue)) {
    event.key;
    event.target.value = maxValue;
    event.preventDefault();
  }
}

function NotEnoughMoneyModal() {
  const modal = new Modal(main.notEnoughMoneyModal, { backdrop: false });

  modal.show();
}

export const ContinueGame = (_event) => {
  gameObj.balance = main.noMoneyInput.value;
  gameObj.stake = 0;
  InitGame();
};

export function ValidateInput(inputEl, regex) {
  return regex.test(inputEl.value);
}

export function Hide(element) {
  element.classList.add("visually-hidden");
}

export function Show(element) {
  element.classList.remove("visually-hidden");
}
