const express = require("express");
const app = express();

app.get("/", function(request, response) {
	return response.json([
		{
			name: "Sir Peter Jackson",
			born: "31 October 1961 Wellington, New Zealand"
		},
		{
			name: "James Francis Cameron",
			born: "16 August 1954 Kapuskasing, Ontario, Canada"
		},
		{
			name: "Samuel M. Raimi",
			born: "23 October 1959 Royal Oak, Michigan, U.S."
		},
		{
			name: "Bong Joon-ho",
			born: "14 September 1969 Daegu, South Korea"
		},
		{
			name: "Guillermo del Toro",
			born: "9 October 1964 Guadalajara, Jalisco, Mexico"
		},
		{
			name: "Damien Sayre Chazelle",
			born: "19 January 1985 Providence, Rhode Island, U.S."
		},
		{
			name: "Alejandro González Iñárritu",
			born: "15 August 1963 Mexico City, Mexico"
		},
		{
			name: "Alfonso Cuarón Orozco",
			born: "28 November 1961 Mexico City, Mexico"
		},
		{
			name: "Kathryn Ann Bigelow",
			born: "27 November 1951 San Carlos, California, U.S."
		}
	]);
});

app.listen(3000, '0.0.0.0', function() {
	console.log("App running on port 3000");
})