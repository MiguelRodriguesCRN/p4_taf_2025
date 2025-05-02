import React from 'react'

const EstaComSono = (props) => {


  return (
    <div>
      <h2>Exercicios 02</h2>
      {props.comSono ? <h1>Hora do descansar zzz...</h1> : <h1>Bora estudar mais um pouco!! Birlll</h1>}
      <hr />
      </div>
  )
}

export default EstaComSono