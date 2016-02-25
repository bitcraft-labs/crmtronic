"use strict";
var modalFormValidation = (function () {
	$('#modal-form').submit(function (event) {
		var $modal_title = $("#incident-title").val();
		var $building = $("#incident-building").val();
		var $room_number = $('#incident-room-number').val();
		var $description = $("#incident-description").val();
		var $title_default = $('.tab_value');
		var $error = '<div class="alert alert-danger alert-dismissable" id="error">';
		var $formError = "";
		function calculateTitleDefault(value) {
			var isNotEqual = false;
			for(let i = 0; i < value.length; i++) {
				if(value[i].getAttribute("data-title") === $modal_title) {
					isNotEqual = true;
				} 
			}
			return isNotEqual;
		}
		function calculatePossibleInjection(value) {
			var isPossibleOfInjection = false;
			var checkInject =  /^\W/g;
			var injection = checkInject.exec(value);
			if(!injection) {
				isPossibleOfInjection = true;
			} 
			return isPossibleOfInjection;
		}
		if($modal_title === "") {
			 $formError += "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
                           "<span class='sr-only'>Error:</span>" +
                           " Title cannot be empty<br/>";
		} else if (!calculateTitleDefault($title_default)) {
			$formError += "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
                          "<span class='sr-only'>Error:</span>" +
                        	" Title cannot be the default<br/>";
		} else if(!calculatePossibleInjection($modal_title)) {
			$formError += "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
                          "<span class='sr-only'>Error:</span>" +
                        	" Invalid characters in Title<br/>";
		}
		if($building === null) {
			 $formError += "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
                           "<span class='sr-only'>Error:</span>" +
                           " Building must be chosen <br/>";
		} 
		if($room_number === "") {
			 $formError += "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
                           "<span class='sr-only'>Error:</span>" +
                           " Room number cannot be empty<br/>";
		} else if (!calculatePossibleInjection($room_number)) {
			$formError += "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
                          "<span class='sr-only'>Error:</span>" +
                        	" Invalid characters in Room number<br/>";
		}
		if($description === "") {
			 $formError += "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
                           "<span class='sr-only'>Error:</span>" +
                           " Description cannot be empty<br/>";
		} else if (!calculatePossibleInjection($description)) {
			$formError += "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
                          "<span class='sr-only'>Error:</span>" +
                        	" Invalid characters in Description<br/>";
		}
		if($formError !== "") {
			event.preventDefault();
            $error += ("<button type='button' class='close' data-dismiss='alert'>x</button>" + $formError);
            $error += '</div>';
            $("#error-container").html($error);
        }
	});
}); 