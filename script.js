//This is jus
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  /*Added Some GSAP Animation*/
  const el = document.querySelector("#module");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.OffsetX + "px";
  el.style.backgroundPositionY = -e.OffsetY + "px";
});


 AOS.init();


 //Preloader Effect with JS

 const Preloader = document.querySelector(".preloader");
 window.addEventListener("load", () => {
   Preloader.style.display = "none";
 })

 //MultiStep Form 

 const formItems = document.getElementsByClassName("form-item");
 const button = document.getElementsByClassName("btn-primary");
 const steps = document.getElementsByClassName("step");

 
 let currentFormItem = 0;
 formItems[currentFormItem].style.display = "block";

 if(currentFormItem == 0){
   button[1].innerHTML = "Next";
   button[1].style.background= "#FF9149";

  if(currentFormItem == 0){
     button[0].addEventListener("click", closeForm)
   }
   steps[0].style.background ="#153d6f";
   steps[0].style.border ="#BD9C6C";
 }


 //Next Button
 button[1].addEventListener("click", () => {
   currentFormItem++;
   const prevFormItem = currentFormItem - 1;

   

   if( currentFormItem > 0 && currentFormItem < 4){
    button[0].innerHTML = "Abort";
    button[1].innerHTML = "Next";

    
    formItems[currentFormItem].style.display = "block";
    formItems[prevFormItem].style.display = "none";
    steps[currentFormItem].style.background = "#153d6f";
    
    if(currentFormItem == 3){
      button[1].innerHTML = "Submit"
    }

    
  }else{
    if (currentFormItem > 3)
    {
    alert("Form Submitted Successfully");
  } }
})

let formContainer = document.querySelector("form-container");
if(currentFormItem > 3 && button[1].addEventListener("click", () =>{
  formContainer.style.display = "none";
}
))

while(currentFormItem > 3){
  currentFormItem.style.display = "none";
}



//Previous button
button[0].addEventListener("click",  () => {
  if(currentFormItem > 0){
    currentFormItem--;
    const nextFormItem = currentFormItem + 1;
    formItems[currentFormItem].style.display = "block";
    formItems[nextFormItem].style.display = "none";
    steps[currentFormItem].style.background = "#cfd2d4";
     
    if(currentFormItem == 0){
      button[0].style.display = "none";
    }
    if (currentFormItem < 3){
      button[1].innerHTML = "Next";
    }
   }
 }
 )
 /*
 if (currentFormItem > 0 && currentFormItem < 4){
  button[0].addEventListener("click", formItems[currentFormItem].style.display = "block"
  )}*/

 steps[0].addEventListener("click", () =>{
   formItems[0].style.display = "block";
 }) 


 //Open Menu 

 function openMenu(){
   document.querySelector("nav").style.display = "block";
 }

