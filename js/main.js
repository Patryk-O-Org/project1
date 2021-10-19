document.getElementById("submit").addEventListener("click", function(evt) {
  evt.preventDefault();
  
  if(inputCheck()){
    section = document.getElementById("main");
	section = document.getElementById("fname");
	section = document.getElementById("lname");
	section = document.getElementById("address");
	section = document.getElementById("country");
	section = document.getElementById("state");
	
    section.innerHTML = "";
	confirmationNode = document.createElement("h3");
    section.appendChild(acknowledgeNode);
    section.appendChild(confirmationNode);
    acknowledgeNode = document.createElement("h2");
    
    
  }
 };
 


 
 