document.getElementById("submit").addEventListener("click", function(evt) {
  evt.preventDefault();
  
  if(inputCheck()){
    section = document.getElementById("main");
    section.innerHTML = "";
	confirmationNode = document.createElement("h3");
    confirmationNode.innerHTML = "Keep a look out for emails about future promotions and events!"
    section.appendChild(acknowledgeNode);
    section.appendChild(confirmationNode);
    acknowledgeNode = document.createElement("h2");
    acknowledgeNode.innerHTML = "Thank you for applying to the Nintendo Newsletter Service!";
    
  }
 };
 


 
 }