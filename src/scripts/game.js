export class Slots {
  constructor(playerName, balance, stake) {
    this.playerName = playerName;
    this.balance = balance;
    this.stake = stake;
    this.tokens = [];
    this.RandomizeTokens(5);
    this.spins = 0;
  }

  Spin() {
    this.balance -= this.stake;
    this.RandomizeTokens(5);
    this.lastWin = this.stake * this.GetMultiplier();
    this.balance += this.lastWin;
    this.spins++;
  }

  GetMultiplier() {
    if (this.tokens.every((token) => token === this.tokens[0])) {
      return 25;
    }

    for (let i = 0; i < Math.ceil(this.tokens.length / 4); i++) {
      const element = this.tokens[i];
      if (this.tokens.slice(i, i + 4).every((char) => char === element)) {
        return 10;
      }
    }

    for (let i = 0; i < 3; i++) {
      const element = this.tokens[i];
      if (this.tokens.slice(i, i + 3).every((char) => char === element)) {
        return 5;
      }
    }

    for (let i = 0; i < this.tokens.length; i++) {
      const token = this.tokens[i];

      const matches = this.tokens.filter(
        (candidate) => candidate === token
      ).length;

      if (matches === 3) {
        return 3;
      }
    }

    return 0;
  }

  RandomizeTokens(tokenCount) {
    this.tokens = [];
    for (let i = 0; i < tokenCount; i++) {
      this.tokens.push(String.fromCharCode(this.#getRandomInt(65, 69)));
    }
  }

  #getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
