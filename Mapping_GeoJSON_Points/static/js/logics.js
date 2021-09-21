// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and a zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// Tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/bazinga183/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creaing a GeoJSON layer with the retreived data.
    L.geoJSON(data)
    .bindPopup("<h3>" + "Airport Code: " + data.faa + "<h3/><hr>" +
    "Airport name: " + data.properties.airport)
    .addTo(map);
});
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    L.geoJSON(data, {
        // We turn each feature into a marker on the map.
        onEachFeature: function(feature,layer) {
            console.log(layer);
            layer.bindPopup("<h3>" + "Airport code: " + feature.properties.faa + "<h3/> <hr>"
            + "<h3>" + "Airport name: " + feature.properties.name + "</h3>");
        }
    }).addTo(map);
});