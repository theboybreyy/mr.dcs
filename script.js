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