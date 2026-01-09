const mario = document.getElementById("mario");
const button = document.getElementById("marioBtn");

const sound = new Audio("sounds/mariocalling.mp3");

function activateMario() {
    sound.currentTime = 0;
    sound.play();

    mario.classList.add("bounce");
    setTimeout(() => mario.classList.remove("bounce"), 200);
}

mario.addEventListener("click", activateMario);
button.addEventListener("click", activateMario);
