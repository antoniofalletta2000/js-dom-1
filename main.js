//colleghiamo l'img con classe white_lamp alla variabile whiteLamp
const whiteLamp = document.querySelector(".white_lamp")
console.log(whiteLamp);
//colleghiamo il button con classe btn alla variabile button
const button = document.querySelector(".btn")
console.log(button);
//colleghiamo l'img con classe yellow_lamp alla variabile yellowLamp
const yellowLamp = document.querySelector(".yellow_lamp")
console.log(yellowLamp);
//colleghiamo il div con classe light_off_on alla variabile bgImg
const bgImg = document.querySelector(".light_off_on")
console.log(bgImg);

//apriamo un dom elements operation, in particolare l'addEventListener, il quale richiamerà la funzione al click sul button
button.addEventListener("click", function () {
    console.log("you clicked the button");
    //SE l'inner html del button contiene "Accendi", al click del button succede che...
    if (button.innerHTML.includes("Accendi")) {
        //l'img white lamp scomparirà(abbiamo aggiunto tramite .add() la classe d-none)
        whiteLamp.classList.add("d-none")
        //la classe d-none dell'img yellow lamp verrà rimossa (quindi comparirà)
        yellowLamp.classList.remove("d-none")
        //l'inner html del button verrà sovrascritto dal nuovo inner html
        button.innerHTML = "Spegni"
        //il background color del button verrà rimosso (azzurrino)
        button.classList.remove("bg-primary-subtle")
        //il back ground color del button verrà aggiunto (giallo)
        button.classList.add("bg-warning")
        //l'immagine di sfondo della casa a luci spente scomparirà
        bgImg.style.backgroundImage = "none"
        //l'immagine di sfondo della casa a luci accese comparirà
        bgImg.style.backgroundImage = "url('./luci\ accese.png')"
    } 
    //ALTRIMENTI
    else {
        //la classe d-none dell'img white lamp verrà rimossa (quindi comparirà)
        whiteLamp.classList.remove("d-none")
        //l'img yellow lamp scomparirà (abbiamo aggiunto tramite .add() la classe d-none)
        yellowLamp.classList.add("d-none")
        //l'inner html del button verrà sovrascritto dal nuovo inner html
        button.innerHTML = "Accendi"
        //il background color del button verrà rimosso (giallo)
        button.classList.remove("bg-warning")
        //il background color del button verrà aggiunto (azzurrino)
        button.classList.add("bg-primary-subtle")
        //l'immagine di sfondo della casa a luci accese scomparirà
        bgImg.style.backgroundImage = "none"
        //l'immagine di sfondo della casa a luci spente comparirà
        bgImg.style.backgroundImage = "url('./luci\ spente.png')"

    }
})