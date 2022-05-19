import { elem } from "./elementIdData.js";

export class snake {
  static move() {
    let propertyValue = elem.currentDirection;
    let change = elem.currentChange;
    elem.interval = setInterval(() => {
      elem.snakeHeadCurrentLeft = getComputedStyle(document.getElementById('snake')).getPropertyValue('left')
      elem.snakeHeadCurrentTop = getComputedStyle(document.getElementById('snake')).getPropertyValue('top')
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
        alert("You Lost");
        location.reload();
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
      this.updateSnakeUnits();
      if (elem.input === "ArrowUp" || elem.input === "ArrowDown") {
        document.getElementById("snake").style.top = `${newPosition}px`;
      } else if (elem.input === "ArrowLeft" || elem.input === "ArrowRight") {
        document.getElementById("snake").style.left = `${newPosition}px`;
      }

      this.updateSnakeUnits();

      this.collisionDetector();
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
      this.renderSnakeUnit()
    }

  }

  static renderSnakeUnit() {
    let snakeElement = document.createElement('div')
    snakeElement.classList.add('snake-unit')
    if (elem.snakeUnits.length > 0){
    snakeElement.style.top = elem.snakeUnits[elem.snakeUnits.length-1].style.top
    snakeElement.style.left = elem.snakeUnits[elem.snakeUnits.length-1].style.left
    }
    else if(elem.snakeUnits.length === 0){
      snakeElement.style.top = getComputedStyle(document.getElementById('snake')).getPropertyValue('top')
      snakeElement.style.left = getComputedStyle(document.getElementById('snake')).getPropertyValue('left')
    }
    elem.snakeUnits.push(snakeElement);
    elem.map.appendChild(snakeElement)
    
  }

  static updateSnakeUnits() {
    if(elem.snakeUnits.length > 0){
    elem.snakeUnits[0].style.top = elem.snakeHeadCurrentTop
    elem.snakeUnits[0].style.left = elem.snakeHeadCurrentLeft
 if(elem.snakeUnits.length >= 2){
    for (let i = elem.snakeUnits.length-1 ; i > 0; i--) {
      elem.snakeUnits[i].style.top = getComputedStyle(
        elem.snakeUnits[i - 1]
      ).getPropertyValue("top");
      elem.snakeUnits[i].style.left = getComputedStyle(
        elem.snakeUnits[i - 1]
      ).getPropertyValue("left");
        }
  }
  }
}

static collisionDetector(){
  
elem.snakeUnits.forEach(element => {
  if(element.style.top === document.getElementById('snake').style.top && element.style.left === document.getElementById('snake').style.left){
    alert('You Lose')
    location.reload();
  }
});


}
}
