let countDisplay = document.getElementById("count");
let incBtn = document.getElementById("incBtn");
let decBtn = document.getElementById("decBtn");
let resetBtn = document.getElementById("resetBtn");
let themeBtn = document.getElementById("themeBtn");

let count = 0;

incBtn.addEventListener("click", () => {
    count++;
    countDisplay.innerText = count;
});

decBtn.addEventListener("click", () => {
    count--;
    countDisplay.innerText = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.innerText = count;
});

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeBtn.innerText = "Light Theme";
    } else {
        themeBtn.innerText = "Dark Theme";
    }
});
