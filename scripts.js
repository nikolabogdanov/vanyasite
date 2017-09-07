function setControlls() {
	$("#sendRequest").click(expandRequest);
	$('.contacts_form').hide();
}

function expandRequest(e) {

	var mobileHeight = 180;

	if(detectmob()) {
		mobileHeight  = 110;
	} else {
		mobileHeight = 180;
	}

	if($(this).height() !== mobileHeight){
		$(this).animate({height:mobileHeight},500);
		$('.contacts_form').show();		
	} else {
		$(this).animate({height:70},500);
		$('.contacts_form').hide();	
	}

	e.preventDefault();
}

function slowScrolling() {
	$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if

	    $("#bs-example-navbar-collapse-1").removeClass("in");
	  });
	});
}

function detectmob() {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else{
      return false;
   }
}