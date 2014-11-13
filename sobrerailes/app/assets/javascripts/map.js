function initialize() {

	var options = {
	  enableHighAccuracy: true,
	  timeout: 5000,
	  maximumAge: 0
	};

	function success(pos) {
		var lat = pos.coords.latitude;
		var lon = pos.coords.longitude;
		var myLatlng = new google.maps.LatLng(lat, lon);
		
//Almacenamos lat y long para enviarlo
		// var losers = {
		// 	signals: []
		// };

		var geoloc ={

				"lat": lat,
				"long": lon

			}


		// geoloc.signals.push( {"lat": lat, "lon": lon});

		$.ajaxSetup({cache: false});
		$.post("/map", geoloc, function(data){
				userMarkers(data)
		})

//Coordenadas de los otros usuarios, recogidas de la geolocalización, enviadas a sinatra por un "post" 
//y ahora recogidas con la function
//userMarkers que se integra en la var respuesta del post.
		function userMarkers(data){

	  	  	//$.getJSON("/map", function(data) { 
	
	     	       $.each(data, function (i, value) {
		
	      	         var myLatlng = new google.maps.LatLng(value.lat, value.long);
	      	          
	       	         var marker = new google.maps.Marker({
	       	         position: myLatlng,
	       	         map: map,
	       	         title: "mochilerillo"});
	      	         
	      	         //Esto tiene que venir del input en un futuro
	      	         var contentString = '<div>'+

	      				'<h1>'+value.user_name+'</h1>'+
	      				'<div>'+
	      				'<p>'+value.message+'</p>'+
	      				'<p>'+value.country+' <a href="http://twitter.com">'+
	      				'Twitter</a>' +
	      				'</p>'+
	      				'</div>'+
	      				'</div>';

					var infowindow = new google.maps.InfoWindow({
					content: contentString,
	      			maxWidth: 300

					});

	  	  			google.maps.event.addListener(marker, 'click', function() {
	   	  			infowindow.open(map, marker);
					});
		
	    			});
			//});
  	  	}
		

		// Objeto literal creado para la realización de las distintas opciones del mapa.
	    var mapOptions = {
	        zoom: 5,
	        center: new google.maps.LatLng(lat, lon),
	        disableDefaultUI: false,
	        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };

//Coordenadas de usuario en el marker.BORRAR. YA LO TENEMOS
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		// var marker = new google.maps.Marker({
  //     		 position: myLatlng,
  //    		 map: map,
 	// 	});
 
		// var contentString = '<div>'+
  //     		'<h1>You</h1>'+
  //     		'<div>'+
  //     		'<p>Write a message</p>'+
  //     		'<p>Country: Spain <a href="http://twitter.com">'+
  //     		'Twitter</a>' +
  //     		'</p>'+
  //     		'</div>'+
  //     		'</div>';

		// var infowindow = new google.maps.InfoWindow({
		// 		content: contentString,
  //     			maxWidth: 500

		// });

  // 	  	google.maps.event.addListener(marker, 'click', function() {
  //  	  	infowindow.open(map, marker);
		// 	});
  	  	

// Colocamos los valores JSON en los markers (establecimientos)
 		$.getJSON('/locations', function(data) { 
     	       $.each(data, function (i, value) {
	
      	         var myLatlng = new google.maps.LatLng(value.latitude, value.longitude);
      	          
       	         var marker = new google.maps.Marker({
       	         position: myLatlng,
       	         map: map,
       	         title: "mochilerillo"});
      	         
      	         //Esto tiene que venir del input en un futuro
      	         var contentString = '<div>'+
      				'<h1>'+value.name+'</h1>'+
      				'<div>'+
      				'<p>'+value.message+'</p>'+
      				'<p>'+value.country+' <a href="http://twitter.com">'+
      				'Twitter</a>' +
      				'</p>'+
      				'</div>'+
      				'</div>';

				var infowindow = new google.maps.InfoWindow({
				content: contentString,
      			maxWidth: 300

				});

  	  			google.maps.event.addListener(marker, 'click', function() {
   	  			infowindow.open(map, marker);
					});
	
    			});
		});

	};
	function error(err) {
	  console.warn('ERROR(' + err.code + '): ' + err.message);
	};

	navigator.geolocation.getCurrentPosition(success, error, options);

 	 
}
