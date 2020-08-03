import React from 'react'
import ReactDOM from 'react-dom'
import MultiStep from '../react-multistep'
import {
  AppBarTitle,
  AppBar
} from "@react-md/app-bar";

import './css/custom.css'
import './css/normilize.css'
import './css/skeleton.css'
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'
import StepFour from './stepFour'
import StepFive from './stepFive'
import StepSix from "./stepSix"
import StepSeven from "./stepSeven"
import StepEight from "./stepEight"
import StepNine from "./stepNine"

const steps = [
  { name:'Antecedentes', component: <StepOne /> },
  { name:'Valoracion General', component: <StepTwo /> },
  { name:'Valoracion Segmentaria', component: <StepThree /> },
  { name:'Medidas Invasivas', component: <StepFour /> },
  { name:'Valoracion Diaria', component: <StepFive /> },
  { name:'Agencia de Enfermeria', component: <StepSix /> },
  { name:'Requisito de Autocuidado', component: <StepSeven /> },
  { name:'Proceso Enfermero', component: <StepEight /> },
  { name:'Ficha', component: <StepNine /> }


]

const App = () => (
  <div className='container'>
    <MultiStep showNavigation={true} steps={steps}/>
    <div className='container app-footer'>
      <h6>Presiona 'Siguiente' para visualizar cada las pestañas.</h6>
      <h6>Presiona 'Anterior' para volver a la pestaña anterior.</h6>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
