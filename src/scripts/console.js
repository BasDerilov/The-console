export class FakeConsole {
  static log = function () {
    for (let i = 0; i < arguments.length; i++) {
      const element = arguments[i];
      this.AddLineToLog(element);
    }
  };

  static AddLineToLog = function (line) {
    const fakeConsole = document.getElementById("console");
    const loggedArr = Array.from(fakeConsole.children);

    const newLineElement = document.createElement("p");
    newLineElement.textContent = "> " + line;

    loggedArr.push(newLineElement);

    if (loggedArr.length > 7) {
      console.log(loggedArr.shift());
    }

    fakeConsole.innerHTML = "";

    for (let i = 0; i < loggedArr.length; i++) {
      const element = loggedArr[i];

      if (i === loggedArr.length - 1) {
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }

      fakeConsole.appendChild(element);
    }
  };
}
