const mario = document.getElementById("mario");

const sound = new Audio("sounds/mariocalling.mp3");

if (mario) {

    mario.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();

        mario.classList.add("bounce");
        setTimeout(() => mario.classList.remove("bounce"), 200);
    });
}
else {
    sound.play();
}
