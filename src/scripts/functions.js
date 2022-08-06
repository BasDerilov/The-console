// export function ReplaceDomain(email) {
//   return email.replace(/(@[a-z]*\.com)/g, "@novarto.com");
// }

// export function Civilize(question) {
//   return question.at(-1) === "?"
//     ? [...question, ", please"].join("")
//     : question.at(-1) !== "."
//     ? [...question, "."].join("")
//     : question;
// }

// export function Capitalize(word) {
//   let capitalised = [];
//   capitalised.push(word[0].toUpperCase());

//   for (let i = 1; i < word.length; i++) {
//     const element = word[i];
//     capitalised.push(element.toLowerCase());
//   }

//   return capitalised.join("");
// }

// export function ValidateString(str) {
//   const modified = str.split("");

//   const tmp = modified.shift();
//   modified.unshift(modified.pop());
//   modified.push(tmp);

//   return str.length > 1 ? modified.join("") : "Invalid String";
// }

// export function Java(str) {
//   return str.slice(0, 4) == "Java";
// }

// export function CheckDates(firstDate, secondDate) {
//   firstDate = Date(firstDate);
//   secondDate = Date(secondDate);

//   return firstDate > secondDate ? firstDate : secondDate;
// }

// export function Bomb(str) {
//   return str.toLowerCase().includes("bomb") ? "Duck!!!" : "No bomb, relax.";
// }

// export function CalcPasta(countOfPeople) {
//   return 10 + Math.ceil(countOfPeople * 0.25) * 20;
// }

// export function CarPrice(price, year) {
//   if (year < 3) {
//     return price * 0.8;
//   } else if (year < 10) {
//     return price * 0.5;
//   } else {
//     return price * 0.3;
//   }
// }

// export function FindTheLowerWord(str) {
//   const word = [];
//   str = str.split("");

//   str.forEach((element) => {
//     if (element == element.toLowerCase()) {
//       word.push(element);
//     }
//   });

//   return word.join("");
// }

export function EvaluateArray(arr) {
  return arr.every((bool) => bool);
}

export function FindNemo(sentance) {
  sentance = sentance.split(" ");

  return sentance.findIndex((word) => word === "Nemo") + 1;
}

export function SumNumbers(arr) {
  let sum = 0;

  arr.forEach((element) => {
    if (typeof element === typeof 1) sum += element;
  });

  return sum;
}

export function CalcVolume(boxes) {
  let totalVolume = 0;

  boxes.forEach((box) => {
    totalVolume += box[0] * box[1] * box[2];
  });

  return totalVolume;
}

export function IsArrayUnique(arr) {
  let isUnique = true;

  for (let i = 0; i < arr.length; i += 2) {
    const n = arr[i];

    if (n % 2 !== 0) {
      isUnique = false;
      break;
    }
  }

  for (let i = 1; i < arr.length; i += 2) {
    const n = arr[i];

    if (n % 2 === 0) {
      isUnique = false;
      break;
    }
  }

  return isUnique;
}

export function MirrorArray(arr) {
  const mirror = arr.slice(0, arr.length - 1);
  mirror.reverse();
  return [...arr, ...mirror];
}

export function SortArray(arr, method) {
  switch (method) {
    case "ASC":
      return arr.sort((a, b) => a - b);

    case "DESC":
      return arr.sort((a, b) => b - a);

    default:
      return arr;
  }
}

export function RemoveDublicates(arr) {
  return [...new Set(arr)];
}

export function IsFactorChain(arr) {
  let isFactorChain = true;

  arr.forEach((num, nextNumIndex) => {
    if (arr[nextNumIndex] % num !== 0) isFactorChain = false;
  });

  return isFactorChain;
}

export function ProgressDays(arr) {
  let progressDays = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) progressDays++;
  }

  return progressDays;
}

export function IsSpecialMatrix(arr) {
  arr.forEach((str, i) => {
    arr[i] = str.split(" ").map(Number);
  });

  const rowResults = [];
  const colResults = [];

  arr.forEach((row) => {
    let total = 0;
    row.forEach((n) => {
      total += n;
    });
    rowResults.push(total);
  });

  for (let i = 0; i < arr[0].length; i++) {
    let total = 0;
    for (let j = 0; j < arr.length; j++) {
      total += arr[i][j];
    }
    colResults.push(total);
  }

  return (
    rowResults.every((val) => val === rowResults[0]) &&
    colResults.every((val) => val === colResults[0])
  );
}
