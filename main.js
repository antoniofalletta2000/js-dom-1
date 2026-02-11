const whiteLamp = document.querySelector(".white_lamp")
console.log(whiteLamp);
const button = document.querySelector(".btn")
console.log(button);
const yellowLamp = document.querySelector(".yellow_lamp")
console.log(yellowLamp);
const bgImg = document.querySelector(".light_off_on")
console.log(bgImg);


button.addEventListener("click", function () {
    console.log("you clicked the button");
    if (button.innerHTML.includes("Accendi")) {
        whiteLamp.classList.add("d-none")
        yellowLamp.classList.remove("d-none")
        button.innerHTML = "Spegni"
        button.classList.remove("bg-primary-subtle")
        button.classList.add("bg-warning")
        bgImg.style.backgroundImage = "none"
        bgImg.style.backgroundImage = "url('./luci\ accese.png')"
    } else {
        whiteLamp.classList.remove("d-none")
        yellowLamp.classList.add("d-none")
        button.innerHTML = "Accendi"
        button.classList.remove("bg-warning")
        button.classList.add("bg-primary-subtle")
        bgImg.style.backgroundImage = "none"
        bgImg.style.backgroundImage = "url('./luci\ spente.png')"

    }
})