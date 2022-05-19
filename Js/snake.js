import { elem } from "./elementIdData.js";

export class snake {
  static move() {
    let propertyValue = elem.currentDirection;
    let change = elem.currentChange;
    elem.interval = setInterval(() => {
      document.addEventListener("keydown", (e) => {
        elem.highScore.innerHTML = `Your Score: ${elem.counter}`;
        elem.input = e.key;
        if (elem.input == "ArrowUp") {
          propertyValue = "top";
          change = -20;
          elem.currentChange = -20;
          elem.currentDirection = "top";
        } else if (elem.input == "ArrowDown") {
          propertyValue = "top";
          change = 20;
          elem.currentChange = 20;
          elem.currentDirection = "top";
        } else if (elem.input == "ArrowLeft") {
          propertyValue = "left";
          change = -20;
          elem.currentChange = -20;
          elem.currentDirection = "left";
        } else if (elem.input == "ArrowRight") {
          propertyValue = "left";
          change = 20;
          elem.currentChange = 20;
          elem.currentDirection = "left";
        }
      });
      let computed = getComputedStyle(
        document.getElementById("snake")
      ).getPropertyValue(propertyValue);
      let newPosition = parseInt(computed) + change;

      let computedLeft =
        parseInt(
          getComputedStyle(document.getElementById("snake")).getPropertyValue(
            "left"
          )
        ) + change;
      let computedTop =
        parseInt(
          getComputedStyle(document.getElementById("snake")).getPropertyValue(
            "top"
          )
        ) + change;

      if (
        computedLeft < 0 ||
        computedLeft > 980 ||
        computedTop < 0 ||
        computedTop > 580
      ) {
        if (confirm("you lose")) {
          document.getElementById("snake").style.top = `${10}px`;
          document.getElementById("snake").style.left = `${10}px`;
          location.reload();
        } else {
          location.reload();
        }
      }
      snake.renderApple(
        parseInt(
          getComputedStyle(document.getElementById("snake")).getPropertyValue(
            "left"
          )
        ),
        parseInt(
          getComputedStyle(document.getElementById("snake")).getPropertyValue(
            "top"
          )
        )
      );
      if (elem.input === "ArrowUp" || elem.input === "ArrowDown") {
        document.getElementById("snake").style.top = `${newPosition}px`;
      } else if (elem.input === "ArrowLeft" || elem.input === "ArrowRight") {
        document.getElementById("snake").style.left = `${newPosition}px`;
      }
    }, 100);
  }

  static renderApple(objectX, objectY) {
    if (
      objectX ===
        parseInt(
          getComputedStyle(document.getElementById("appleId")).getPropertyValue(
            "left"
          )
        ) &&
      objectY ===
        parseInt(
          getComputedStyle(document.getElementById("appleId")).getPropertyValue(
            "top"
          )
        )
    ) {
      elem.counter += 1;
      document.getElementById("appleId").style.left = `${
        Math.floor(Math.random() * 50) * 20
      }px`;
      document.getElementById("appleId").style.top = `${
        Math.floor(Math.random() * 30) * 20
      }px`;
    }
  }
}
