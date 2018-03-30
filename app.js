var express = require("express");
var app = express();

// app.get('/', (request, response) => {
// 	response.send("Hello!");
// });

// app.get('/sendhelp', (request, response) => {
// 	console.log("Button clicked!");
// });

app.use(express.static("./"));

app.listen(3000, () => {
	console.log("Listening on port 3000.");
});