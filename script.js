const firstpause = document.getElementById("firstplay");
const firstitem = document.getElementById("first-item");
const ctn = document.querySelector(".one-first");
const two = document.getElementById("2h");
const yesterday = document.getElementById("yesterday");
console.log(yesterday);

let i = true;

firstpause.addEventListener("click", () => {
  firstpause.classList = "fa-solid fa-pause";
  ctn.style.backgroundColor = "lightgray";
  yesterday.innerHTML = "Today";
  two.innerHTML = "Now on AIR";
});
firstitem.addEventListener("click", () => {
  firstpause.classList = "fa-solid fa-circle-play";
  ctn.style.backgroundColor = "white";
});
