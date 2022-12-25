const box = document.querySelector('.box');
const box1 = document.querySelector('.box1');
const ratings = document.querySelectorAll('.circle')
const btn = document.querySelector('.btn_submit');
let selectedRating;
const spanRating = document.querySelector(".rating");

ratings.forEach((item, i) => {
    item.addEventListener("click", (event) => {
      //handle click
      ratings.forEach((item) => {
        item.classList.remove("orange-background");
      });
  
      item.classList.add("orange-background");
      console.log(item.innerText);
      selectedRating = item.innerText;
    });
  });

btn.addEventListener('click', () => {
    if(!selectedRating){
alert("select")
    }
    else {
        box.classList.add("hide");

    box1.classList.add("show");

    spanRating.innerText = selectedRating
    }
})