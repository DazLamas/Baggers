'use strict';
//Send data to the server

document.getElementById('button').onclick = function (){

	var jsonChat ={

		"user_name": document.getElementById('user_name').value,
		"message": document.getElementById('message').value

	}
	saveInfo(jsonChat);
}
	function saveInfo(dat){
		$.post( "/", JSON.stringify(dat))	
	}
	
