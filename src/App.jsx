import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstCompontent'
import TemplateExpression from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'
import imgAgua from "./assets/imgAgua.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Olá mundo</h1>
        <img src="/imgCampo.jpg" alt="Campos verdes lindos"/>
        <img src={imgAgua} alt="Riacho"/>
        <img className='mundo'  src="https://cdn.pixabay.com/photo/2016/04/02/21/01/earth-1303628_1280.png" ></img>
        <FirstComponent/>
        <TemplateExpression/>
        <MyComponent/>
        <Events/>
        <Challenge/>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
      </div>
    </>
  )
}

export default App
