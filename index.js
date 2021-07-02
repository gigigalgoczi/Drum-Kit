// Detecting keyboard press
document.addEventListener("keydown", function(e) {
  playSound(e.key);
  buttonAnimation(e.key);
});

// Detecting button click
  // Create a list with all buttons
    var drumButtonsList = document.querySelectorAll(".drum");
  // Add eventListener to each buttons
    for (var i = 0; i < drumButtonsList.length; i++) {
      drumButtonsList[i].addEventListener("click", function() {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
      });
      }

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds\\kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds\\snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds\\tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds\\tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds\\tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds\\tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(button);
  }
}

function buttonAnimation(key) {
  var selectedButton = document.querySelector("." + key);
  selectedButton.classList.add("pressed");
  setTimeout(function () {
    selectedButton.classList.remove("pressed");
  }, 100);
}
