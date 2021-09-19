var burger = document.getElementById("icon");

// menu mobile display
burger.onclick = function () {
  this.classList.toggle("change");
  var menu = document.getElementById("menu_mobile");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};
