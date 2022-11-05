function compute()
{
	//get values from inputs
	let principal = document.getElementById("principal").value;
	let rate = document.getElementById("rate").value;
	let years = document.getElementById("years").value;
	//do maths
	let interest = principal*years*rate/100;
	let year = new Date().getFullYear()+parseInt(years);
	//get result ref
	let result = document.getElementById("result");

	//if we can validate the principal amount then show result
	if(validatePrincipal()){
		//<mark> will highlight appropiate parts of text
		result.innerHTML = "If you deposit <mark>"+
		principal+
		"</mark>,<br\>at an interest rate of <mark>"+
		rate+
		"%</mark>.<br\>You will receive an amount of <mark>"+
		interest+
		"</mark>,<br\>in the year <mark>"+
		year+
		"</mark>"
	} 
}

//rate value text must be updated when slider changes position
function updateRate(){
	let rateval = document.getElementById("rate").value;
 	document.getElementById("rate_val").innerText=rateval+"%";
}

function validatePrincipal(){
	let refPrincipal = document.getElementById("principal")
	//if the value of principal is not set or is set to 0 or less or is null, pop up an alert 
	//and put focus back in the input. return false so text is not shown
	if((refPrincipal.value==null) || (refPrincipal.value<= 0) || (refPrincipal.value == "")){
  		alert("Enter a positive number")
    		refPrincipal.focus()
    		return false;
  	}
  	return true;
}
