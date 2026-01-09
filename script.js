const mario = document.getElementById("mario");

if (mario) {
    // The original looping "calling" sound
    const callingSound = new Audio("sounds/mariocalling.mp3");
    callingSound.loop = true;
    callingSound.volume = 0.3;

    // Play on load (or first click if autoplay blocked)
    callingSound.play().catch(() => {
        console.log("Autoplay blocked. Will play on first click.");
    });

    mario.addEventListener("click", () => {
        // Stop the calling sound
        callingSound.pause();
        callingSound.currentTime = 0;

        // Play the "cursedMario" sound
        const cursedSound = new Audio("sounds/elephantmario.mp3");
        cursedSound.volume = 0.4;
        cursedSound.play();

        // Stop vibration and add picked-up effect
        mario.classList.add("picked-up");
        mario.classList.remove("vibrating"); // optional

        // Small bounce on pick-up
        mario.style.transform = "scale(1.2)";
        setTimeout(() => {
            mario.style.transform = "scale(1.05)";
        }, 150);

        // Prevent multiple clicks from stacking sounds
        mario.disabled = true; // optional for safety
    });
}
