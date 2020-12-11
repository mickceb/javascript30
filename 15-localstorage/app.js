// Get the form
const addItems = document.querySelector(".add-items");
// Get ul / li
const itemsList = document.querySelector(".plates");
// Create an array to store new items or fetch localStorage
const items = JSON.parse(localStorage.getItem('items')) || [];

// Handle with items
function handleItems(e) {
  e.preventDefault();
  // Get the value was typed
  const text = this.querySelector("[name=item]").value;
  // Create new object stores value typed
  const item = {
    text,
    done: false,
  };
  items.push(item);
  // Populate List
  addToList(items, itemsList);
  // Add to localStorage
  localStorage.setItem('items', JSON.stringify(items))
  // Reset input
  this.reset();

  console.table(items);
}

// Display items
function addToList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `<li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
      <label for="item${i}">${plate.text}</label>
      </li>`;
    })
    .join("");
}

// 
function toggleDone(e) {
    if (!e.target.matches('input')) return
    const index = e.target.dataset.index
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items))
    addToList(items, itemsList)
}


// Get events
addItems.addEventListener("submit", handleItems);
itemsList.addEventListener('click', toggleDone)

// Populate the list when page is reload
addToList(items, itemsList)