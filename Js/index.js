import { elem } from "./elementIdData.js";
import { snake } from "./snake.js";

let buttonState = false;
elem.highScore.innerHTML = `Your Score: 0`

elem.beginButton.addEventListener('click',(event) =>{
    if (buttonState === false){
        elem.beginButton.innerHTML = 'Pause!'
        buttonState = true
        snake.move();
    }else if(buttonState === true){
        elem.beginButton.innerHTML = 'Continue!'
        buttonState = false
        clearInterval(elem.interval)
    }

})
