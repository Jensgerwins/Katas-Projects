const computerWahlDisplay = document.querySelector("#computer-wahl");
const meineWahlDisplay = document.querySelector("#meine-wahl");
const ergebnissDisplay = document.querySelector("#ergebniss");
const possibleWahl = document.querySelectorAll("button");
let userWahl
let computerWahl
let result
possibleWahl.forEach(possible => possible.addEventListener("click", (e) => {
    userWahl = e.target.id;
    meineWahlDisplay.innerHTML = userWahl;
    genertaeComputerStimme();
    getResult();
}))

function genertaeComputerStimme() {
    const randomNumber = Math.floor(Math.random() * possibleWahl.length + 1);
    if (randomNumber === 1) {
        computerWahl = "rock";
    }
    if (randomNumber === 2) {
        computerWahl = "scisors";
    }
    if (randomNumber === 3) {
        computerWahl = "paper";
    }
    computerWahlDisplay.innerHTML = computerWahl;
}
function getResult() {
    if (computerWahl === userWahl) {
        result = "gleichstand ";
    }
    if (computerWahl === "rock" && userWahl === "paper") {
        result = "You Win ";
    }
    if (computerWahl === "rock" && userWahl === "scisors") {
        result = "You Lose ";
    }
    if (computerWahl === "paper" && userWahl === "scisors") {
        result = "You Win ";
    }
    if (computerWahl === "paper" && userWahl === "rock") {
        result = "You Lose ";
    }
    if (computerWahl === "scisors" && userWahl === "rock") {
        result = "You Win ";
    }
    if (computerWahl === "scisors" && userWahl === "paper") {
        result = "You Lose ";
    }
    ergebnissDisplay.innerHTML = result;
}