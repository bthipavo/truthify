var express = require("express")
var router = express.Router()

var webhoseio = require('webhoseio')

var client = webhoseio.config({token: '5cf34e49-3915-4912-9779-d37c592588ef'});


module.exports = function(app) { 

	console.log(req.body)
	var query_params = {
	"q": "\""+req.body+"\" language:english",
	"sort": "crawled"
	}

	client.query('filterWebContent', query_params)
	.then(output => {
	    console.log(output['posts'][0]['text']); // Print the text of the first post
	    console.log(output['posts'][0]['published']); // Print the text of the first post publication date
	})

}


