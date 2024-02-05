
let count = 1;

function toggleCount() {
  count = (count === 1) ? -1 : 1;
}
const plus = document.getElementById("plus--id");
const minus = document.getElementById("minus--id");
const button = document.getElementById("accordion-button-1");
const para1 = document.getElementById("ans-1");

button.addEventListener("click", function() {
  toggleCount();
  if (count === -1) {
    plus.classList.add("hide");
    minus.classList.add("show");
    para1.classList.add("show");
  }
  else {
    minus.classList.remove("show");
    plus.classList.remove("hide");
    para1.classList.remove("show");
  }
})


let countB = 1;

function toggleCount() {
  countB = (countB === 1) ? -1 : 1;
}
const plus2 = document.getElementById("plus--id2");
const minus2 = document.getElementById("minus--id2");
const button2 = document.getElementById("accordion-button-2");
const para2 = document.getElementById("ans-2");

button2.addEventListener("click", function() {
  toggleCount();
  if (countB === -1) {
    plus2.classList.add("hide");
    minus2.classList.add("show");
    para2.classList.add("show");
  }
  else {
    minus2.classList.remove("show");
    plus2.classList.remove("hide");
    para2.classList.remove("show");
  }
})


let countC = 1;

function toggleCount() {
  countC = (countC === 1) ? -1 : 1;
}
const plus3 = document.getElementById("plus--id3");
const minus3 = document.getElementById("minus--id3");
const button3 = document.getElementById("accordion-button-3");
const para3 = document.getElementById("ans-3");

button3.addEventListener("click", function() {
  toggleCount();
  if (countC === -1) {
    plus3.classList.add("hide");
    minus3.classList.add("show");
    para3.classList.add("show");
  }
  else {
    minus3.classList.remove("show");
    plus3.classList.remove("hide");
    para3.classList.remove("show");
  }
})


let countD = 1;

function toggleCount() {
  countD = (countD === 1) ? -1 : 1;
}
const plus4 = document.getElementById("plus--id4");
const minus4 = document.getElementById("minus--id4");
const button4 = document.getElementById("accordion-button-4");
const para4 = document.getElementById("ans-4");

button4.addEventListener("click", function() {
  toggleCount();
  if (countD === -1) {
    plus4.classList.add("hide");
    minus4.classList.add("show");
    para4.classList.add("show");
  }
  else {
    minus4.classList.remove("show");
    plus4.classList.remove("hide");
    para4.classList.remove("show");
  }
})