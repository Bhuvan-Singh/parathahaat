function feedBackFormFunction(){
	// Disables the send button until the form submission is failed
	_("sendFeedbackButton").disabled = true;

	// Sets the status of the form submission
	_("sending-icon").style.display = "block";

	// For validating form data
	//if the input is blank throw error and highlight the empty field

	if((_("user_Name").value).length == 0){
		_("user_Name").classList.add("empty-field");
	}else if((_("user_Name").value).length > 0){
		_("user_Name").classList.remove("empty-field");
	} 

	if((_("user_Email").value).length == 0){
		_("user_Email").classList.add("empty-field");
	}else if((_("user_Email").value).length > 0){
		_("user_Email").classList.remove("empty-field");
	}


	if((_("user_Number").value).length <10 || isNAN(_("user_Number").value)){
		_("user_Number").classList.add("empty-field");
	}else if((_("user_Number").value).length > 0){
		_("user_Number").classList.remove("empty-field");
	}


	if((_("user_Message").value).length == 0){
		_("user_Message").classList.add("empty-field");
	}else if((_("user_Message").value).length >0){
		_("user_Message").classList.remove("empty-field");
	}

	// creating variable form and getting the form element by its ID.
	var form = _('feedback-form');

	//Creating a new FormData()  object
	var formdata = new FormData();

	//Appending i.e assiging or defining variables and storing the form data/value into them
	formdata.append( "name", _("user_Name").value );
	formdata.append( "email", _("user_Email").value );
	formdata.append( "number", _("user_Number").value );
	formdata.append( "message", _("user_Message").value );

	//Creating a new XMLHttpRequest object
	var ajax = new XMLHttpRequest();

	//OPening a new connection from using ajax object with required script and POST method
	ajax.open( "POST", "feedBackMail.php" );

	//When the ajax object changes it state a function is initialized
	ajax.onreadystatechange = function() { 
		//If ajax ready state is 4 i.e true and ajax status is 200 is success 
		if(ajax.readyState == 4 && ajax.status == 200) {

			// To check if we recieve successful response Text from the backened script
			if(ajax.responseText == "success"){
				//If success display success message
				_("sending-icon").style.display = "none";
				_("formStatus").style.display = 'block';
				_("formStatus").innerHTML = 'Thankyou. We have recieved your feedback.';
				form.reset();
				_("formStatus").classList.add("success");
				_("formStatus").classList.remove("fail");
				// _("formStatus").style.animation = "form-status-display 4s linear forwards";
			} 
			else {
				//Else if fails display error message 
				// alert('working');
				_("sending-icon").style.display = "none";
				_("formStatus").style.display = 'block';
				_("formStatus").innerHTML = ajax.responseText;
				//Enable the send button again
				_("sendFeedbackButton").disabled = false;
				_("formStatus").classList.add("fail");
				_("formStatus").classList.remove("success");
				// _("formStatus").style.animation = "form-status-display 4s linear forwards";

			}
		}
	}
	//Send the form data
	ajax.send( formdata );
}


// Ajax form submission for the subscription form 
function subscriberListFunction(){
	// Disables the send button until the form submission is failed
	_("submit_subscriber_form").disabled = true;

	// For validating form data
	//if the input is blank throw error and highlight the empty field

	if((_("subscriber_email").value).length == 0){
		_("subscriber_email").classList.add("empty-field");
	}else if((_("subscriber_email").value).length > 0){
		_("subscriber_email").classList.remove("empty-field");
	} 


	// creating variable form and getting the form element by its ID.
	var form = _('subscriberList');

	//Creating a new FormData()  object
	var formdata = new FormData();

	//Appending i.e assiging or defining variables and storing the form data/value into them
	formdata.append( "subscriber_email", _("subscriber_email").value );

	//Creating a new XMLHttpRequest object
	var ajax = new XMLHttpRequest();

	//OPening a new connection from using ajax object with required script and POST method
	ajax.open( "POST", "subscriberList.php" );

	//When the ajax object changes it state a function is initialized
	ajax.onreadystatechange = function() { 
		//If ajax ready state is 4 i.e true and ajax status is 200 is success 
		if(ajax.readyState == 4 && ajax.status == 200) {

			// To check if we recieve successful response Text from the backened script
			if(ajax.responseText == "success"){
				//If success display success message
				_("subscribeStatus").style.display = 'block';
				_("subscribeStatus").innerHTML = 'successful subscription';
				form.reset();
				_("subscribeStatus").classList.add("success");
				_("subscribeStatus").classList.remove("fail");
				// _("subscribeStatus").style.animation = "form-status-display 5s ease-in ";

			} 
			else {
				//Else if fails display error message 
				_("subscribeStatus").style.display = 'block';
				_("subscribeStatus").innerHTML = ajax.responseText;
				//Enable the send button again
				
				_("subscribeStatus").classList.add("fail");
				_("subscribeStatus").classList.remove("success");
				// _("subscribeStatus").style.animation = "form-status-display 5s ease-in ";
				_("submit_subscriber_form").disabled = false;

			}
		}
	}
	//Send the form data
	ajax.send( formdata );
}



