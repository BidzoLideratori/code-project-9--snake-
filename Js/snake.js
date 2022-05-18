import { elem } from "./elementIdData.js";

export class snake {
  iniciateSnake() {}

  static rightMove() {
    let left = getComputedStyle(
      document.getElementById("snake")
    ).getPropertyValue("left");
    let newPosition = parseInt(left) + 20;
    if (newPosition <= 981) {
      document.getElementById("snake").style.left = newPosition + "px";
    }
  }
  static leftMove() {
    let left = getComputedStyle(
      document.getElementById("snake")
    ).getPropertyValue("left");
    let newPosition = parseInt(left) - 20;
    if (newPosition >= 0) {
      document.getElementById("snake").style.left = newPosition + "px";
    }
  }
  static downMove() {
    let top = getComputedStyle(
      document.getElementById("snake")
    ).getPropertyValue("top");
    let newPosition = parseInt(top) + 20;
    if (newPosition <= 580) {
      document.getElementById("snake").style.top = newPosition + "px";
    }
  }
  static upMove() {
    let top = getComputedStyle(
      document.getElementById("snake")
    ).getPropertyValue("top");
    let newPosition = parseInt(top) - 20;
    if (newPosition >= 0) {
      document.getElementById("snake").style.top = newPosition + "px";
    }
  }

  static autoMove(inputKey) {
    var interval;
    if (inputKey == "ArrowUp") {
      clearInterval(interval);
      interval = setInterval(() => {
        snake.upMove();
      }, 250);
    } else if (inputKey == "ArrowDown") {
      clearInterval(interval);
      interval = setInterval(() => {
        snake.downMove();
      }, 250);
    } else if (inputKey == "ArrowLeft") {
      clearInterval(interval);
      interval = setInterval(() => {
        snake.leftMove();
      }, 250);
    } else if (inputKey == "ArrowRight") {
      clearInterval(interval);
      interval = setInterval((event) => {
        snake.rightMove();
      }, 250);
    }
  }

  static snakeMove() {
    document.addEventListener("keydown", (event) => {
      if (event.key == "ArrowUp") {
        snake.autoMove(event.key);
      } else if (event.key === "ArrowLeft") {
        snake.autoMove(event.key);
      } else if (event.key === "ArrowRight") {
        snake.autoMove(event.key);
      } else if (event.key === "ArrowDown") {
        snake.autoMove(event.key);
      }
    });
  }
}
