const sub = document.querySelector(".absolute");
const Li1 = document.getElementById("anim-1");

Li1.addEventListener("click", () => {
  console.log(sub);
  sub.classList.toggle("block");
});
console.log(Li1);
