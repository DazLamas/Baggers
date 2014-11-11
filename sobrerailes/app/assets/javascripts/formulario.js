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
		$.post( "/", JSON.stringify(dat), function(data){
			createStructure(data)
		})	
	}


	function createStructure(data){

		//Get section "contactPanel" where all the structure will be added
		var container = document.getElementById('contactPanel');
			
		//Create HTML tags
		var contactSection = document.createElement('section');
		var divBubble = document.createElement('div');
		var userImg = document.createElement('img');
		userImg.src = '/assets/avatar_guest.png';
		var nameH5 = document.createElement('h5');
		var cityH4 = document.createElement('h4');
		var messageP = document.createElement('p');

		//Place HTML tags in structure
		divBubble.appendChild(cityH4)
		divBubble.appendChild(nameH5)
		divBubble.appendChild(messageP)
		contactSection.appendChild(divBubble)
		contactSection.appendChild(userImg)
		container.appendChild(contactSection)

		//Set CSS styles
		divBubble.className = "bubble contact";
		contactSection.className = "contact";

		//Get data from DB
		$.each(data, function (value){
			nameH5.innerHTML = value.user_name
			messageP.innerHTML = value.message
		});
	};

