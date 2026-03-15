function playSound(e) {
    console.log("The button was clicked!");
    
    var soundFile = e.currentTarget.dataset.sound;
    var audio = new Audio("Audio/" + soundFile);
    
    audio.play().catch(function(error) {
        console.error("Playback failed. Make sure the file path is correct!", error);
    });
}