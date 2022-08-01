export function CelsiusToFarenheit(celsius) {
  return isNaN(celsius) ? "Invalid Value" : celsius * 1.8 + 32;
}

export function FarenheitToCelsius(farenheit) {
  return isNaN(farenheit) ? "Invalid Value" : (farenheit - 32) * 0.556;
}

export function PositiveOrNegative(number) {
  return isNaN(number)
    ? "Invalid Value"
    : number === 0
    ? null
    : number > 0
    ? true
    : false;
}

export function Average(n1, n2) {
  return isNaN(n1) || isNaN(n2) ? "Invalid Value" : Math.ceil((n1 + n2) / 2);
}

export function ReturnClosestToHundred(n1, n2) {
  return isNaN(n1) || isNaN(n2)
    ? "Invalid Value"
    : Math.abs(100 - n1) < Math.abs(100 - n2)
    ? n1
    : n2;
}

export function GetGrade(points) {
  if (points < 41) {
    return 2;
  } else if (points < 61) {
    return 3;
  } else if (points < 81) {
    return 4;
  } else if (points < 91) {
    return 5;
  } else if (points <= 100) {
    return 6;
  } else {
    return "Invalid Value";
  }
}

export function MinutesToSeconds(minutes) {
  return isNaN(minutes) ? "Invalid Value" : minutes * 60;
}

export function SumPreceedingTwo(n) {
  return isNaN(n) ? "Invalid Value" : n - 1 + (n - 2);
}

export function YearsToDays(years) {
  return isNaN(years) ? "Invalid Value" : years * 365.25;
}

export function BasketballCalc(twoPointers, threePointers) {
  return isNaN(twoPointers) || isNaN(threePointers)
    ? "Invalid Value"
    : twoPointers * 2 + threePointers * 3;
}

export function CountAnimalLegs(chickens, pigs, cows) {
  if (isNaN(chickens) && isNaN(pigs) && isNaN(cows)) {
    return "Invalid Value";
  }

  return chickens * 2 + pigs * 4 + cows * 4;
}

export function SumPreceeding(n) {
  let product = 0;

  for (let i = n; i >= 0; i--) {
    product += i;
  }

  return product;
}
