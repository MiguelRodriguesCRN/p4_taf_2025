import React from 'react'
import { useState } from 'react'

const HookQuina = () => {

    const [sorteado, setSorteado] = useState()
    const [sorteados, setSorteados] = useState([])

    function sortearNumero() {
        if (sorteados.length < 5) {

            let numeroSorteado = Math.floor(Math.random() * 80) + 1

            setSorteado(numeroSorteado)
            setSorteados([...sorteados, numeroSorteado])

        } else {
            alert("Já temos 6 úmeros sortedos");
        }

    }


  return (
    <div>

        <hr />
        <h1>Sorteador Da Quina Em React</h1>
        <button onClick={sortearNumero}>   
            Sortear Numero
        </button>
        <h1>Ultimo Numero Sorteado:{sorteado}</h1>
        <h1>Lista de Sorteados {sorteados.join(" - ")}</h1>



    </div>
  )
}

export default HookQuina