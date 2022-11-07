let button = document.querySelector(".switch");
let circle = document.querySelector(".circle");

let mode = "light";

let title = document.querySelector("h1");
let container = document.querySelector("container");

function lightmode () {
    button.className = "switch";
    container.className = "container";
    circle.className = "circle";
    title.textContent = "Light Mode";
}

function darkMode () {
    button.className = "darkButton";
    container.className = "container";
    circle.className = "darkCirlce";
    title.textContent = "Dark Mode";
}

circle.addEventListener("click", () => {
    if (mode == "light") {
        darkMode();
        mode = "dark";
    } else {
        lightmode();
        mode = "light";
    }
})