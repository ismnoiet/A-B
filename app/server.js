var express = require('express'),
	app     = express();

app.set('view engine','jade');
app.set('views',__dirname + '/views');

app.get('/',function(req,res){	
	res.render('index');
	console.log('listening on http://localhost:3000');
});

app.listen(3000);