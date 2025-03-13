import React from 'react'

const RenderizaBackOuFront = () => {

    function escolhaFrontOuBack(oFrontOuBack) {
        if (oFrontOuBack === "Java") {
            return <h1>BackEnd</h1>
        } else if (oFrontOuBack === "AWS"){
            return <b><i>Cloud</i></b>
        } else if (oFrontOuBack = "React"){
            return <b>FrontEnd</b>
        }
    }
    
  return (
    <div>
        <hr />
        <h2>Desafio 02: </h2>
        {escolhaFrontOuBack("Java")}
        {escolhaFrontOuBack("AWS")}
        <br />
        {escolhaFrontOuBack("React")}
    </div>
  )
}

export default RenderizaBackOuFront