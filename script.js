function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 34.66767774804736,
			lng: 135.43076145097373,
		},
		zoom: 18,
		mapId: 'MAP_ID',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});

	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
			"Yoshi's House",
			34.66669734177897,
			135.4309054875526,
			'yoshi_house.svg',
			38,
			31,
		],
		[
			'You Are Here',
			34.66767112713121,
			135.4297887322531,
			'pointer.svg',
			30,
			47.8,
		],
		[
			'Ghost House',
			34.66832715150856,
			135.43292762674864,
			'ghosthouse.svg',
			40,
			48,
		],
		['Castle', 34.66775608022106, 135.43139547897843, 'castle.svg', 40, 53],
		['Warp Pipe', 34.66739738878135, 135.43225049775214, 'pipe.svg', 38, 42.5],
		['Star World', 34.667959023359266, 135.42866400953733, 'star.svg', 38, 38],
		[
			'Donut Plains',
			34.66830355359945,
			135.4320565322381,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			34.66829411443392,
			135.43231361996433,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			34.6683781779677,
			135.43217016043528,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}
