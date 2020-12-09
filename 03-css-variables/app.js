// Make sure the DOM is loaded
window.onload = () => {
  // get the inputs
  const inputs = document.querySelectorAll(".controls input");

  // update property
  function update() {
    const suffix = this.dataset.sizing || ""; // get suffix or noting
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + suffix // add value of suffix or nothing according to the case
    );
  }

  inputs.forEach((input) => input.addEventListener("change", update));
};
