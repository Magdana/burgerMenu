const menuButton = document.querySelector(".hamburger");
const menuList = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  menuList.classList.toggle("active");
});

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    menuButton.classList.remove("active");
    menuList.classList.remove("active");
  });
});
