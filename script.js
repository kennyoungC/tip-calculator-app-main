`use strict`;

const billInput = document.querySelector(`.bill-input`);
const gridNumber = document.querySelectorAll(`.grid-number`);
const numOfPple = document.querySelector(`.num-of-pple`);
const tipAmount = document.querySelector(`.tip-amount`);
const totalAmount = document.querySelector(`.total-amount`);
const reset = document.querySelector(`.reset`);
const errorMsg = document.querySelector(`.cant-do`);
const gridBox = document.querySelector(`.grid-box`);
const gridCustom = document.querySelector(`.grid-custom`);
const calcTip = function (e) {
  if (e.target.classList.contains(`grid-number`)) {
    const num = parseInt(e.target.textContent);
    let people = +numOfPple.value;
    const bill = +billInput.value;
    const tip = (bill / people) * (num / 100);
    const total = bill / people + tip;
    if (bill === 0 || bill === "") {
      alert("Please enter values");
      return;
    }
    if (people < 1 || people === "") {
      // people = 1;
      errorMsg.textContent = `Can't be zero`;
      errorMsg.style.color = `red`;
      numOfPple.style.boxShadow = `inset 0 0 0 5px rgba(236, 16, 9, 0.5)`;

      // people = 1;
      // const tip = (bill / people) * (num / 100);
      // const total = bill / people + tip;

      // totalAmount.textContent = `$${total.toFixed(2)}`;
      // tipAmount.textContent = `$${tip.toFixed(2)}`;
    } else {
      totalAmount.textContent = `$${total.toFixed(2)}`;
      tipAmount.textContent = `$${tip.toFixed(2)}`;
    }
  }
};
const customValue = function () {
  const input = document.createElement(`input`);
  gridCustom.replaceWith(input);
  input.style.outline = `none`;
  input.classList.add(`new-input`);
  input.placeholder = `0`;
  input.style.boxShadow = `inset 0 0 0 5px rgb(196, 229, 232, 0.5)`;
  return Number(input.value);
};
gridCustom.addEventListener(`click`, function () {
  customValue();
  const newInput = document.querySelector(`.new-input`);
  newInput.addEventListener(`keydown`, function (e) {
    console.log(e.key);
    const input = +newInput.value;
    let people = +numOfPple.value;
    const bill = +billInput.value;
    if (e.key === `Enter`) {
      if (input === 0 || input === "" || input <= 1) {
        // people = 1;
        newInput.style.boxShadow = `inset 0 0 0 5px rgba(236, 16, 9, 0.5)`;
      } else if (people < 1 || people === "") {
        errorMsg.textContent = `Can't be zero`;
        errorMsg.style.color = `red`;
        numOfPple.style.boxShadow = `inset 0 0 0 5px rgba(236, 16, 9, 0.5)`;
      } else {
        const tip = (bill / people) * (input / 100);
        const total = bill / people + tip;
        totalAmount.textContent = `$${total.toFixed(2)}`;
        tipAmount.textContent = `$${tip.toFixed(2)}`;
      }
    }
  });
});
const clearUserInput = function () {
  numOfPple.style.boxShadow = `none`;
  errorMsg.textContent = ``;
  totalAmount.textContent = `$0.00`;
  tipAmount.textContent = `$0.00`;
  billInput.value = "";
  numOfPple.value = "";
};
const miniReset = function () {
  numOfPple.value = "";
  numOfPple.style.boxShadow = `none`;
  errorMsg.textContent = ``;
};
const resetAll = function () {
  numOfPple.style.boxShadow = `none`;
  errorMsg.textContent = ``;
  totalAmount.textContent = `$0.00`;
  tipAmount.textContent = `$0.00`;
  billInput.value = "";
  numOfPple.value = "";
  const newInput = document.querySelector(`.new-input`);
  if (newInput) {
    newInput.replaceWith(gridCustom);
  }
};
billInput.addEventListener(`click`, resetAll);
gridBox.addEventListener(`click`, calcTip);
reset.addEventListener(`click`, resetAll);
numOfPple.addEventListener(`click`, miniReset);
