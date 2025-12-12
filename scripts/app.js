import {
  saveToStorage,
  getLocalStorage,
  removeFromStorage,
  clearStorage,
} from "./localStorage.js";

const addToStorageBtn = document.getElementById("addToLocalStorageBtn");
const getFromStorageBtn = document.getElementById("getFromLocalStorageBtn");
const clearListBtn = document.getElementById("clearListBtn");
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

clearListBtn.addEventListener("click", () => {
    localStorage.setItem("Items", JSON.stringify([]));
    storedValue.innerHTML = "Nothing yet!";
});
