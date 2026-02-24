/* 
Open the reservation.zip file in this module. 
Then, run the application and click the Submit Request button to see the page that’s displayed when the form is submitted to the server.

In the JavaScript file, note that the ready event handler contains the declaration for a constant named emailPattern 
that contains the pattern that will be used to validate the email address.

Code an event handler for the submit event of the form. 
This event handler should validate the user entries. 
If any of the entries are invalid, the code should cancel the submission of the form. The validation is as follows:

A value must be entered into each text box.

The number of nights must be numeric.

The email address must match the pattern that’s provided.

Be sure to trim the entries and put them back into the controls regardless of whether the entries are valid.
*/
"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	$('#arrival_date').focus();
	$('#reservation_form').submit( event => {
		let isValid = true;

		let arrivalDate = $('#arrival_date').val().trim();
		let nights = $('#nights').val().trim();
		let name = $('#name').val().trim();
		let email = $('#email').val().trim();
		let phone = $('#phone').val().trim();

		$('#arrivalDate').val(arrivalDate);
		$('#nights').val(nights);
		$('#name').val(name);
		$('#email').val(email);
		$('#phone').val(phone);

		if (arrivalDate === '') {
			isValid = false;
		}

		if (nights === '' || isNaN(nights)) {

			isValid = false;
			$('#nights').next('span').text('Must be numeric.').fadeOut(4000, 'linear');
		}

		if (name === '') {
			isValid = false;
		}

		if (email === '' || !emailPattern.test(email)) {
			isValid = false;
			$('#email').next('span').text('Must be a valid email address.').fadeOut(4000, 'linear');
		}

		if (phone === '') {
			isValid = false;
			$('#phone').next('span').text('This field is required.').fadeOut(4000, 'linear');
		}

		if (!isValid) {
			event.preventDefault();
		}
	});	
}); // end ready