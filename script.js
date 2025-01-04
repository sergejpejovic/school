const question = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menu-items");
const list = document.querySelector(".list");
const logo = document.querySelector(".logo");
const headerBtn = document.querySelector(".header-btn");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    this.classList.toggle("active");

    answers[i].classList.toggle("active");

    if (answers[i].classList.contains("active")) {
      answers[i].style.height = "auto";
      answers[i].style.visibility = "visible";
      answers[i].style.padding = "1rem 0";
    } else {
      answers[i].style.height = "0";
      answers[i].style.visibility = "hidden";
      answers[i].style.padding = "0";
    }
  });
}
menu.addEventListener("click", function () {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    let html = `
      <ul>
          <li class = 'item'>Program</li>
          <li  class = 'item'>About</li>
          <li  class = 'item'>Contact</li>
        </ul>
    `;

    menuItems.insertAdjacentHTML("beforeend", html);
    list.style.display = "none";
    logo.style.visibility = "hidden";
    headerBtn.classList.add("hidden");
  } else {
    menuItems.innerHTML = "";
    list.style.display = "flex";
    logo.style.visibility = "visible";
    headerBtn.classList.remove("hidden");
  }
});
