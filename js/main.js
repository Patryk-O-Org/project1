document.getElementById("submit").addEventListener("click", function(evt) {
  evt.preventDefault();
  
  if(inputCheck() && checkBoxes()){
    section = document.getElementById("main");
    section.innerHTML = "";
    thankYouNode = document.createElement("h2");
    thankYouNode.innerHTML = "Thank you for applying to the Nintendo Newsletter Service!";
    confirmationNode = document.createElement("h3");
    confirmationNode.innerHTML = "Keep a look out for emails about future promotions and events!"
    section.appendChild(thankYouNode);
    section.appendChild(confirmationNode);
  }
 });
 
 function inputCheck(){
  firstName = document.getElementById("fname").value;
  lastName = document.getElementById("lname").value;
  address = document.getElementById("address").value;
  country = document.getElementById("country").value;
  state = document.getElementById("state").value;

  if(!primaryName || !familyName || !city || !country || !phone){
    alert("Fill out all information please.");
    return false
  }
