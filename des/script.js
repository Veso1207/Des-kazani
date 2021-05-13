const dropdown = document.querySelector(".dropdown");
const closeBox = document.querySelector(".close-box");
const hide = document.querySelector(".hide");
const showBox = document.querySelector(".products-box");
const circles = document.querySelector(".circles");
const performance = document.querySelector(".performance");
const premium = document.querySelector(".premium");
const hobby = document.querySelector(".hobby");
const footer = document.querySelector("footer");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");
const hamburger = document.querySelector(".nav-btn");
const btnClose = document.querySelector(".close-nav");
const mobilNav = document.querySelector(".mobil-nav");

hamburger.addEventListener("click", () => {
  mobilNav.classList.add("show");
});
mobilNav.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("close-nav")) {
    mobilNav.classList.remove("show");
  }
});

dropdown.addEventListener("click", (e) => {
  showBox.style.zIndex = "1000";
  hide.setAttribute("class", "show");
  hide.classList.add("animate");
});

closeBox.addEventListener("click", () => {
  showBox.style.zIndex = "0";
  hide.setAttribute("class", "hide");
  hide.classList.remove("animate");
  console.log("click");
});

//changing slides
circles.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "A") {
    if (e.target.classList.contains("circle1")) {
      hobby.classList.add("current");
      hobby.classList.add("fadeIn");
      circle1.classList.add("active");
    } else {
      hobby.classList.remove("current");
      hobby.classList.remove("fadeIn");
      circle1.classList.remove("active");
    }
    if (e.target.classList.contains("circle2")) {
      performance.classList.add("current");
      performance.classList.add("fadeIn");
      circle2.classList.add("active");
    } else {
      performance.classList.remove("current");
      performance.classList.remove("fadeIn");
      circle2.classList.remove("active");
    }
    if (e.target.classList.contains("circle3")) {
      premium.classList.add("current");
      premium.classList.add("fadeIn");
      circle3.classList.add("active");
    } else {
      premium.classList.remove("current");
      premium.classList.remove("fadeIn");
      circle3.classList.remove("active");
    }
    if (e.target.classList.contains("circle4")) {
      footer.classList.add("current");
      footer.classList.add("fadeIn");
      circle4.classList.add("active");
    } else {
      footer.classList.remove("current");
      footer.classList.remove("fadeIn");
      circle4.classList.remove("active");
    }
  }
});
