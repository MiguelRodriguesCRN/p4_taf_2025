import React from 'react'
import Exercicio1 from './components/exercicio1'
import Exercicios2 from './components/Exercicios2'
import Campanha from './components/Campanha'

const App = () => {
  return (
    <div>
      <Exercicio1 />
      <Exercicios2 />
      <Campanha mes="novembro"/>

    </div>
  )
}

export default App