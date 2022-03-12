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

//Adding the Darkmode Feature
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  toggleText.textContent = "Light";
  localStorage.setItem("darkMode", "enabled");
};

// Disable Dark Mode
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  toggleText.textContent = "Dark";
  localStorage.setItem("darkMode", null);
};
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  toggleText.textContent = "Orange";
  localStorage.setItem("darkMode", "enabled");
};

// Enabling Dark Mode with different colors
const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  toggleColor.textContent = "dark";
  localStorage.setItem("darkMode", null);
};

//A backup feature to create assistive mode for the user
// Save DarkMode History
if (darkMode === "enabled") {
  enableDarkMode();
}

// Add Event Listener
toggleDarkMode.addEventListener("click", () => {
  let darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});// Save DarkMode History
if (darkMode === "enabled") {
  enableDarkMode();
}
