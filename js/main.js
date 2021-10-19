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

  if(!firstName || !lastName || !address || !country || !state){
    alert("Fill out all information please.");
    return false
  }

console.log(`Primary Name: ${firstName} \n
  Last Name: ${lastName}\n
  Address: ${address} \n
  Country: ${country} \n
  State: ${state} \n
  `);
  return true;
}

 function checkBoxes(){
  if(!document.getElementById("age-verification").checked){
    alert("Must be over 18 to sign up.");
    return false;
  }
  
  else{
    return true;
  }
 }