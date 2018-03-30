var express = require("express");
var app = express();

// app.get('/', (request, response) => {
// 	response.send("Hello!");
// });

app.use(express.static("./"));

// app.use(express.static("assets"));

app.listen(3000, () => {
	console.log("Listening on port 3000.");
});