/This s single lie comment that i will be deleting anyt
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
