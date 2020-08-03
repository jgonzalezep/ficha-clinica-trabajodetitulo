import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Divider } from "@react-md/divider";
const fs = require('browserify-fs');
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default () => {

  const [getTipo, setTipo] = useState('')
  const [getTamano, setTamano] = useState('')
  const [getUbicacion, setUbicacion] = useState('')
  const [getDias, setDias] = useState('')
  const [getUso, setUso] = useState('')
  const [getSitioInsercion, setSitioInsercion] = useState('')
  const [getAlimentación, setAlimentación] = useState('')
  const [getCateter, setCateter] = useState('')
  const [getTamanoCateter, setTamanoCateter] = useState('')
  const [getDiasCateter, setDiasCateter] = useState('')

  let data = {
    Tipo: getTipo,
    Tamano: getTamano,
    Ubicacion: getUbicacion,
    Dias: getDias,
    Uso: getUso,
    SitioInsercion: getSitioInsercion,
    Alimentación: getAlimentación,
    Cateter: getCateter,
    TamanoCateter: getTamanoCateter,
    DiasCateter: getDiasCateter
  }

  const save2file = () => {
    fs.writeFile('data4.txt', JSON.stringify(data), function(err, result) {
        fs.readFile('data4.txt', function(err, data) {
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
      <label>Acceso Vascular:</label>
      <div className='row'>
        <div className='two columns'>
          <label>Tipo</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTipo(e.target.value)}
            value={getTipo}
            autoFocus
          />
        </div>
        <div className='two columns'>
          <label>Tamaño</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTamano(e.target.value)}
            value={getTamano}
          />
        </div>
        <div className='two columns'>
          <label>Ubicación</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setUbicacion(e.target.value)}
            value={getUbicacion}
          />
        </div>
        <div className='two columns'>
          <label>Días</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setDias(e.target.value)}
            value={getDias}
          />
        </div>
        <div className='two columns'>
          <label>Uso</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setUso(e.target.value)}
            value={getUso}
          />
        </div>
      </div>
      <div className='row'>
        <div className='ten columns'>
          <label>Sitio de Inserción</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setSitioInsercion(e.target.value)}
            value={getSitioInsercion}
          />
        </div>
      </div>
      <Divider />
      <div className='row'>
        <div className='three columns'>
          <label>Disp. alimentación</label>
          <select 
            className='u-full-width'
            type='text'
            onChange={e => setAlimentación(e.target.value)}
            value={getAlimentación}
            autoFocus>
             <option value="SNG">SNG</option>
             <option value="SOG">SOG</option>
             <option value="SNY">SNY</option>
             <option value="Gastrostomía">Gastrostomía</option>
             <option value="Yeyunostomía">Yeyunostomía</option>
             <option value="Otro">Otro</option>
          </select>
        </div>
        <div className='three columns'>
          <label>Catéter urinario</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setCateter(e.target.value)}
            value={getCateter}
          />
        </div>
        <div className='three columns'>
          <label>Tamaño</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTamanoCateter(e.target.value)}
            value={getTamanoCateter}
          />
        </div>
        <div className='three columns'>
          <label>Días</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setDiasCateter(e.target.value)}
            value={getDiasCateter}
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
