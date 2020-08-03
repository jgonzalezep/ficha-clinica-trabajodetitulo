import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const fs = require('browserify-fs');
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default () => {
  const [getValoracion, setValoracion] = useState('')

  let data = {
    Valoracion: getValoracion
  }

  const save2file = () => {
    fs.writeFile('data5.txt', JSON.stringify(data), function(err, result) {
        fs.readFile('data5.txt', function(err, data) {
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
        <div className='ten columns'>
          <label>Valoración diaria clínica del paciente:</label>
          <textarea
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setValoracion(e.target.value)}
            value={getValoracion}
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
