import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import EstaComSono from './components/EstaComSono'
import Aluno from './components/Aluno'

const App = () => {

  
  return (

    <div>
      <EstouConseguindoAprenderReact estouConseguindo={false} />
      <EstaComSono comSono={true} />

      {
        [{nome: "Miguel", email: "miguel@gmail.com", curso: "Sistemas Para Internet"},
          {nome: "Leonardo", email: "leonardo@gmail.com", curso: "Sistemas Para Internet"},
          {nome: "Joao", email: "joao@gmail.com", curso: "Festa Zumbi"}
        ].map((aluno) =>
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso}/>
        )

      }

    </div>
  )
}

export default App