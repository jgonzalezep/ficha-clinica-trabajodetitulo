import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Divider } from "@react-md/divider";
const fs = require('browserify-fs');
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default () => {
  const [getOjos, setOjos] = useState('')
  const [getPupilas, setPupilas] = useState('')
  const [getSecrecion, setSecrecion] = useState('')
  const [getImplaAuricular, setImplaAuricular] = useState('')
  const [getFosasNasales, setFosasNasales] = useState('')
  const [getPermeables, setPermeables] = useState('')
  const [getBoca, setBoca] = useState('')
  const [getLabios, setLabios] = useState('')
  const [getPaladar, setPaladar] = useState('')
  const [getDientes, setDientes] = useState('')
  const [getObsCabeza, setObsCabeza] = useState('')
  const [getCuello, setCuello] = useState('')
  const [getAdenopatias, setAdenopatias] = useState('')
  const [getTorax, setTorax] = useState('')
  const [getForma, setForma] = useState('')
  const [getRuidos, setRuidos] = useState('')
  const [getSecreciones, setSecreciones] = useState('')
  const [getRetraccion, setRetraccion] = useState('')
  const [getOxigenoterapia, setOxigenoterapia] = useState('')
  const [getFioDos, setFioDos] = useState('')
  const [getObsTorax, setObsTorax] = useState('')
  const [getMovilidad, setMovilidad] = useState('')
  const [getPulsos, setPulsos] = useState('')
  const [getIntegridadSuperior, setIntegridadSuperior] = useState('')
  const [getColoracion, setColoracion] = useState('')
  const [getObsnAbdomen, setObsnAbdomen] = useState('')
  const [getRuidosHidroareos, setRuidosHidroareos] = useState('')
  const [getPalpacion, setPalpacion] = useState('')
  const [getTecAlimentacion, setTecAlimentacion] = useState('')
  const [getRegimen, setRegimen] = useState('')
  const [getDeposiciones, setDeposiciones] = useState('')
  const [getResiduoGastrico, setResiduoGastrico] = useState('')
  const [getVomitos, setVomitos] = useState('')
  const [getObsAbdomen, setObsAbdomen] = useState('')
  const [getTratAsociado, setTratAsociado] = useState('')
  const [getObsDorso, setObsDorso] = useState('')
  const [getIntegridadDorso, setIntegridadDorso] = useState('')
  const [getMasculino, setMasculino] = useState('')
  const [getTestes, setTestes] = useState('')
  const [getFimosis, setFimosis] = useState('')
  const [getFemenino, setFemenino] = useState('')
  const [getLabiosMenores, setLabiosMenores] = useState('')
  const [getLabiosMayores, setLabiosMayores] = useState('')
  const [getIntegridadGen, setIntegridadGen] = useState('')
  const [getHigiene, setHigiene] = useState('')
  const [getDiuresis, setDiuresis] = useState('')
  const [getBalanHidrico, setBalanHidrico] = useState('')
  const [getObsGenitales, setObsGenitales] = useState('')
  const [getTratAsociadoGen, setTratAsociadoGen] = useState('')
  const [getMovilidadInferior, setMovilidadInferior] = useState('')
  const [getPulsosInferior, setPulsosInferior] = useState('')
  const [getIntegridadInferior, setIntegridadInferior] = useState('')
  const [getColoracionInferior, setColoracionInferior] = useState('')

  let data = {
    Ojos: getOjos,
    Pupilas: getPupilas,
    Secrecion: getSecrecion,
    ImplaAuricular: getImplaAuricular,
    FosasNasales: getFosasNasales,
    Permeables: getPermeables,
    Boca: getBoca,
    Labios: getLabios,
    Paladar: getPaladar,
    Dientes: getDientes,
    ObsCabeza: getObsCabeza,
    Cuello: getCuello,
    Adenopatias: getAdenopatias,
    Torax: getTorax,
    Forma: getForma,
    Ruidos: getRuidos,
    Secreciones: getSecreciones,
    Retraccion: getRetraccion,
    Oxigenoterapia: getOxigenoterapia,
    FioDos: getFioDos,
    ObsTorax: getObsTorax,
    Movilidad: getMovilidad,
    Pulsos: getPulsos,
    IntegridadSuperior: getIntegridadSuperior,
    Coloracion: getColoracion,
    ObsnAbdomen: getObsnAbdomen,
    RuidosHidroareos: getRuidosHidroareos,
    Palpacion: getPalpacion,
    TecAlimentacion: getTecAlimentacion,
    Regimen: getRegimen,
    Deposiciones: getDeposiciones,
    ResiduoGastrico: getResiduoGastrico,
    Vomitos: getVomitos,
    ObsAbdomen: getObsAbdomen,
    TratAsociado: getTratAsociado,
    ObsDorso: getObsDorso,
    IntegridadDorso: getIntegridadDorso,
    Masculino: getMasculino,
    Testes: getTestes,
    Fimosis: getFimosis,
    Femenino: getFemenino,
    LabiosMenores: getLabiosMenores,
    LabiosMayores: getLabiosMayores,
    IntegridadGen: getIntegridadGen,
    Higiene: getHigiene,
    Diuresis: getDiuresis,
    BalanHidrico: getBalanHidrico,
    ObsGenitales: getObsGenitales,
    TratAsociadoGen: getTratAsociadoGen,
    MovilidadInferior: getMovilidadInferior,
    PulsosInferior: getPulsosInferior,
    IntegridadInferior: getIntegridadInferior,
    ColoracionInferior: getColoracionInferior
  }

  const save2file = () => {
    let i = 3;
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
      <label>Cabeza:</label>
      <div className='row'>
        <div className='five columns'>
          <label>Ojos</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setOjos(e.target.value)}
            value={getOjos}
            autoFocus
          />
        </div>
        <div className='five columns'>
          <label>Pupilas</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setPupilas(e.target.value)}
            value={getPupilas}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Secreción</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setSecrecion(e.target.value)}
            value={getSecrecion}
          />
        </div>
        <div className='five columns'>
          <label>Implantación Auricular</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setImplaAuricular(e.target.value)}
            value={getImplaAuricular}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Fosas nasales</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setFosasNasales(e.target.value)}
            value={getFosasNasales}
          />
        </div>
        <div className='five columns'>
          <label>Permeables</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setPermeables(e.target.value)}
            value={getPermeables}
          />
        </div>
      </div>
      <div className='row'>
        <div className='two columns'>
          <label>Boca</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setBoca(e.target.value)}
            value={getBoca}
          />
        </div>
        <div className='two columns'>
          <label>Labios</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setLabios(e.target.value)}
            value={getLabios}
          />
        </div>
        <div className='two columns'>
          <label>Paladar</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setPaladar(e.target.value)}
            value={getPaladar}
          />
        </div>
        <div className='two columns'>
          <label>Dientes</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setDientes(e.target.value)}
            value={getDientes}
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
            onChange={e => setObsCabeza(e.target.value)}
            value={getObsCabeza}
          />
        </div>
      </div>
      <Divider />
      <label>Cuello:</label>
      <div className='row'>
        <div className='five columns'>
          <label>Movilidad</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setCuello(e.target.value)}
            value={getCuello}
            autoFocus
          />
        </div>
        <div className='five columns'>
          <label>Adenopatías</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setAdenopatias(e.target.value)}
            value={getAdenopatias}
          />
        </div>
      </div>
      <Divider />
      <label>Tórax:</label>
      <div className='row'>
        <div className='five columns'>
          <label>Respiración</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTorax(e.target.value)}
            value={getTorax}
            autoFocus
          />
        </div>
        <div className='five columns'>
          <label>Forma</label>
          <select 
            className='u-full-width'
            type='text'
            onChange={e => setForma(e.target.value)}
            value={getForma}
            autoFocus>
            <option value="Simétrica">Simétrica</option>
             <option value="Asimétrica">Asimétrica</option>
          </select>
        </div>
      </div>
      <div className='row'>
        <div className='three columns'>
          <label>Ruidos</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setRuidos(e.target.value)}
            value={getRuidos}
          />
        </div>
        <div className='three columns'>
          <label>Secreciones</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setSecreciones(e.target.value)}
            value={getSecreciones}
          />
        </div>
        <div className='three columns'>
          <label>Retracción</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setRetraccion(e.target.value)}
            value={getRetraccion}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Oxigenoterapia (dispositivo)</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setOxigenoterapia(e.target.value)}
            value={getOxigenoterapia}
            autoFocus
          />
        </div>
        <div className='five columns'>
          <label>Fio2</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setFioDos(e.target.value)}
            value={getFioDos}
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
            onChange={e => setObsTorax(e.target.value)}
            value={getObsTorax}
          />
        </div>
      </div>
      <Divider />
      <label>Extremidades Superiores:</label>
      <div className='row'>
        <div className='three columns'>
          <label>Movilidad</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setMovilidad(e.target.value)}
            value={getMovilidad}
            autoFocus
          />
        </div>
        <div className='three columns'>
          <label>Pulsos</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setPulsos(e.target.value)}
            value={getPulsos}
          />
        </div>
        <div className='three columns'>
          <label>Integridad</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setIntegridadSuperior(e.target.value)}
            value={getIntegridadSuperior}
          />
        </div>
        <div className='three columns'>
          <label>Coloración</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setColoracion(e.target.value)}
            value={getColoracion}
          />
        </div>
      </div>
      <Divider />
      <label>Abdomen:</label>
      <div className='row'>
        <div className='five columns'>
          <label>Observación</label>
          <select 
            className='u-full-width'
            type='text'
            onChange={e => setObsnAbdomen(e.target.value)}
            value={getObsnAbdomen}
            autoFocus>
             <option value="Globuloso">Globuloso</option>
             <option value="Plano">Plano</option>
             <option value="Asimétrico">Asimétrico</option>
             <option value="Simétrico">Simétrico</option>
             <option value="Ostomías">Ostomías</option>
             <option value="Onfalocele—Gastrosquisis">Onfalocele—Gastrosquisis</option>
          </select>
        </div>
        <div className='five columns'>
          <label>Ruidos hidroaéreos</label>
          <select 
            className='u-full-width'
            type='text'
            onChange={e => setRuidosHidroareos(e.target.value)}
            value={getRuidosHidroareos}
            autoFocus>
             <option value="Si">Si</option>
             <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Palpación</label>
          <select 
            className='u-full-width'
            type='text'
            onChange={e => setPalpacion(e.target.value)}
            value={getPalpacion}
            autoFocus>
             <option value="Blando">Blando</option>
             <option value="Depresible">Depresible</option>
             <option value="Indoloro">Indoloro</option>
             <option value="Tenso">Tenso</option>
             <option value="Doloroso">Doloroso</option>
          </select>
        </div>
        <div className='five columns'>
          <label>Técnica de Alimentación</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTecAlimentacion(e.target.value)}
            value={getTecAlimentacion}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Regimen</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setRegimen(e.target.value)}
            value={getRegimen}
            autoFocus
          />
        </div>
        <div className='five columns'>
          <label>Deposiciones</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setDeposiciones(e.target.value)}
            value={getDeposiciones}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Residuo gástrico</label>
          <select 
            className='u-full-width'
            type='text'
            onChange={e => setResiduoGastrico(e.target.value)}
            value={getResiduoGastrico}
            autoFocus>
             <option value="Bilioso">Bilioso</option>
             <option value="Mucoso">Mucoso</option>
             <option value="Alimenticio">Alimenticio</option>
          </select>
        </div>
        <div className='five columns'>
          <label>Vómitos</label>
          <select 
            className='u-full-width'
            type='text'
            onChange={e => setVomitos(e.target.value)}
            value={getVomitos}
            autoFocus>
             <option value="Si">Si</option>
             <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className='row'>
        <div className='ten columns'>
          <label>Observaciones</label>
          <textarea
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setObsAbdomen(e.target.value)}
            value={getObsAbdomen}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='ten columns'>
          <label>Tratamiento asociado</label>
          <textarea
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTratAsociado(e.target.value)}
            value={getTratAsociado}
            autoFocus
          />
        </div>
      </div>
      <Divider />
      <label>Dorso:</label>
      <div className='row'>
        <div className='five columns'>
          <label>Observación</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setObsDorso(e.target.value)}
            value={getObsDorso}
            autoFocus
          />
        </div>
        <div className='five columns'>
          <label>Integridad</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setIntegridadDorso(e.target.value)}
            value={getIntegridadDorso}
          />
        </div>
      </div>
      <Divider />
      <label>Genitales:</label>
      <div className='row'>
        <div className='three columns'>
          <label>Masculino</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setMasculino(e.target.value)}
            value={getMasculino}
            autoFocus
          />
        </div>
        <div className='three columns'>
          <label>Testes en escroto</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTestes(e.target.value)}
            value={getTestes}
          />
        </div>
        <div className='three columns'>
          <label>Fimosis</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setFimosis(e.target.value)}
            value={getFimosis}
          />
        </div>
      </div>
      <div className='row'>
        <div className='three columns'>
          <label>Femenino</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setFemenino(e.target.value)}
            value={getFemenino}
            autoFocus
          />
        </div>
        <div className='three columns'>
          <label>Labios menores</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setLabiosMenores(e.target.value)}
            value={getLabiosMenores}
          />
        </div>
        <div className='three columns'>
          <label>Labios mayores</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setLabiosMayores(e.target.value)}
            value={getLabiosMayores}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Integridad</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setIntegridadGen(e.target.value)}
            value={getIntegridadGen}
            autoFocus
          />
        </div>
        <div className='five columns'>
          <label>Higiene</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setHigiene(e.target.value)}
            value={getHigiene}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Diuresis</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setDiuresis(e.target.value)}
            value={getDiuresis}
            autoFocus
          />
        </div>
        <div className='five columns'>
          <label>Balance Hidrico</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setBalanHidrico(e.target.value)}
            value={getBalanHidrico}
          />
        </div>
      </div>
      <div className='row'>
        <div className='five columns'>
          <label>Observación</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setObsGenitales(e.target.value)}
            value={getObsGenitales}
            autoFocus
          />
        </div>
        <div className='five columns'>
          <label>Tratamiento asociado</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setTratAsociadoGen(e.target.value)}
            value={getTratAsociadoGen}
          />
        </div>
      </div> 
      <Divider />
      <label>Extremidades Inferiores:</label>
      <div className='row'>
        <div className='three columns'>
          <label>Movilidad</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setMovilidadInferior(e.target.value)}
            value={getMovilidadInferior}
            autoFocus
          />
        </div>
        <div className='three columns'>
          <label>Pulsos</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setPulsosInferior(e.target.value)}
            value={getPulsosInferior}
          />
        </div>
        <div className='three columns'>
          <label>Integridad</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setIntegridadInferior(e.target.value)}
            value={getIntegridadInferior}
          />
        </div>
        <div className='three columns'>
          <label>Coloración</label>
          <input
            className='u-full-width'
            placeholder=''
            type='text'
            onChange={e => setColoracionInferior(e.target.value)}
            value={getColoracionInferior}
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
