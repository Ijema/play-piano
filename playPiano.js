
var whitePianoButtons = document.querySelectorAll(".pianoWhite");
var blackButtons = document.querySelectorAll('.piano');

var audioPlayer = new Audio();


for (let i = 0; i < whitePianoButtons.length; i++) {
    whitePianoButtons[i].addEventListener("click", function (e) {
        var whitePianoInnerHtml = e.innerHTML;
        
        // Reset currentTime for the audioPlayer
        audioPlayer.currentTime = 0;

        switch (whitePianoInnerHtml) {
            case "A":
                audioPlayer.src = "./sounds/free-afro-Beats-Afro-beat-2.mp3";
                break;

            case "B":
                audioPlayer.src = "./sounds/free-afro-Beats-afro-Beat-afro-pop-bongo-instrumental.mp3";
                break;

            case "C":
                audioPlayer.src = "./sounds/free-afro-Beats-Afro-beat-Afro-Zouk.mp3";
                break;

            case "D":
                audioPlayer.src = "./sounds/free-afro-Beats-Afro-Beat-Bongo-very-sweet.mp3";
                break;

            case "E":
                audioPlayer.src = "./sounds/free-afro-Beats-afro-beat-fire.mp3";
                break;

            case "F":
                audioPlayer.src = "./sounds/free-afro-Beats-AFRO-BEAT-GOOD-ONE.mp3";
                break;

            case "G":
                audioPlayer.src = "./sounds/free-afro-Beats-AFRO-BEAT-INSTRUMENTAL-DANCE-DANCE.mp3";
                break;

            case "H":
                audioPlayer.src = "./sounds/free-afro-Beats-AFRO-BEAT-LOVE.mp3";
                break;

            case "I":
                audioPlayer.src = "./sounds/free-afro-Beats-AMAPIANO-INSTRUMENTAL.mp3";
                break;

            case "J":
                audioPlayer.src = "./sounds/free-afro-Beats-love-Afro-beat-Instrumental.mp3";
                break;

            case "K":
                audioPlayer.src = "./sounds/free-afro-Beats-Reggae-Reddim-best-ever.mp3";
                break;

            default:
                break;
        }

        // Play the updated audio
        audioPlayer.play();
    });

    // The black buttons to stop the sounds
    for (let j = 0; j < blackButtons.length; j++) {
        blackButtons[j].addEventListener("click", function () {
            audioPlayer.pause();
        });
    }
}


