import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const fs = require('browserify-fs');
//const carbone = require('carbone');
import axios from "axios";
const downloadjs = require("downloadjs")

export default () => {

  let body = []
  const download = () => {

    for(let i; i<8; i++){
      fs.readFile('data',i.toString(),'.txt', function(err, data) {
        if(data){
            body.push(JSON.parse(data))
          }
      });
    }
    axios.post('http://localhost:5678/file', body)
    .then(function (response) {
      console.log(response);
      window.open('http://localhost:5678/file', "_blank");
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <div className='row'>
        <div className='ten columns terms'>
          <span>A continuación podrás descargar la ficha medica:</span>
          <ul className='docs-terms'>
            <li>
              Descargar ficha medica <Button variant="success" onClick={download}> Descargar </Button>
            </li>
            <li>
              Una vez, descargada podrás enviarla por mail
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}