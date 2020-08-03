import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const fs = require('browserify-fs');
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default () => {
  const [getTotalCompensadores, setTotalCompensadores] = useState('')
  const [getPacialmentCompensadores, setPacialmentCompensadores] = useState('')
  const [getApoyoEducacion, setApoyoEducacion] = useState('')

  let data = {
    TotalCompensadores: getTotalCompensadores,
    PacialmentCompensadores: getPacialmentCompensadores,
    ApoyoEducacion: getApoyoEducacion
  }

  const save2file = () => {
    fs.writeFile('data6.txt', JSON.stringify(data), function(err, result) {
        fs.readFile('data6.txt', function(err, data) {
            if(data){
              NotificationManager.success('Exitosamente', 'Guardado');
            }
            else{
              NotificationManager.error('Error', 'No se pudo guardar!');
            }
        });
    });
}

return (
    <div>
      <div className='row'>
        <div className='four columns'>
          <label>Totalmente compensadores</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTotalCompensadores(e.target.value)}
            value={getTotalCompensadores}
            autoFocus
          />
        </div>
        <div className='three columns'>
          <label>Parcialmente compensadores</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setPacialmentCompensadores(e.target.value)}
            value={getPacialmentCompensadores}
          />
        </div>
        <div className='four columns'>
          <label>De apoyo-educación.</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setApoyoEducacion(e.target.value)}
            value={getApoyoEducacion}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <hr />
          <Button
            variant="success"
            onClick={save2file}
          >
            Guardar
          </Button>
          <hr />
        </div>
      </div>
      <NotificationContainer/>
  </div>
  )
}
