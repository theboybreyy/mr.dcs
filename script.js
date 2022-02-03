function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function levels(){
  document.getElementById("sec_nav").style.display ="block";
}

function display(){
  if(document.getElementsByClassName("myForm").style.display ="block"){
      document.getElementsByClassName("main").style.display ="none";
    }
    else{
      document.getElementsByClassName("main").style.display ="block";
      
  }
}