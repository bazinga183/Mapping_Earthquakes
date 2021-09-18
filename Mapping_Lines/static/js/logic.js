// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and a zoom level.
let map = L.map('mapid').setView([35, -92], 4);

// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790],
  [30.1974, -97.6663],
  [43.6777, -79.6248],
  [40.6441, -73.7822]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  line: "dashed",
  lineweight: 4,
  opacity: 0.5,
  dashArray: "20"
}).addTo(map);

// Tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}).addTo(map);