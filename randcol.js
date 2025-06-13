
let button = document.querySelector("button");
let colorbox = document.querySelector(".container .colorbox");
button.addEventListener("click", () => {
    let h3 = document.querySelector("h3");
    let colour = generateColor();
    h3.innerText = colour;

    colorbox.style.backgroundColor = colour;



});


function generateColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}