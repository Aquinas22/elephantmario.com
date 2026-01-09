const mario = document.getElementById("mario");
let callAnswered = false;
if (mario) {
    function startVibrating() {
        // Add the class to start vibration
        mario.classList.add("vibrate");

        // Stop vibrating after 2 seconds
        setTimeout(() => {
            mario.classList.remove("vibrate");

            // Wait 1 second, then start again
            setTimeout(startVibrating, 2000);
        }, 8000);
    }

    // Start immediately
    startVibrating();

    // Ringing sound
    const callingSound = new Audio("sounds/mariocalling.mp3");
    callingSound.volume = 0.3;

    // Cursed sound
    const cursedSound = new Audio("sounds/elephantmario.mp3");
    cursedSound.volume = 0.4;
    let cursedPlayed = false;

    // Function to play ringing in 3s on, 1s off loop
    function startRinging() {
        if (callAnswered) return;
        callingSound.currentTime = 1;
        callingSound.play().catch(() => console.log("Autoplay blocked"));

        // After 3s, stop, wait 1s, then repeat
        setTimeout(() => {
            callingSound.pause();
            if(!callAnswered) {
                setTimeout(startRinging, 1000);
            }
        }, 1000);
    }

    // Start ringing immediately
    startRinging();

    // Click to pick up Mario
    mario.addEventListener("click", () => {
        // Stop ringing completely
        callAnswered = true;
        callingSound.pause();
        callingSound.currentTime = 0;

        // Stop vibration
        mario.classList.add("picked-up");

        // Bounce effect
        mario.style.transform = "scale(1.2)";
        setTimeout(() => {
            mario.style.transform = "scale(1.05)";
        }, 150);

        // Play cursed sound **only once**
        if (!cursedPlayed) {
            cursedSound.play();
            cursedPlayed = true;
        }
    });
}
