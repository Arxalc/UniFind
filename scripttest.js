// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow, arName, arLat, arLong;
var marker, clickMarker;

function initMap() {
    // Default map location is Athens
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.9519, lng: -83.3576 },
        zoom: 14,
    });
   

    for (let i = 0; i < brarray.length; i++) {
        var innerArrayLength = brarray[i].length;
        for (let j = 0; j < innerArrayLength; j++) {
            //console.log('[' + i + ',' + j + '] = ' + brarray[i][j]);
            
            if (j == 1) {
                arName = brarray[i][j];
            } else if (j == 2) {
                arLat = brarray[i][j];
            } else if (j == 3) {
                arLong = brarray[i][j];
            }
            
        }
        L = { lat: arLat, lng: arLong};
        const myLL = L;
        new google.maps.Marker({
            position: myLL,
            map,
            title: arName,
        });

    }

    infoWindow = new google.maps.InfoWindow();
    infoWindow.open(map);
    // Configure the click listener.
    
    map.addListener("click", (mapsMouseEvent) => {
        var latitude = mapsMouseEvent.latLng.lat();
        var longitude = mapsMouseEvent.latLng.lng();
        //console.log( latitude + ', ' + longitude );
        // Close the current InfoWindow.
        infoWindow.close();
        //alert(brarray);
        const contentString =
        '<form action="/userMarker.php">' +
            '<label for="markerName">Name:</label>' + 
            '<input type="text" id="markerName" name="markerName"><br>' +
            '<label for="markerDesc">Description:</label>' +
            '<input type="text" id="markerDesc" name="markerDesc"><br>' +
            '<input type="submit" value="Submit">' +
        '</form>';

        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({
            content: contentString,
            position: mapsMouseEvent.latLng,
        });
        /*
        infoWindow.setContent(
            JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        );
        */
        infoWindow.open(map);
        const clickMarker = new google.maps.Marker({
            position: {lat: latitude, lng: longitude},
            title: "Test!"
        });
        clickMarker.setMap(map);
        
    });
    const locationButton = document.createElement("button");
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                    marker = new google.maps.Marker({
                        position: pos,
                        title: "Current Location!"
                    });
                    marker.setMap(map); // Need to close infoWidow first to see marker
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}