//Preloader effect

const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
    preloader.style.display = "none";
})

//Navbar Effect
const hambuger = document.querySelector(".hamburger");
hambuger.addEventListener("click", function () {
    this.classList.toggle('active');
})

//Adding The About Dropdown
function openAbout() {
    document.querySelector('.drop-downs').style.display = "block";
}
function closeAbout() {
    document.querySelector('.drop-downs').style.display = "none";
}

//Join Groups Dropdown
function openGroup() {
    document.querySelector('.pop-down').style.display = "block";
}
function closeGroup() {
    document.querySelector('.pop-down').style.display = "none";
}

var about = document.getElementsByClassName("drop-downs");
var group = document.getElementsByClassName("pop-down");

PictureInPictureWindow.style.overflow = "none";