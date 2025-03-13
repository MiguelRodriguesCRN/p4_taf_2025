import React from 'react'

const RenderizandoComFuncoes = () => {

    function escolhaDeRenderização(oQueRenderizar) {
        if (oQueRenderizar === "h1") {
            return <h1>Texto em h1</h1>
        } else {
            return <h2>Texto em h2</h2>
        }
    }

  return (
    <div>
        <h1>EXERCICIO 01: </h1>
        {escolhaDeRenderização("h2")}
    {escolhaDeRenderização("h1")}</div>
  )
}

export default RenderizandoComFuncoes