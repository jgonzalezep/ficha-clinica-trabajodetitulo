import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const fs = require('browserify-fs');
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default () => {

  const [getDiagnostico, setDiagnostico] = useState('')
  const [getObjetivo, setObjetivo] = useState('')
  const [getActividades, setActividades] = useState('')
  const [getEvaluacion, setEvaluacion] = useState('')

  let data = {
    Diagnostico: getDiagnostico,
    Objetivo: getObjetivo,
    Actividades: getActividades,
    Evaluacion: getEvaluacion
  }

  const save2file = () => {
    let i = 8;
    localStorage.setItem('data'+i.toString(), JSON.stringify(data))
    if( localStorage.getItem('data'+i.toString()) ){
      console.log(JSON.parse(localStorage.getItem('data'+i.toString())))
      NotificationManager.success('Exitosamente', 'Guardado');
    }
    else{
      NotificationManager.error('Error', 'No se pudo guardar!');
    }
  }

return (
    <div>
      <div className='row'>
        <div className='ten columns'>
          <label>Diagnóstico:</label>
          <textarea
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setDiagnostico(e.target.value)}
            value={getDiagnostico}
          />
        </div>
      </div>
      <div className='row'>
        <div className='ten columns'>
          <label>Objetivo de enfermería:</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setObjetivo(e.target.value)}
            value={getObjetivo}
          />
        </div>
      </div>
      <div className='row'>
        <div className='ten columns'>
          <label>Intervenciones y actividades de enfermería:</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setActividades(e.target.value)}
            value={getActividades}
          />
        </div>
      </div>
      <div className='row'>
        <div className='ten columns'>
          <label>Evaluación del proceso enfermero:</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setEvaluacion(e.target.value)}
            value={getEvaluacion}
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
