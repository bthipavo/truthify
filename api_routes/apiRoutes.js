var express = require("express")
var router = express.Router()
var request = require("request");


var webhoseio = require('webhoseio')

var client = webhoseio.config({token: '5cf34e49-3915-4912-9779-d37c592588ef'});


module.exports = function(app) { 

	app.post("/search", function(req, res) {
		console.log("search word " + req.body.Body)
		var query_params = {
		"q": "\""+req.body.Body+"\" language:english thread.site_type:news",
		"sort": "crawled",
		"size": 10
		}
		client.query('filterWebContent', query_params)
		.then(output => {
		    // console.log(output['posts'][0]['text']); // Print the text of the first post
		    // console.log(output['posts'][0]['published']);
		    res.json(output);
		    
		})
	})

}


