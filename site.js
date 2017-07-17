(function() {

//--- global variables

// keep track of map markers
var activeMarkers = [];

// raw mapping data
var data = [];

//--- end global variables


//--- mapping functions
function addMarker(row) {
   
    var markerOptions = {'stroke': true, 'color': 'white', 'weight': 1, 'fillOpacity': 0.3, 
                         'radius': 6, 'fillColor': '#004488', 'pane': 'markerPane'};
    
    var latitude = row['lat'];
    var longitude = row['lon'];
    var marker = L.circleMarker([latitude, longitude], markerOptions).addTo(map);

    if (row['description']) {    
        marker.bindPopup(row['description']);
        marker.on('mouseover', function (e) {
            this.openPopup();
        });
    }

    activeMarkers.push(marker);
}

// delete all markers from the map
function removeMarkers() {
    activeMarkers.forEach(function(marker) {
        map.removeLayer(marker);
    });
}

// replace the existing markers with a new set of markers
function replaceMarkers(data) {
    removeMarkers();
	data.forEach(function(row) {
       addMarker(row);
	});
}

// zoom the map to fit the existing set of active markers
function fitToMarkers() {
    if (activeMarkers.length) {
        var latlngs = activeMarkers.map(function(marker) {
            return marker.getLatLng();
        });
        var bounds = L.latLngBounds(latlngs);
        map.fitBounds(bounds, {padding: [50, 50]});
    }
}

// reset the map to an overview of the contiguous US
function resetMapView(map) {
	map.fitBounds([
		[24.926294766395593, -68.29101562500001],
		[49.26780455063753, -124.98046875000001]
	]);	
}
//--- end mapping functions


//--- called after loading this javascript file
jQuery(function($) {
	
	// create map
	map = L.map('map', {
		scrollWheelZoom: false
	});
	            	  
	// reset view  
    resetMapView(map);
	
	// specify Carto tiles
	L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a>'
	}).addTo(map);
	
	// load data, then add markers
	 $.ajax({
		dataType: "json",
		url: "data.json"
	}).done(function(response) {
	
		// store to global variable
		data = response;

        // add markers
        data.forEach(function(location) {
            addMarker(location);
        });
        
        // fit the map to the set of markers
        fitToMarkers();
		
	}).fail(function() {
        console.log("Could not load data.json");
	});
	
});

}).call(this);