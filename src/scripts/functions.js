export const NameValidation = (event) => {
  const regex = new RegExp("[a-zA-Z ]");
  BlockInput(event, regex);
};
export const NumericValidation = (event) => {
  const regex = new RegExp("[0-9]");
  BlockInput(event, regex);
};

function BlockInput(event, regex) {
  const key = event.key;
  console.log(regex.test(key), regex, key);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
}

export function ValidateInput(inputEl, regex) {
  return regex.test(inputEl.value);
}

export function Hide(element) {
  element.classList.add("visually-hidden");
}

export function Show(element) {
  element.classList.remove("visually-hidden");
}
