import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const fs = require('browserify-fs');
//const carbone = require('carbone');
import axios from "axios";
const downloadjs = require("downloadjs")

export default () => {

  let body = {
    0:{},
    1:{},
    2:{},
    3:{},
    4:{},
    5:{},
    6:{},
    7:{}
  };

  var data = [
    {
      movieName : 'Matrix',
      actors    : [{
        firstname : 'Keanu',
        lastname  : 'Reeves'
      },{
        firstname : 'Laurence',
        lastname  : 'Fishburne'
      },{
        firstname : 'Carrie-Anne',
        lastname  : 'Moss'
      }]
    },
    {
      movieName : 'Back To The Future',
      actors    : [{
        firstname : 'Michael',
        lastname  : 'J. Fox'
      },{
        firstname : 'Christopher',
        lastname  : 'Lloyd'
      }]
    }
  ];

  const download = () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
    numbers.map((n) => {
      if( localStorage.getItem('data'+(n+1).toString()) ){
        console.log(JSON.parse(localStorage.getItem('data'+(n+1).toString())))
        body[n] = JSON.parse(localStorage.getItem('data'+(n+1).toString()))
      }
    })
   console.log(body['1'])
    axios.post('http://localhost:5678/file', body)
    .then(function (response) {
      console.log(response);
      if(response){
        window.open('http://localhost:5678/file', "_blank");
      }
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