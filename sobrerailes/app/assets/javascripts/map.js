function initialize() {
  $.ajaxSetup({cache: false});

	function onGpsSuccess(position) {
		var coords = position.coords;
    var latLng = new google.maps.LatLng(coords.latitude, coords.longitude);

    var map = new google.maps.Map(document.getElementById("map_canvas"), {
        zoom                    : 14,
        center                  : latLng,
        mapTypeId               : google.maps.MapTypeId.ROADMAP
    });

		$.post("/map",  {"lat": coords.latitude, "long": coords.longitude}, function (data) {
   		$.each(data, function (i, value) {
	    	var marker = new google.maps.Marker({
         	position: new google.maps.LatLng(value.lat, value.long),
        	map 		: map,
          icon    : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
         	title		: "Backpacker"
	      });

	    	var html = "\
	    		<div>\
	    			<h1>" + value.user_name + "</h1>\
	    			<a href='http://twitter.com'>Twitter</a>\
	    		</div>";

				var infowindow = new google.maps.InfoWindow({content: html, maxWidth: 800});
		  	google.maps.event.addListener(marker, 'click', function() {
		  		infowindow.open(map, marker);
				});
			});
	 	});

	 	// @JAVI_BORRACHO_TODAVIA_ES_CAPAZ_DE_DIFERENCIAR: FUNCIONES: camelCase VARIABLES: camel_case
		var marker = new google.maps.Marker({ position: latLng, map: map});

		var infowindow = new google.maps.InfoWindow({
				content :  '<h1>You</h1>',
      	maxWidth: 500
		});

  	google.maps.event.addListener(marker, 'click', function() {
   	  infowindow.open(map, marker);
		});

 		$.getJSON('/locations', function(data) {
      $.each(data, function (i, value) {
       	var marker = new google.maps.Marker({
          position:  new google.maps.LatLng(value.latitude, value.longitude),
          map     : map,
          icon    : 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          title   : "Bar/Restaurant"
        });

				var infowindow = new google.maps.InfoWindow({
				  content : '<div>' + value.name + '</div>',
      		maxWidth: 800
				});

  	    google.maps.event.addListener(marker, 'click', function() {
   	      infowindow.open(map, marker);
			  });
    	});
		});
	};

	function onGpsError(error) {
	  console.warn('ERROR(' + error.code + '): ' + error.message);
	};

  // -- GET CURRENT POSITION VIA GPS ------------------------------------------
	navigator.geolocation.getCurrentPosition(onGpsSuccess, onGpsError, {
    enableHighAccuracy: true,
    maximumAge        : 60000 /* 60 seconds cached */
  });
}
