const whiteLamp = document.querySelector(".white_lamp")
console.log(whiteLamp);
const button = document.querySelector(".btn")
console.log(button);
const yellowLamp = document.querySelector(".yellow_lamp")
console.log(yellowLamp);

button.addEventListener("click", function(){
    console.log("you clicked the button");
    whiteLamp.classList.add("d-none")
    yellowLamp.classList.remove("d-none")
})