function validateClaim(){
	var input=document.forms["assertionForm"]["claim"].value;
	if (input==null || input=="")
	{

	return false;
	} else {
		return true;
	}
}
function validateAssertions(){
	var input=document.forms["assertionForm"]["assertions"].value;
	if (input==null || input=="")
  	{

		return false;
	} else {
		return true;
	}
}
function validateForm(){
	var claim = validateClaim();
	var assertion = validateAssertions();
	if(claim&&assertion){
		document.forms["assertionForm"]["Submit"].disabled=true;
		return true;
	} else {
		if(claim){
		//Claim present, no assertion
			alert("An assertion must be entered.");
		} else if (assertion) {
		//Assertion present, no claim
			alert("A claim must be entered.");
		} else {
			alert("Both a claim and an assertion must be entered.");
		}
	return false;
	}
}

function resetForm(){
	document.forms["assertionForm"]["claim"].value="Enter your claim";
	document.forms["assertionForm"]["assertions"].value="Enter your assertions";
	document.forms["assertionForm"]["Submit"].disabled=false;
}
