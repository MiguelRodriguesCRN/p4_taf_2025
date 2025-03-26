import React from 'react'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import RenderizaBackOuFront from './components/RenderizaBackOuFront'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
import HookContador from './components/HookContador'
import HookMegaSena from './components/HookMegaSena'
import HookQuina from './components/HookQuina'

const App = () => {
  return (
    <div>
      <RenderizandoComFuncoes></RenderizandoComFuncoes>
      <RenderizaBackOuFront></RenderizaBackOuFront>
      <TrabalhandoComImagens></TrabalhandoComImagens>
      <HookContador></HookContador>
      <HookMegaSena></HookMegaSena>
      <HookQuina></HookQuina>
    </div>
  )
}

export default App