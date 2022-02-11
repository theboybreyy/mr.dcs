function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  /*Added Some GSAP Animation*/
  const el = document.querySelector("#module");

el.addEventListener("onclick", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});