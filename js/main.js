document.getElementById("submit").addEventListener("click", function(evt) {
  evt.preventDefault();
  
  if(inputCheck()){
    section = document.getElementById("main");
    section.innerHTML = "";
	confirmationNode = document.createElement("h3");
    section.appendChild(acknowledgeNode);
    section.appendChild(confirmationNode);
    acknowledgeNode = document.createElement("h2");
    
    
  }
 };
 


 
 