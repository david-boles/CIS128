function googleLoaded() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var coords = position.coords;
    displayLocation(coords.latitude, coords.longitude);
    initMap(coords.latitude, coords.longitude)
  }, function(error) {
    displayError();
  });
}

//Display the map
function initMap(latitude, longitude) {
  var coords = {lat: latitude, lng: longitude};
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    zoom: 16,
    center: coords
  });
  var marker = new google.maps.Marker({
    position: coords,
    map: map
  });
  mapDiv.style.display = 'inherit';
}

//Text stuff
function hideWorkingMessage() {
  document.getElementById('working_message').style.display = 'none';
}

function displayLocation(latitude, longitude) {
  hideWorkingMessage();
  document.getElementById('latitude').innerText = latitude;
  document.getElementById('longitude').innerText = longitude;
  document.getElementById('location_info').style.display = 'initial';
}

function displayError() {
  hideWorkingMessage();
  document.getElementById('error_message').style.display = 'initial';
}