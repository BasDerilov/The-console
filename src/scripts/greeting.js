import { FakeConsole } from "./console";

export function Greet() {
  setTimeout(() => {
    FakeConsole.log("Hello World");

    setTimeout(() => {
      FakeConsole.log("Welcome To The Console");
    }, 1500);
  }, 2000);
}
