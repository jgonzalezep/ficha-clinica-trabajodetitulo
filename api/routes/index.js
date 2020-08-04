var express = require('express');
var router = express.Router();

const fs = require('fs');
const carbone = require('carbone');
const libre = require('libreoffice-convert');

  
// Data to inject
var data = {
    firstname : 'John',
    lastname : 'Doe'
  };

  // Generate a report using the sample template provided by carbone module
  // This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
  // Of course, you can create your own templates

/* GET home page. */
router.get('/file', function(req, res, next) {
  res.download('./files/ficha_clinica.pdf');
});

router.post('/file', function(req, res, next) {
  console.log(req.body)
  carbone.render('./files/template.odt', data,{ convertTo : 'pdf' },function(err, result){
    if (err) {
      return console.log(err);
    }
    fs.writeFileSync('./files/ficha_clinica.pdf', result);
    return res.download('./files/ficha_clinica.pdf');
  });
});

module.exports = router;
