var path       = require('path');
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

var nodemailer = require('nodemailer');
// change this to your email
var admin_email = 'aj@koop.ws'

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.post('/api/message', function(req, res) {
  
	var transporter = nodemailer.createTransport('smtps://' + admin_email + ':pass@smtp.gmail.com');

	var mailOptions = {
	    from: req.body.email, // sender address
	    to: admin_email, // list of receivers
	    subject: 'New message from ' + req.body.name, // Subject line
	    text: req.body.message, // plaintext body
	    html: req.body.message // html body
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	        process.exit(1);
	    }
	    console.log('Message sent: ' + info.response);
	});

});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});