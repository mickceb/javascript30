// Create [] to store user input & secretcode
const pressed = [];
const secretcode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowRight", "ArrowLeft"];

// Check events 
window.addEventListener("keyup", (e) => {
  console.log(e.key);

  // Push key pressed in pressed[]
  pressed.push(e.key);

  // Splice the [] based on secretcode.length
  pressed.splice(-secretcode.length - 1, pressed.length - secretcode.length)
  console.log(pressed);

  // Compare user input with secretcode
  if (pressed.join('').includes(secretcode.join(''))) cornify_add()
});
