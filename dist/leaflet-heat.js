var initialCoordinates = [-12.9704, -38.5124 12]; // Salvador
var heat = L.heatLayer([
	[50.5, 30.5, 0.2], // lat, lng, intensity
	[50.6, 30.4, 0.5],
	...
], {radius: 25}).addTo(map);
 
