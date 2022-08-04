export function ReplaceDomain(email) {
  return email.replace(/(@[a-z]*\.com)/g, "@novarto.com");
}

export function Civilize(question) {
  return question.at(-1) === "?"
    ? [...question, ", please"].join("")
    : question.at(-1) !== "."
    ? [...question, "."].join("")
    : question;
}

export function Capitalize(word) {
  let capitalised = [];
  capitalised.push(word[0].toUpperCase());

  for (let i = 1; i < word.length; i++) {
    const element = word[i];
    capitalised.push(element.toLowerCase());
  }

  return capitalised.join("");
}

export function ValidateString(str) {
  const modified = str.split("");

  const tmp = modified.shift();
  modified.unshift(modified.pop());
  modified.push(tmp);

  return str.length > 1 ? modified.join("") : "Invalid String";
}

export function Java(str) {
  return str.slice(0, 4) == "Java";
}

export function CheckDates(firstDate, secondDate) {
  firstDate = Date(firstDate);
  secondDate = Date(secondDate);

  return firstDate > secondDate ? firstDate : secondDate;
}

export function Bomb(str) {
  return str.toLowerCase().includes("bomb") ? "Duck!!!" : "No bomb, relax.";
}

export function CalcPasta(countOfPeople) {
  return 10 + Math.ceil(countOfPeople * 0.25) * 20;
}

export function CarPrice(price, year) {
  if (year < 3) {
    return price * 0.8;
  } else if (year < 10) {
    return price * 0.5;
  } else {
    return price * 0.3;
  }
}

export function FindTheLowerWord(str) {
  const word = [];
  str = str.split("");

  str.forEach((element) => {
    if (element == element.toLowerCase()) {
      word.push(element);
    }
  });

  return word.join("");
}
