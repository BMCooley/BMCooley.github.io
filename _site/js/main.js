$(document).ready(function(){

console.log('main.js run')

	var postArea = $(".post-area")
	if (postArea.length) {
		var userName = 'dan_abramov';
		var options = {
			method: 'GET',
			url: 'https://medium.com/@' + userName + '/latest',
			headers: {
				accept: 'application/json'
			}
		};
		fetch(options).then((error, response, body) => {
			if (error) throw new Error(error);
			body = JSON.parse(body);
			returnObj = body.payload.references.Post;
		});
	}
	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});




