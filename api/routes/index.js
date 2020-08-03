var express = require('express');
var router = express.Router();

const fs = require('fs');
const carbone = require('carbone');

  
// Data to inject
var data = {
    firstname : 'John',
    lastname : 'Doe'
  };

  // Generate a report using the sample template provided by carbone module
  // This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
  // Of course, you can create your own templates

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/file', function(req, res, next) {
  console.log(req.body)
  carbone.render('./node_modules/carbone/examples/simple.odt', data,function(err, result){
    if (err) {
      return console.log(err);
    }
    fs.writeFileSync('./files/ficha_clinica.pdf', result);
    return '../api/files/ficha_clinica.pdf';
  });
});

module.exports = router;