// Ajax function for booking table
// Ajax function for booking table

function bookTableFunction(){
	// Disables the send button until the form submission is failed
	_("bookNowButton").disabled = true;

	// Sets the status of the form submission
	_("sending-icon-booking").style.display = "block";

	// For validating form data
	//if the input is blank throw error and highlight the empty field

	if((_("user_Name").value).length == 0){
		_("user_Name").classList.add("empty-field");
	}else if((_("user_Name").value).length > 0){
		_("user_Name").classList.remove("empty-field");
	} 

	if((_("user_Email").value).length == 0){
		_("user_Email").classList.add("empty-field");
	}else if((_("user_Email").value).length > 0){
		_("user_Email").classList.remove("empty-field");
	}


	if((_("user_Number").value).length <10 || isNAN(_("user_Number").value)){
		_("user_Number").classList.add("empty-field");
	}else if((_("user_Number").value).length > 0){
		_("user_Number").classList.remove("empty-field");
	}
	


	if((_("booking_Date").value).length == 0){
		_("booking_Date").classList.add("empty-field");
	}else if((_("booking_Date").value).length >0){
		_("booking_Date").classList.remove("empty-field");
	}

	if((_("booking_Time").value).length == 0){
		_("booking_Time").classList.add("empty-field");
	}else if((_("booking_Time").value).length > 0){
		_("booking_Time").classList.remove("empty-field");
	}


	if((_("person_Number").value).length == 0){
		_("person_Number").classList.add("empty-field");
	}else if((_("person_Number").value).length >0){
		_("person_Number").classList.remove("empty-field");
	}

	// creating variable form and getting the form element by its ID.
	var form = _('bookTableform');

	//Creating a new FormData()  object
	var formdata = new FormData();

	//Appending i.e assiging or defining variables and storing the form data/value into them
	formdata.append( "user_Name", _("user_Name").value );
	formdata.append( "user_Email", _("user_Email").value );
	formdata.append( "user_Number", _("user_Number").value );
	formdata.append( "booking_Date", _("booking_Date").value );
	formdata.append( "booking_Time", _("booking_Time").value );
	formdata.append( "person_Number", _("person_Number").value );

	//Creating a new XMLHttpRequest object
	var ajax = new XMLHttpRequest();

	//OPening a new connection from using ajax object with required script and POST method
	ajax.open( "POST", "booking.php" );

	//When the ajax object changes it state a function is initialized
	ajax.onreadystatechange = function() { 
		//If ajax ready state is 4 i.e true and ajax status is 200 is success 
		if(ajax.readyState == 4 && ajax.status == 200) {

			// To check if we recieve successful response Text from the backened script
			if(ajax.responseText == "success"){
				//If success display success message

				_("sending-icon-booking").style.display = "none";
				_("bookingStatus").style.display = 'block';
				_("bookingStatus").innerHTML = 'Thankyou. We have recieved your feedback.';
				form.reset();
				_("bookingStatus").classList.add("success");
				_("bookingStatus").classList.remove("fail");
				_("bookingStatus").style.animation = "form-status-display 4s linear forwards";
			} 
			else {
				//Else if fails display error message 
				
				_("sending-icon-booking").style.display = 'none';
				_("bookingStatus").style.display = 'block';
				_("bookingStatus").innerHTML = ajax.responseText;

				//Enable the send button again

				_("bookNowButton").disabled = false;
				// alert('working');
				_("bookingStatus").classList.add("fail");
				_("bookingStatus").classList.remove("success");
				// _("bookingStatus").style.animation = "form-status-display 4s linear forwards";

			}
		}
	}
	//Send the form data
	ajax.send( formdata );
}