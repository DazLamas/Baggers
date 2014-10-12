var sendButton = document.getElementById('button')

sendButton.onclick = function (){

	var userName = document.getElementById('name').value;
	var userCity = document.getElementById('city').value;
	var userMessage = document.getElementById('message').value;

	var container = document.getElementById('contactPanel');
	var contactSection = document.createElement('section');
	var divBubble = document.createElement('div');

	var userImg = document.createElement('img');
	userImg.src = 'img/avatar_guest.png';

	var nameH5 = document.createElement('h5');
	var cityH4 = document.createElement('h4');
	var messageP = document.createElement('p');
	

	divBubble.appendChild(cityH4)
	divBubble.appendChild(nameH5)
	divBubble.appendChild(messageP)
	contactSection.appendChild(divBubble)
	contactSection.appendChild(userImg)
	container.appendChild(contactSection)

	divBubble.className = "bubble contact";
	contactSection.className = "contact";

	cityH4.innerHTML = userCity
	nameH5.innerHTML = userName
	messageP.innerHTML = userMessage


}