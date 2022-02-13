function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  /*Added Some GSAP Animation*/
  const el = document.querySelector("#module");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -0.4 + "rem";
  el.style.backgroundPositionZ = 0. + "rem";
});


 AOS.init();