const NavUl = document.querySelector("nav ul");

const NavLi = document.querySelectorAll("nav ul li");
const Hamburger = document.getElementById("hamburger");
const Cercles = document.querySelectorAll(".circle1");
const ChangementImg = document.querySelector(".img2 ");
const autreimg = document.getElementById("#suprimer");
const p = document.querySelector("#p-js");
const h5 = document.querySelector("#h5-js");

Hamburger.addEventListener("click", () => {
  console.log("p");
  NavUl.classList.toggle("NavADD");
  NavLi.forEach((li) => {
    li.classList.add("NavLi");
  });
});
// h5.innerHTML = `<h5>${tableauName[nombre]}</h5>`;
let tableauName = ["Anisha Li", "Ali Bravo", "Richard Watts", "Shanai Gough"];
let tableauTexte = [
  ` "ge has supercharged our team s workflow. The 
    naintain visibility on larger milestones at all times
    keeps everyone motivated."`,
  ` "Manage ailows us to provide structure and pro 
    keeps us organized and focused.I can't stop recording 
    them toeveryone i talk to! "`,

  `"Their sofware allows us to track, manage and colloborate
    on our projects from anywhere. it keeps the whole team in-
    sync without being intrusive"`,
  ` "We have been able to cancel so many other subscriptions
    since using Manahe. There is no more cross-channel
    confusion and everyone is much more focused."`,
];

function apres(number) {
  ChangementImg.innerHTML = `   <img src="./assets/images/avatar-${number}.png" alt="avatar-Ali" id = "surprimer"  />`;
}
function add(nombre) {
  Cercles[nombre].classList.add("CircleStyle");
  p.innerHTML = `<p>${tableauTexte[nombre]}</p>`;
  h5.innerHTML = `<h5>${tableauName[count]} </h5>`;
}

function remove(number) {
  setTimeout(() => {
    Cercles[number].classList.remove("CircleStyle");
  }, 2000);
}
let count = -1;
let Clear = "Intervall";

const media1 = window.matchMedia("(max-width:1000px)");
const media2 = window.matchMedia("(min-width:1000px)");
window.onload = function () {
  if (media1.matches) {
    console.log("p");
    let Clear = setInterval(() => {
      console.log(count);
      if (count == 3) {
        count = -1;
      }
      count = count + 1;

      if (count == 0) {
        add(0);
        remove(0);
        apres(1);
      }
      if (count == 1) {
        add(1);
        remove(1);
        apres(2);
      }
      if (count == 2) {
        add(2);
        remove(2);
        apres(3);
      }
      if (count == 3) {
        add(3);
        remove(3);
        apres(0);
      }

      // } else if (media2.matches) {
      //   clearInterval(Clear);
      //   setInterval(() => {
      //     autreimg.style.display = "none";
      //     h5.innerHTML = `<h5>${tableauName[2]} </h5>`;
      //     p.innerHTML = `<p>${tableauTexte[3]}</p>`;
      //     ChangementImg.innerHTML = `   <img src="./assets/images/avatar-${0}.png" alt="avatar-Ali"  />`;
      //   }, 2000);
      // }
    }, 2000);
  }
};
setInterval(() => {
  console.log(count);
}, 2000);
// setInterval(() => {
//   count2++;
//   console.log(count);
//   Cercles[count].classList.remove("CircleStyle");
// }, 2600);d
