const playPauseButton1 = document.getElementById("play-button1");
const playPauseButton2 = document.getElementById("play-button2");
const playPauseButton3 = document.getElementById("play-button3");

const audioPlayer1 = document.getElementById("audioPlayer1");
const audioPlayer2= document.getElementById("audioPlayer2");
const audioPlayer3= document.getElementById("audioPlayer3");

/*Primeiro áudio*/
playPauseButton1.addEventListener("click", function() {
    if (audioPlayer1.paused) {
        audioPlayer1.play();
        playPauseButton1.textContent = "Pausar"; // Muda o texto do botão para "Pausar"
    } else {
        audioPlayer1.pause();
        playPauseButton1.textContent = "Reproduzir"; // Muda o texto do botão para "Reproduzir"
    }
});

/*Segundo áudio*/
playPauseButton2.addEventListener("click", function() {
    if (audioPlayer2.paused) {
        audioPlayer2.play();
        playPauseButton2.textContent = "Pausar"; // Muda o texto do botão para "Pausar"
    } else {
        audioPlayer2.pause();
        playPauseButton2.textContent = "Reproduzir"; // Muda o texto do botão para "Reproduzir"
    }
});

/*Terceiro áudio*/
playPauseButton3.addEventListener("click", function() {
    if (audioPlayer3.paused) {
        audioPlayer3.play();
        playPauseButton3.textContent = "Pausar"; // Muda o texto do botão para "Pausar"
    } else {
        audioPlayer3.pause();
        playPauseButton3.textContent = "Reproduzir"; // Muda o texto do botão para "Reproduzir"
    }
});
