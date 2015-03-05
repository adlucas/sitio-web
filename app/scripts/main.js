'use strict';
      function initMap() {
    var varLocation = new google.maps.LatLng(42.142581, -0.417403);
 
        var varMapoptions = {
          center: varLocation,
          zoom: 16
        };
 var varMap;
    var varMarker = new google.maps.Marker({
      position: varLocation,
            map: varMap,
      title:'Huesca'});
 
         varMap = new google.maps.Map(document.getElementById('map-container'),
            varMapoptions);
 
    varMarker.setMap(varMap); 
 
      }
 
      google.maps.event.addDomListener(window, 'load', initMap);