
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
	if(email === "camigomez35@gmail.com" && password === "123456"){
		console.log("email " + email);
		console.log("password ", password);
		res.render("vistaFinal", {email: email, password: password});
	}else{
		res.render("error");
	}
	
});

app.get("/suma", function(req, res){
	res.render("suma");
});

app.post("/suma", function(req, res){
	var valor1 = parseInt(req.body.valor1) ;
	var valor2 = parseInt(req.body.valor2);
	var result = valor1 + valor2;
	res.render("resultado", {valor1: valor1, valor2: valor2, resultado: result});
});

app.listen(8080);
