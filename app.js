
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  bodyParser = require('body-parser');

var app = express();

app.use("/public", express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "jade");

////
app.get('/',function(req, res){
    res.render("index");
});

app.get('/login', function(req, res){
    res.render("login");
});

app.post("/users", function(req, res){
	var email = req.body.email;
	var password = req.body.password;
	console.log("email " + email);
	console.log("password ", password);
	res.render("vistaFinal", {email: email, password: password});
});

app.listen(8080);
