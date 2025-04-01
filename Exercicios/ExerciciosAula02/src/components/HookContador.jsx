import React, { useState } from 'react'

const HookContador = () => {

    const [contador, setContatdor] = useState(1)

    function incrementaContador() {
        setContatdor(contador + 1)
    }

    function removerContador() {
        setContatdor(contador - 1)
    }


  return (
    <div>
        <hr />
        <h1>EXERCICIOS DE HOOKS</h1>
        <hr />

        <h1>Contador Com useState</h1>
        <button onClick={() => setContatdor(contador + 1)}>    
            Incrementar contador
        </button>
        <button onClick={removerContador}>    
            Decrementar contador
        </button>
        <h1>O contador está em: {contador}</h1>

    </div>
  )
}

export default HookContador