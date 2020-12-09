// Make sure that the DOM is loaded
window.onload = () => {
  // Grab all the keys
  const listes = document.getElementsByClassName("key");

  window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the function
    audio.currentTime = 0; // specifies the current playback time in seconds.
    audio.play();

    const touche = document.querySelector(`div[data-key="${e.keyCode}"]`);
    touche.classList.add("playing"); // add the class playing
  });
  window.addEventListener("keyup", function (e) {
    const touche = document.querySelector(`div[data-key="${e.keyCode}"]`);
    touche.classList.remove("playing"); // returns to the initial state
  });
};
