`use strict`;

const billInput = document.querySelector(`.bill-input`);
const gridNumber = document.querySelectorAll(`.grid-number`);
const numOfPple = document.querySelector(`.num-of-pple`);
const tipAmount = document.querySelector(`.tip-amount`);
const totalAmount = document.querySelector(`.total-amount`);
const reset = document.querySelector(`.reset`);

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
      people = 1;
      const tip = (bill / people) * (num / 100);
      const total = bill / people + tip;

      totalAmount.textContent = `$${total.toFixed(2)}`;
      tipAmount.textContent = `$${tip.toFixed(2)}`;
    } else {
      const tip = (bill / people) * (num / 100);
      const total = bill / people + tip;

      totalAmount.textContent = `$${total.toFixed(2)}`;
      tipAmount.textContent = `$${tip.toFixed(2)}`;
    }
  }
};
const resetAll = function () {
  totalAmount.textContent = `$0.00`;
  tipAmount.textContent = `$0.00`;
  billInput.value = "";
  numOfPple.value = "";
};
gridBox.addEventListener(`click`, calcTip);
reset.addEventListener(`click`, resetAll);
