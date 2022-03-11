
//This is a singl
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


//Accordion Button

document.querySelectorAll(".accordion_button").forEach(button => {
    button.addEventListener("click", () => {
        // const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion_button-active');

        // if(button.classList.contains("accordion_button-active")){
        //     accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        // } 
        // else{
        //     accordionContent.style.maxHeight = 0;
        // }
    })
})


//Enquire Tab Dropdown
function openTab() {
    document.querySelector('.enquire').style.display = "block";
}
function closeTab() {
    document.querySelector('.enquire').style.display = "none";
}


//Scroll Indicator

about.onscroll = () => scrollProgress();

function scrollProgress() {
    const currentState = document.querySelector(".drop-downs").scrollTop || document.document.querySelector(".drop-downs").scrollTop;

    const pageHeight = document.document.querySelector('.drop-downs').scrollHeight - document.document.querySelector('.drop-downs').clientHeight;

    const scrollPercentage = (currentState / pageHeight) * 100;
    
    const progressBar = document.querySelector(".progress");
    
    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + "%";
}

/*Dark Mode

const toggleDarkMode = document.querySelector(".toggle-dark-mode");
let darkMode = localStorage.getItem("darkMode");
const fa = document.getElementsByClassName("fa-solid");

//Set Dark Mode
const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled")
};

//Disable Dark Mode
const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", null);
}

//Save Dark Mode History
if (darkMode === "enabled"){
    enableDarkMode();
}

//Adding the Event Listener
toggleDarkMode.addEventListener("click", () => {
    let darkMode = localStorage.getItem("darkMode");

    if (darkMode !== "enabled") {
        enableDarkMode();
    } else{
        disableDarkMode();
    }
})

*/

//Adding display features to some elements
var cta =  document.getElementsByClassName("cta");
var main =  document.getElementsByClassName("card");
 cta.addEventListener("click", () =>{
     main.style.opacity = 1;
 })


 //Responsive Alert

 const alertBox = document.querySelector(".alert");
 const exclamationIcon = document.querySelector(".fa-exclamation-circle");
 const msg = document.querySelector(".msg");
 const closeBtn = document.querySelector(".close-btn");
 const closeIcon = document.querySelector(".fa-close");

 //Show Alert Class

 class ShowAlert {
    constructor(state, borderColor, color){
        this.state = state;
        this.borderColor = borderColor;
        this.color = color;
    }

    trigger(message) {
        alertBox.style.background = this.state;
        alertBox.style.borderColor = this.borderColor;
        msg.textContent = message;
        msg.style.color = this.color;
        exclamationIcon.style.color = this.color;
        closeIcon.style.color = this.color;

        alertBox.classList.add("show");
        alertBox.classList.remove("hide");
        setTimeout(() =>{
            alertBox.classList.remove("show");
            alertBox.classList.add("hide");
        }, 5000);
        closeBtn.addEventListener("click", () => {
            alertBox.classList.remove("show");
            alertBox.classList.add("hide");
        })

    }
 }

 //Creating New Alert Objects
const menu = document.querySelector(".menu");
 const warning = new ShowAlert("#ffdb9b", "#ffa502", "#ce8500");
 const danger = new ShowAlert("#f8d7da", "#d1281f", "#721c24");

 main.addEventListener("click", (e) => {
    if(e.target.classList.contains("register")){
        danger.trigger("Sorry your browser doesn't support dark mode.");

    }
 })


 //Multistep Form
 
 
