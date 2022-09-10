var icondesktopnew = document.getElementById("icondesktopnew");
icondesktopnew.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icondesktopnew.src = "assets/images/sun.png";
  } else {
    icondesktopnew.src = "assets/images/moon.png";
  }
};
var iconmobilenew = document.getElementById("iconmobilenew");
iconmobilenew.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    iconmobilenew.src = "assets/images/sun.png";
  } else {
    iconmobilenew.src = "assets/images/moon.png";
  }
};

document.getElementsByClassName("all")[0].addEventListener("click", (e) => {
    all.classList.remove("highlightedSelected")
    mobile.classList.remove("highlightedSelected")
    desktop.classList.remove("highlightedSelected")
    all.classList.add("highlightedSelected")
  });
  document.getElementsByClassName("desktop")[0].addEventListener("click", (e) => {
    all.classList.remove("highlightedSelected")
    mobile.classList.remove("highlightedSelected")
    desktop.classList.remove("highlightedSelected")
    desktop.classList.add("highlightedSelected")
  });
  document.getElementsByClassName("mobile")[0].addEventListener("click", (e) => {
    all.classList.remove("highlightedSelected")
    mobile.classList.remove("highlightedSelected")
    desktop.classList.remove("highlightedSelected")
    mobile.classList.add("highlightedSelected")
  });