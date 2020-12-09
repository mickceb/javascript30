const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked = null;

function handleCheck(e) {
  let inBetween = false;

  // Check if shift key down & checked
  if (e.shiftKey && this.checked) {

    // loop over every input
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);

      // Tag the first one and the last one
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them inBetween !");
      }
      // Checked all input between the first one and the last one
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
