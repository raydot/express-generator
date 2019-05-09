var express = require('express');
var router = express.Router();

//// LETS TEST THAT MYSQL CONNECTION ////
var mysql = require('mysql')
var connection = mysql.createConnection({
	host		: process.env.REACT_APP_DB_HOST,
	user		: process.env.REACT_APP_DB_USER,
	password	: process.env.REACT_APP_DB_PW,
	port		: process.env.REACT_APP_DB_PORT
});

connection.connect(function(err) {
	if (err) {
		console.error('Your stuff is broke!', err.stack)
		return
	}

	console.log('Hey hey I got in!')
})

connection.end();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('hello there!')
});

module.exports = router;
