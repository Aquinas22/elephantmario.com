const mario = document.getElementById("mario");

if (mario) {
    const sound = new Audio("sounds/mariocalling.mp3");

    mario.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();

        mario.classList.add("bounce");
        setTimeout(() => mario.classList.remove("bounce"), 200);
    });
}
