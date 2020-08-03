import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const fs = require('browserify-fs');
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default () => {

  const [getRac1Satisfecho, setRac1Satisfecho] = useState('')
  const [getRac1Insatisfecho, setRac1Insatisfecho] = useState('')
  const [getRac2Satisfecho, setRac2Satisfecho] = useState('')
  const [getRac2Insatisfecho, setRac2Insatisfecho] = useState('')
  const [getRac3Satisfecho, setRac3Satisfecho] = useState('')
  const [getRac3Insatisfecho, setRac3Insatisfecho] = useState('')
  const [getRac4Satisfecho, setRac4Satisfecho] = useState('')
  const [getRac4Insatisfecho, setRac4Insatisfecho] = useState('')
  const [getRac5Satisfecho, setRac5Satisfecho] = useState('')
  const [getRac5Insatisfecho, setRac5Insatisfecho] = useState('')
  const [getRac6Satisfecho, setRac6Satisfecho] = useState('')
  const [getRac6Insatisfecho, setRac6Insatisfecho] = useState('')
  const [getRac7Satisfecho, setRac7Satisfecho] = useState('')
  const [getRac7Insatisfecho, setRac7Insatisfecho] = useState('')
  const [getRac8Satisfecho, setRac8Satisfecho] = useState('')
  const [getRac8Insatisfecho, setRac8Insatisfecho] = useState('')
    
  let data = {
    Rac1Satisfecho: getRac1Satisfecho,
    Rac1Insatisfecho: getRac1Insatisfecho,
    Rac2Satisfecho: getRac2Satisfecho,
    Rac2Insatisfecho: getRac2Insatisfecho,
    Rac3Satisfecho: getRac3Satisfecho,
    Rac3Insatisfecho: getRac3Insatisfecho,
    Rac4Satisfecho: getRac4Satisfecho,
    Rac4Insatisfecho: getRac4Insatisfecho,
    Rac5Satisfecho: getRac5Satisfecho,
    Rac5Insatisfecho: getRac5Insatisfecho,
    Rac6Satisfecho: getRac6Satisfecho,
    Rac6Insatisfecho: getRac6Insatisfecho,
    Rac7Satisfecho: getRac7Satisfecho,
    Rac7Insatisfecho: getRac7Insatisfecho,
    Rac8Satisfecho: getRac8Satisfecho,
    Rac8Insatisfecho: getRac8Insatisfecho
  }

  const save2file = () => {
    fs.writeFile('data7.txt', JSON.stringify(data), function(err, result) {
        fs.readFile('data7.txt', function(err, data) {
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
      <table className="table">
          <thead>
            <tr>
              <th>RAC</th>
              <th>SATISFECHO</th>
              <th>INSATISFECHO</th>
            </tr>
          </thead>
          <tbody>
            <tr key="1">
              <td>Mantenimiento de un ingreso suficiente de aire.</td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='Si'
                  type='checkbox'
                  onChange={e => setRac1Satisfecho(e.target.value)}
                  value={getRac1Satisfecho}
                  autoFocus
                />
              </td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='No'
                  type='checkbox'
                  onChange={e => setRac1Insatisfecho(e.target.value)}
                  value={getRac1Insatisfecho}
                  autoFocus
                />
              </td>
            </tr>
            <tr key="1">
              <td>Mantenimiento de una ingesta suficiente de agua.</td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='Si'
                  type='checkbox'
                  onChange={e => setRac2Satisfecho(e.target.value)}
                  value={getRac2Satisfecho}
                  autoFocus
                />
              </td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='No'
                  type='checkbox'
                  onChange={e => setRac2Insatisfecho(e.target.value)}
                  value={getRac2Insatisfecho}
                  autoFocus
                />
              </td>
            </tr>
            <tr key="1">
              <td>Mantenimiento de una ingesta suficiente de alimentos.</td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='Si'
                  type='checkbox'
                  onChange={e => setRac3Satisfecho(e.target.value)}
                  value={getRac3Satisfecho}
                  autoFocus
                />
              </td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='No'
                  type='checkbox'
                  onChange={e => setRac3Insatisfecho(e.target.value)}
                  value={getRac3Insatisfecho}
                  autoFocus
                />
              </td>
            </tr>
            <tr key="1">
              <td>Provisión de cuidados asociados con procesos de eliminación urinaria e intestinal.</td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='Si'
                  type='checkbox'
                  onChange={e => setRac4Satisfecho(e.target.value)}
                  value={getRac4Satisfecho}
                  autoFocus
                />
              </td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='No'
                  type='checkbox'
                  onChange={e => setRac4Insatisfecho(e.target.value)}
                  value={getRac4Insatisfecho}
                  autoFocus
                />
              </td>
            </tr>
            <tr key="1">
              <td>Equilibrio entre actividades y descanso.</td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='Si'
                  type='checkbox'
                  onChange={e => setRac5Satisfecho(e.target.value)}
                  value={getRac5Satisfecho}
                  autoFocus
                />
              </td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='No'
                  type='checkbox'
                  onChange={e => setRac5Insatisfecho(e.target.value)}
                  value={getRac5Insatisfecho}
                  autoFocus
                />
              </td>
            </tr>
            <tr key="1">
              <td>Equilibrio entre soledad y la comunicación social.</td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='Si'
                  type='checkbox'
                  onChange={e => setRac6Satisfecho(e.target.value)}
                  value={getRac6Satisfecho}
                  autoFocus
                />
              </td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='No'
                  type='checkbox'
                  onChange={e => setRac6Insatisfecho(e.target.value)}
                  value={getRac6Insatisfecho}
                  autoFocus
                />
              </td>
            </tr>
            <tr key="1">
              <td>Prevención de peligros para la vida, funcionamiento y bienestar humano.</td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='Si'
                  type='checkbox'
                  onChange={e => setRac7Satisfecho(e.target.value)}
                  value={getRac7Satisfecho}
                  autoFocus
                />
              </td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='No'
                  type='checkbox'
                  onChange={e => setRac7Insatisfecho(e.target.value)}
                  value={getRac7Insatisfecho}
                  autoFocus
                />
              </td>
            </tr>
            <tr key="1">
              <td>Promoción del funcionamiento humano y el desarrollo dentro de los grupos sociales de acuerdo con el potencial humano.</td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='Si'
                  type='checkbox'
                  onChange={e => setRac8Satisfecho(e.target.value)}
                  value={getRac8Satisfecho}
                  autoFocus
                />
              </td>
              <td>
                <input
                  className='u-full-width'
                  placeholder='No'
                  type='checkbox'
                  onChange={e => setRac8Insatisfecho(e.target.value)}
                  value={getRac8Insatisfecho}
                  autoFocus
                />
              </td>
            </tr>
          </tbody>
      </table>
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
