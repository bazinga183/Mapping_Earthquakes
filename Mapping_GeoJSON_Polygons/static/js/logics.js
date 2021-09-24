// Add console.log to check to see if our code is working.
console.log("working");

// Tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Tile layer
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMpas = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/bazinga183/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// Create the map object with a center and a zoom level.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
});

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    // Creaing a GeoJSON layer with the retreived data.
    L.geoJSON(data).addTo(map);
});
