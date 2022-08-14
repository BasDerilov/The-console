export class Drink {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static GenerateRandomMenu(count) {
    const types = [
      "Beer",
      "Whiskey",
      "Sparkling Water",
      "Vodka",
      "Uzo",
      "Mastika",
      "Rakia",
      "Wine",
      "Gin",
    ];

    const drinks = [];

    for (let i = 0; i < count; i++) {
      const type = types[Math.ceil(Math.random() * (types.length - 1))];
      const price = Math.ceil(Math.random() * 20);

      drinks.push(new Drink(type, price));
    }

    return drinks;
  }
  static SortDrinks(arr) {
    const copy = [...arr];
    return copy.sort((a, b) => a.price - b.price);
  }
}

export class Toner {
  constructor(cyan, magenta, yellow) {
    this.cyan = cyan;
    this.magenta = magenta;
    this.yellow = yellow;
  }

  InkLevels() {
    return Math.min(...Object.values(this));
  }
}

export class Friquency {
  constructor([...arr]) {
    const props = [...new Set(arr)];

    props.forEach((prop) => {
      let occurances = 0;

      for (const iterator of arr) {
        if (iterator === prop) occurances++;
      }

      this[prop] = occurances;
    });
  }
}

export class Change {
  constructor(amount) {
    while (amount > 0) {
      if (amount - 100 >= 0) {
        this.levs = this.levs === undefined ? 1 : this.levs + 1;
        amount -= 100;
      } else if (amount - 50 >= 0) {
        this.fifties = this.fifties === undefined ? 1 : this.fifties + 1;
        amount -= 50;
      } else if (amount - 20 >= 0) {
        this.twenties = this.twenties === undefined ? 1 : this.twenties + 1;
        amount -= 20;
      } else if (amount - 10 >= 0) {
        this.tens = this.tens === undefined ? 1 : this.tens + 1;
        amount -= 10;
      } else if (amount - 5 >= 0) {
        this.fives = this.fives === undefined ? 1 : this.fives + 1;
        amount -= 5;
      } else if (amount - 2 >= 0) {
        this.twos = this.twos === undefined ? 1 : this.twos + 1;
        amount -= 2;
      } else {
        this.ones = amount;
        amount -= 1;
      }
    }
  }
}

class Wine {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}

export class Winery {
  #brands = [
    "Sangrea",
    "Penfolds",
    "Marchesi Antinori",
    "Louis Roederer",
    "Harlan Estate",
    "Screaming Eagle",
    "Domaine de la Romanée-Conti",
    "Domaine Etienne Guigal",
    "Moët",
  ];

  GenerateWineList(length) {
    const list = [];

    while (list.length < length && list.length < this.#brands.length) {
      const wine = new Wine(
        this.#brands[Math.floor(Math.random() * this.#brands.length)],
        Math.trunc(Math.random() * 100)
      );

      if (list.some((a) => a.brand === wine.brand)) {
        continue;
      }

      list.push(wine);
    }

    return list;
  }

  static GetSecondBestWine(arr) {
    arr.sort((a, b) => a.price - b.price);

    if (arr.length === 1) {
      return arr[0];
    } else if (arr.length === 0) {
      return null;
    } else {
      return arr[arr.length - 2];
    }
  }
}

export class Indicer {
  constructor(string) {
    const uniqueLetters = new Set(string);
    // console.log(typeof 7);

    uniqueLetters.forEach((element) => {
      const temp = string.split("");
      let indexes = temp.map((el, indx) => (el === element ? indx : ""));
      indexes = indexes.filter((el) => typeof el == "number");
      // console.log(indexes);
      this[element] = indexes;
    });
  }
}

export class Student {
  constructor(name, notes) {
    this.name = name;
    this.notes = notes;
  }

  static TopNote(arrayOfStudents) {
    const students = [];

    arrayOfStudents.forEach((student) => {
      student.TopNote = student.notes.reduce((previousValue, currentValue) =>
        currentValue > previousValue ? currentValue : previousValue
      );

      students.push(student);
    });

    return students;
  }

  static TopNoteStudent(arrayOfStudents) {
    return arrayOfStudents.reduce((previousStuden, currentStudent) =>
      previousStuden.TopNote < currentStudent ? currentStudent : previousStuden
    );
  }
}

export class Dominos {
  //dominos are bastards with overpriced pizza
  static FindEligible(listOfClientsObject, minSpent, minOrders) {
    const eligible = [];

    for (const [key, value] of Object.entries(listOfClientsObject)) {
      const ordersCount = value.length;
      const orderTotal = value.reduce(
        (previous, current) => previous + current
      );

      if (orderTotal >= minSpent && ordersCount >= minOrders) {
        eligible.push(key);
      }
    }

    return eligible;
  }
}

export class Image {
  constructor(link) {
    const parts = link.split("/");

    this.id = parts[parts.length - 1];
    this.type = this.#returnType(parts);
  }

  #returnType(parts) {
    if (parts[parts.length - 2] === "a") {
      return "album";
    } else if (parts[parts.length - 2] === "gallery") {
      return "gallery";
    } else if (parts[2] === "i.imgur.com") {
      return "image direct";
    } else if (parts.length === 4) {
      return "image";
    } else {
      return "unknown";
    }
  }
}
