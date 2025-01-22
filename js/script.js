//toggle class active

const navbarOpsi = document.querySelector(".navbar-opsi");

document.querySelector("#hm").onclick = () => {
  navbarOpsi.classList.toggle("active");
};

const menu = document.querySelector("#hm");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarOpsi.contains(e.target)) {
    navbarOpsi.classList.remove("active");
  }
});
