var sendButton = document.getElementById('button')

sendButton.onclick = function (){

	var userName = document.getElementById('name').value;

	var container = document.getElementById('contactPanel');
	var divBubble = document.createElement('div');
	var nameH5 = document.createElement('h5');

	divBubble.appendChild(nameH5)
	container.appendChild(divBubble)



	nameH5.innerHTML = userName

}

