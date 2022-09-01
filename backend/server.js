//var http = require('http');
var mysql = require('mysql');
const fs = require('fs');

require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(morgan('dev'));


//	******************************************** MYSQL CONNECTION. GETTING DATA FROM DATABASE ****************************************************
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "locations"
});

let places;
let imagesArr = [];
let finalobj = {};

let smallArr = [];

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM places where continent = 'Africa'", function(err, result, fields){
	  if(err) throw err;
	  
	  places = result;
	  places.forEach((el) => {
		  let newArr = el.images.split(", ");
		  newArr.forEach((item) => {
			  let tempImg = base64_encode(item);
			  smallArr.push({pictures: tempImg})		// It used to be - imagesArr.push({pictures: tempImg})
		  })
		  el.suratlari = smallArr;
		  smallArr = [];
	  })
	  
	  console.log(places);
  })
  console.log("Connected!");
});

function base64_encode(file){
	return fs.readFileSync(file, 'base64');
}

//response.writeHead(200, {'Content-Type': 'application/json'});
//response.end(JSON.stringify(places) + "separatorplace" + JSON.stringify(imagesArr));



app.get("/allplaces", function(req, res) {
  finalobj.description = places;
  finalobj.rasmlari = imagesArr;
  
  res.json(places);
});


app.listen(4000, function(){
  console.log("server is running on port 4000");
})


/*app.post('/', (req, res) => {
	res.send('Hello world')
})*/

//module.exports = app;

/*
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM places where continent = 'Africa'", function(err, result, fields){
	  if(err) throw err;
	  
	  places = result;
	  places.forEach((el) => {
		  let newArr = el.images.split(", ");
		  newArr.forEach((item) => {
			  let tempImg = base64_encode(item);
			  smallArr.push({suratlari: tempImg})		// It used to be - imagesArr.push({pictures: tempImg})
		  })
		  el.suratlari = smallArr;
		  console.log(places);
		  smallArr = [];
	  })
	  
  })
  console.log("Connected!");
});

*/
