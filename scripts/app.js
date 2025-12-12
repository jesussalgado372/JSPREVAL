import {
  saveToStorage,
  getLocalStorage,
  removeFromStorage,
} from "./localStorage.js";

const addToStorageBtn = document.getElementById("addToLocalStorageBtn");
const getFromStorageBtn = document.getElementById("getFromLocalStorageBtn");
const randomDisplayBtn = document.getElementById("randomDisplayBtn");
const userInput = document.getElementById("userInput");
const storedValue = document.getElementById("storedValue");

addToStorageBtn.addEventListener("click", () => {
  let itemInput = userInput.value;
  saveToStorage(itemInput);
  userInput.value = "";
});

getFromStorageBtn.addEventListener("click", () => {
  displayItem();
});

const displayItem = () => {
  let groceryItems = getLocalStorage();
  storedValue.innerHTML = "";

  groceryItems.forEach((item) => {
    let p = document.createElement("p");
    p.classList = "m-2";
    p.textContent = item;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn btn-danger mx-2";
    deleteBtn.textContent = "Delete Item";

    deleteBtn.addEventListener("click", () => {
      removeFromStorage(item);
      p.remove();
    });
    p.appendChild(deleteBtn);
    storedValue.appendChild(p);
  });
};

const randomItem = () => {
  let groceryItems = getLocalStorage();

  if (groceryItems.length === 0) {
    alert("No Items in storage!");
    return;
  }

  let randomIndex = Math.floor(Math.random() * groceryItems.length);
  let chosenItem = groceryItems[randomIndex];

  storedValue.innerHTML = `<p class="m-2">Random Item: <strong>${chosenItem}</strong></p>`;
};

randomDisplayBtn.addEventListener("click", () => {
  randomItem();
});
