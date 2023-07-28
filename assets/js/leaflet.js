/*!
* This file is intentionally blank
* Use this file to add JavaScript to your project
# The WTFPL License (WTFPL)
# Copyright (c) 20230719 bibibricodeur
*/

// https://developer.mozilla.org/fr/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("leaflet fully loaded and parsed");
    // https://leafletjs.com/examples/quick-start/
    // https://www.google.com/maps/@45.8651633,-0.3220895,21z?hl=fr
    var map = L.map('map').setView([45.8651633, -0.3220895], 6); 

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 12,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([45.8651633, -0.3220895]).addTo(map);

    //marker.bindPopup("Im not her!").openPopup();
});


