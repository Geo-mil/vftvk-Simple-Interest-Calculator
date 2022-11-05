function compute()
{
	var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
    
    if(validatePrincipal()){
    	result.innerHTML = "If you deposit "+
		principal+
		",<br\>at an interest rate of "+
		rate+
		"%.<br\>You will receive an amount of "+
		interest+
		",<br\>in the year "+
		year
    } 
}

function updateRate(){
	var rateval = document.getElementById("rate").value;
 	document.getElementById("rate_val").innerText=rateval+"%";
}

function validatePrincipal(){
	let refPrincipal = document.getElementById("principal")
	if((refPrincipal.value==null) || (refPrincipal.value<= 0) || (refPrincipal.value == "")){
  		alert("Enter a positive number")
    		refPrincipal.focus()
    		return false;
  	}
  	return true;
}
