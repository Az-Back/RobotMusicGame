alert("PUT SOUND AND ENJOY");


const text = document.querySelector(".Text2");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const bortop = document.querySelector("#bordertop");
const bortop2 = document.querySelector("#bordertop2");
const bortop3 = document.querySelector("#bordertop3");
const borleft = document.querySelector("#borderleft");
const borleft2 = document.querySelector("#borderleft2");
const borleft3 = document.querySelector("#borderleft3");
const borright= document.querySelector("#borderright");
const borright2 = document.querySelector("#borderright2");
const borright3 = document.querySelector("#borderright3");
const borbot = document.querySelector("#borderbottom");
const borbot2 = document.querySelector("#borderbottom2");
const borbot3 = document.querySelector("#borderbottom3");
const sprite2 = document.querySelector("#sprite2");


text.addEventListener('click', () =>{
    alert("CLICK ON MISSILE");
    let answer = prompt('ENTER YOUR NAME');
    text.classList.remove("Text2");
    text.classList.add("Text");
    text.innerHTML = "ENJOY<br>" + answer +"<br>!";
    container.classList.remove("visit");
    container2.classList.remove("visit");
    container3.classList.remove("visit");
    bortop.classList.remove("visit");
    bortop2.classList.remove("visit");
    bortop3.classList.remove("visit");
    borleft.classList.remove("visit");
    borleft2.classList.remove("visit");
    borleft3.classList.remove("visit");
    borright.classList.remove("visit");
    borright2.classList.remove("visit");
    borright3.classList.remove("visit");
    borbot.classList.remove("visit");
    borbot2.classList.remove("visit");
    borbot3.classList.remove("visit");
        const audio = new Audio();
        audio.src = "Sound/Samurai.mp3";
        audio.play();
        const counterDisplay = document.querySelector("h3");
        counterDisplay.classList.remove("visit");
        let counter = 0;

    const bubbleMaker = () => {

    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
    sprite2.classList.remove("visit");
    });

setTimeout(() =>{
    bubble.remove()
}, 8000);
setTimeout(() =>{
    sprite2.classList.add("visit")
},1000);
};

setInterval(bubbleMaker, 300);
});




const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
   mousemove.style.left = e.pageX + "px";
   mousemove.style.top = e.pageY + "px";
   sprite2.style.left = e.pageX + "px";
   sprite2.style.top = e.pageY + "px";
});