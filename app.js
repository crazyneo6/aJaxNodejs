var express = require('express');
 
var app = express();
app.enable("jsonp callback");

app.get('/wines', function(req, res) {
	
	res.json([{name:'wine1',person:'gogo'}, {name:'wine2'}, {name:'wine3'}, {name:'wine4'}, {name:'wine5'}, {name:'wine6'}]);
});
app.get('/wines/:id', function(req, res) {
	    res.json({id:req.params.id, name: "The Name", description: "description"});
});
 
app.listen(process.env.VCAP_APP_PORT || 3000);
console.log('Listening on port 3000...');