import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import file from './json/data1.json'
import test from './json/test.txt'
const fs = require('browserify-fs');
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default () => {
  const [getEdad, setEdad] = useState('')
  const [getDiagnosticoIngreso, setDiagnosticoIngreso] = useState('')
  const [getEscolaridad, setEscolaridad] = useState('')
  const [getEdadTutor, setEdadTutor] = useState('')
  const [getEscTutor, setEscTutor] = useState('')
  const [getParentesco, setParentesco] = useState('')
  const [getDomicilio, setDomicilio] = useState('')
  const [getMotivoConsulta, setMotivoConsulta] = useState('')
  const [getMorbidos, setMorbidos] = useState('')

  let data = {
    Edad: getEdad,
    DiagnosticoIngreso: getDiagnosticoIngreso,
    Escolaridad: getEscolaridad,
    EdadTutor: getEdadTutor,
    EscTutor: getEscTutor,
    Parentesco: getParentesco,
    Domicilio: getDomicilio,
    MotivoConsulta: getMotivoConsulta,
    Morbidos: getMorbidos
  }

  const save2file = () => {
    localStorage.clear();

    let i = 1;
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
        <div className='five columns'>
          <label>Edad</label>
          <input
            className='u-full-width'
            placeholder='5 años'
            type='text'
            onChange={e => setEdad(e.target.value)}
            value={getEdad}
            autoFocus
          />
        </div>
        <div className='five columns'>
          <label>Diagnostico de ingreso</label>
          <input
            className='u-full-width'
            placeholder='Amigdalitis'
            type='text'
            onChange={e => setDiagnosticoIngreso(e.target.value)}
            value={getDiagnosticoIngreso}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Escolaridad</label>
          <input
            className='u-full-width'
            placeholder='1º Basico'
            type='text'
            onChange={e => setEscolaridad(e.target.value)}
            value={getEscolaridad}
          />
        </div>
        <div className='five columns'>
          <label>Edad tutor</label>
          <input
            className='u-full-width'
            placeholder='18'
            type='text'
            onChange={e => setEdadTutor(e.target.value)}
            value={getEdadTutor}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Escolaridad tutor</label>
          <input
            className='u-full-width'
            placeholder='4º medio'
            type='text'
            onChange={e => setEscTutor(e.target.value)}
            value={getEscTutor}
          />
        </div>
        <div className='five columns'>
          <label>Parentesco del tutor</label>
          <input
            className='u-full-width'
            placeholder='Last Name'
            type='text'
            onChange={e => setParentesco(e.target.value)}
            value={getParentesco}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Domicilio</label>
          <input
            className='u-full-width'
            placeholder='Talca 123 oriente'
            type='text'
            onChange={e => setDomicilio(e.target.value)}
            value={getDomicilio}
          />
        </div>
        <div className='five columns'>
          <label>Motivo Consulta</label>
          <input
            className='u-full-width'
            placeholder='Dolor de garganta'
            type='text'
            onChange={e => setMotivoConsulta(e.target.value)}
            value={getMotivoConsulta}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Antecedentes Mórbidos</label>
          <input
            className='u-full-width'
            placeholder='Enfermedades, operaciones y traumatismos'
            type='text'
            onChange={e => setMorbidos(e.target.value)}
            value={getMorbidos}
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
