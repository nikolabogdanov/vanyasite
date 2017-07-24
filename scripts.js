function setControlls() {
	$("#sendRequest").click(expandRequest);
}

function expandRequest(e) {
	if($(this).height() !== 500){
		$(this).animate({height:500},500);		
	} else {
		$(this).animate({height:70},500);	
	}

	e.preventDefault();
}