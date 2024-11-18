import "./style.css";

import IceCreamParlor from "./classes/IceCreamParlor";

const Eiscafe = new IceCreamParlor();

const iceCreamsContainer = document.querySelector(
  "#iceCreamsContainer"
) as HTMLElement;

Eiscafe.renderList(iceCreamsContainer);

// ===========================

const inputAdd = document.querySelector("#inputAdd") as HTMLInputElement;
const inputRemove = document.querySelector("#inputRemove") as HTMLInputElement;
const inputCheckAvailable = document.querySelector(
  "#inputCheckAvailable"
) as HTMLInputElement;
const inputCheckPrice = document.querySelector(
  "#inputCheckPrice"
) as HTMLInputElement;

const btnAdd = document.querySelector("#btnAdd") as HTMLButtonElement;
const btnRemove = document.querySelector("#btnRemove") as HTMLButtonElement;
const btnCheckAvailable = document.querySelector(
  "#btnCheckAvailable"
) as HTMLButtonElement;
const btnCheckPrice = document.querySelector(
  "#btnCheckPrice"
) as HTMLButtonElement;

const displayAnswer = document.querySelector(
  "#displayAnswer"
) as HTMLParagraphElement;

// ===========================

btnAdd.addEventListener("click", () => {
  const icecreamName = inputAdd.value.trim().toLocaleUpperCase();
  Eiscafe.addNewFlavor(icecreamName);
  Eiscafe.renderList(iceCreamsContainer);
  inputAdd.value = "";
});

// ===========================

btnRemove.addEventListener("click", () => {
  const icecreamName = inputRemove.value.trim().toLocaleUpperCase();
  Eiscafe.removeFlavor(icecreamName);
  Eiscafe.renderList(iceCreamsContainer);
  inputRemove.value = "";
});

// ===========================

btnCheckAvailable.addEventListener("click", () => {
  let isAvailable: boolean;
  const icecreamName = inputCheckAvailable.value.trim().toLocaleUpperCase();
  isAvailable = Eiscafe.isFlavorAvailable(icecreamName);
  displayAnswer.textContent = isAvailable
    ? `Yes, ${icecreamName} is available😍`
    : `Sorry, ${icecreamName} is not available😭`;

  inputCheckAvailable.value = "";
});

// ===========================

btnCheckPrice.addEventListener("click", () => {
  const icecreamName = inputCheckPrice.value.trim().toLocaleUpperCase();
  const price: number = Eiscafe.getFlavorPrice(icecreamName);
  displayAnswer.textContent = `${icecreamName} is ${price} € per Scoop 🍨`;
  inputCheckPrice.value = "";
});

// ========= Order function

const inputOrderFlavor = document.querySelector(
  "#inputOrderFlavor"
) as HTMLInputElement;
const inputScoops = document.querySelector("#inputScoops") as HTMLInputElement;
const btnOrder = document.querySelector("#btnOrder") as HTMLButtonElement;

btnOrder.addEventListener("click", () => {
  const icecreamName = inputOrderFlavor.value.trim().toLocaleUpperCase();
  const scoops = Number(inputScoops.value);
  if (icecreamName && scoops) {
    displayAnswer.textContent = Eiscafe.orderIceCream(icecreamName, scoops);
  }
  inputOrderFlavor.value = "";
  inputScoops.value = "";
});
