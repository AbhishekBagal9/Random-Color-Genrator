const btn = document.querySelector("button"); // Select your button
const box = document.querySelector(".box"); // Your box element
const rgb = document.querySelector("h1"); // Your RGB text element

btn.addEventListener("click",function(){
    let randomcolor = getRandomColor();
    rgb.innerText = randomcolor;
    box.style.backgroundColor  = randomcolor;
})


function getRandomColor(){
let red = Math.floor(Math.random()*255);
let green = Math.floor(Math.random()*255);
let blue= Math.floor(Math.random()*255);

let color =`RGB(${red},${green},${blue})`;
return color;
}