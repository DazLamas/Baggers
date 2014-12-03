'use strict';
//Send data to the server

document.getElementById('button').onclick = function (){

	var jsonChat ={
		"user_name" : document.getElementById('user_name').value,
		"message"	: document.getElementById('message').value
	}
	
	$.ajax({
	   type 		: "POST",
	   url 			: "/",
	   beforeSend	: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
	   data 		: JSON.stringify(jsonChat)
	 })
}