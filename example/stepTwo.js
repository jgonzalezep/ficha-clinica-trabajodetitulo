import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Divider } from "@react-md/divider";
const fs = require('browserify-fs');
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default () => {
  const [getTemperatura, setTemperatura ] = useState('')
  const [getFrecCardia, setFrecCardia ] = useState('')
  const [getFrecResp, setFrecResp ] = useState('')
  const [getPresionArt, setPresionArt ] = useState('')
  const [getPresionArtM, setPresionArtM ] = useState('')
  const [getSatOxi, setSatOxi ] = useState('')
  const [getPesoDiario, setPesoDiario ] = useState('')
  const [getSignosVit, setSignosVit ] = useState('')
  const [getGlasgow, setGlasgow ] = useState('')
  const [getTratAsoci, setTratAsoci ] = useState('')
  const [getColorPiel, setColorPiel ] = useState('')
  const [getHigienePacient, setHigienePacient ] = useState('')
  const [getMovilidad, setMovilidad ] = useState('')
  const [getEvaDolor, setEvaDolor ] = useState('')
  const [getFlacc, setFlacc ] = useState('')
  const [getEva, setEva ] = useState('')
  const [getEna, setEna ] = useState('')
  const [getTratDolor, setTratDolor ] = useState('')
  const [getSedacion, setSedacion ] = useState('')
  const [getActInfeccion, setActInfeccion ] = useState('')
  const [getExamenes, setExamenes ] = useState('')
  const [getTratAsociado, setTratAsociado ] = useState('')
  const [getObservaciones, setObservaciones ] = useState('')
  const [getPuntajeCaidas, setPuntajeCaidas ] = useState('')
  const [getPuntajePresion, setPuntajePresion ] = useState('')

  let data = {
    Temperatura: getTemperatura,
    FrecCardia: getFrecCardia,
    FrecResp: getFrecResp,
    PresionArt: getPresionArt,
    PresionArtM: getPresionArtM,
    SatOxi: getSatOxi,
    PesoDiario: getPesoDiario,
    SignosVit: getSignosVit,
    Glasgow: getGlasgow,
    TratAsoci: getTratAsoci,
    ColorPiel: getColorPiel,
    HigienePacient: getHigienePacient,
    Movilidad: getMovilidad,
    EvaDolor: getEvaDolor,
    Flacc: getFlacc,
    Eva: getEva,
    Ena: getEna,
    TratDolor: getTratDolor,
    Sedacion: getSedacion,
    ActInfeccion: getActInfeccion,
    Examenes: getExamenes,
    TratAsociado: getTratAsociado,
    Observaciones: getObservaciones,
    PuntajeCaidas: getPuntajeCaidas,
    PuntajePresion: getPuntajePresion
  }

  const save2file = () => {
    fs.writeFile('data2.txt', JSON.stringify(data), function(err, result) {
        fs.readFile('data2.txt', function(err, data) {
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
      <label>Control de signos vitales:</label>
      <div className='row'>
        <div className='two columns'>
          <label>Temperatura</label>
          <input
            className='u-full-width required'
            placeholder='36ºc'
            type='text'
            onChange={e => setTemperatura(e.target.value)}
            value={getTemperatura}
            autoFocus
          />
        </div>
        <div className='three columns'>
          <label>Frec. cardíaca</label>
          <input
            className='u-full-width'
            placeholder='90 latidos por min'
            type='text'
            onChange={e => setFrecCardia(e.target.value)}
            value={getFrecCardia}
          />
        </div>
        <div className='three columns'>
          <label>Frec. respiratoria</label>
          <input
            className='u-full-width'
            placeholder='12 respiraciones por min'
            type='text'
            onChange={e => setFrecResp(e.target.value)}
            value={getFrecResp}
          />
        </div>
        <div className='three columns'>
          <label>Presión Arterial</label>
          <input
            className='u-full-width'
            placeholder='120/80 mm'
            type='text'
            onChange={e => setPresionArt(e.target.value)}
            value={getPresionArt}
          />
        </div>
      </div>
      <div className='row'>
        <div className='four columns'>
          <label>Presión arterial media</label>
          <input
            className='u-full-width'
            placeholder='70 mmHg.'
            type='text'
            onChange={e => setPresionArtM(e.target.value)}
            value={getPresionArtM}
          />
        </div>
        <div className='three columns'>
          <label>Saturación Oxigeno</label>
          <input
            className='u-full-width'
            placeholder='95 % '
            type='text'
            onChange={e => setSatOxi(e.target.value)}
            value={getSatOxi}
          />
        </div>
        <div className='three columns'>
          <label>Peso Diario</label>
          <input
            className='u-full-width'
            placeholder='25 g'
            type='text'
            onChange={e => setPesoDiario(e.target.value)}
            value={getPesoDiario}
          />
        </div>
      </div>
      <Divider />
      <label>Control de signos vitales:</label>
      <div className='row'>
        <div className='five columns'>
          <label>Condición</label>
          <select 
            className='u-full-width'
            type='text'
            onChange={e => setSignosVit(e.target.value)}
            value={getSignosVit}
            autoFocus>
            <option value="Consciente">Consciente</option>
            <option value="Reactivo a estímulo">Reactivo a estímulo</option>
            <option value="Pasivo">Pasivo</option>
            <option value="Hipotónico">Hipotónico</option>
            <option value="Hipertónico">Hipertónico</option>
            <option value="Convulsionando">Convulsionando</option>
          </select>
        </div>
        <div className='five columns'>
          <label>Glasgow</label>
          <input
            className='u-full-width'
            placeholder='6'
            type='text'
            onChange={e => setGlasgow(e.target.value)}
            value={getGlasgow}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Tratamiento asociado</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTratAsoci(e.target.value)}
            value={getTratAsoci}
          />
        </div>
        <div className='five columns'>
          <label>Color de piel</label>
          <select 
            className='u-full-width'
            type='text'
            onChange={e => setColorPiel(e.target.value)}
            value={getColorPiel}
            autoFocus>
            <option value="Pálido">Pálido</option>
            <option value="Moreno">Moreno</option>
            <option value="Rubicunda">Rubicunda</option>
            <option value="Cianótica">Cianótica</option>
            <option value="Ictérica">Ictérica</option>
            <option value="Séptica">Séptica</option>
          </select>
        </div>
        
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Higiene del paciente</label>
          <select 
            className='u-full-width'
            type='text'
            onChange={e => setHigienePacient(e.target.value)}
            value={getHigienePacient}
            autoFocus>
            <option value="Adecuada">Adecuada</option>
            <option value="No adecuada">No adecuada</option>
          </select>
        </div>
        <div className='five columns'>
          <label>Movilidad</label>
          <select 
            className='u-full-width'
            type='text'
            onChange={e => setMovilidad(e.target.value)}
            value={getMovilidad}
            autoFocus>
             <option value="">Conservada</option>
             <option value="">No conservada</option>
          </select>
        </div>
        
      </div>
      <div className='row'>
        <div className='three columns'>
          <label>Eva. dolor </label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setEvaDolor(e.target.value)}
            value={getEvaDolor}
          />
        </div>
        <div className='two columns'>
          <label>FLACC</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setFlacc(e.target.value)}
            value={getFlacc}
          />
        </div>
        <div className='two columns'>
          <label>EVA</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setEva(e.target.value)}
            value={getEva}
          />
        </div>
        <div className='two columns'>
          <label>ENA</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setEna(e.target.value)}
            value={getEna}
          />
        </div>
        <div className='two columns'>
          <label>Trat. dolor</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTratDolor(e.target.value)}
            value={getTratDolor}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Sedación</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setSedacion(e.target.value)}
            value={getSedacion}
          />
        </div>
        <div className='five columns'>
          <label>Actualmente con infección</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setActInfeccion(e.target.value)}
            value={getActInfeccion}
          />
        </div>
        
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Exámenes</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setExamenes(e.target.value)}
            value={getExamenes}
          />
        </div>
        <div className='five columns'>
          <label>Tratamiento asociado</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTratAsociado(e.target.value)}
            value={getTratAsociado}
          />
        </div>
        
      </div>
      <div className='row'>
        <div className='ten columns'>
          <label>Observaciones</label>
          <textarea
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setObservaciones(e.target.value)}
            value={getObservaciones}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Puntaje escala de prevención de caídas</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setPuntajeCaidas(e.target.value)}
            value={getPuntajeCaidas}
          />
        </div>
        <div className='five columns'>
          <label>Puntaje escale de prevención de Lesión por presión</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setPuntajePresion(e.target.value)}
            value={getPuntajePresion}
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
