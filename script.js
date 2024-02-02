// const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute('aria-expanded');

//   for (i = 0; i < items.length; i++) {
//     items[i].setAttribute('aria--expanded', 'false');
//   }

//   if (itemToggle == 'false') {
//     this.setAttribute('aria-expanded', 'true')
//   }
// }

// items.forEach(item => item.addEventListener('click', toggleAccordion));

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





  