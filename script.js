`use strict`;

const billInput = document.querySelector(`.bill-input`);
const gridNumber = document.querySelectorAll(`.grid-number`);
const numOfPple = document.querySelector(`.num-of-pple`);
const tipAmount = document.querySelector(`.tip-amount`);
const totalAmount = document.querySelector(`.total-amount`);
const reset = document.querySelector(`.reset`);
const errorMsg = document.querySelector(`.cant-do`);
const gridBox = document.querySelector(`.grid-box`);
const calcTip = function (e) {
  if (e.target.classList.contains(`grid-number`)) {
    const num = parseInt(e.target.textContent);
    const bill = +billInput.value;
    let people = +numOfPple.value;
    if (bill === 0 || bill === "") {
      people = 1;
      alert("Please enter values");
      return;
    }
    if (people <= 1 || people === "") {
      errorMsg.textContent = `Can't be zero`;
      errorMsg.style.color = `red`;
      numOfPple.style.boxShadow = `inset 0 0 0 5px rgba(236, 16, 9, 0.5)`;

      // people = 1;
      // const tip = (bill / people) * (num / 100);
      // const total = bill / people + tip;

      // totalAmount.textContent = `$${total.toFixed(2)}`;
      // tipAmount.textContent = `$${tip.toFixed(2)}`;
    } else {
      const tip = (bill / people) * (num / 100);
      const total = bill / people + tip;

      totalAmount.textContent = `$${total.toFixed(2)}`;
      tipAmount.textContent = `$${tip.toFixed(2)}`;
    }
  }
};
const blank = function () {
  billInput.value = "";
  numOfPple.value = "";
};

const resetAll = function () {
  numOfPple.style.boxShadow = `none`;
  errorMsg.textContent = ``;
  totalAmount.textContent = `$0.00`;
  tipAmount.textContent = `$0.00`;
  blank();
};
billInput.addEventListener(`click`, resetAll);
gridBox.addEventListener(`click`, calcTip);
reset.addEventListener(`click`, resetAll);
