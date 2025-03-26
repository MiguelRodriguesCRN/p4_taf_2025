import React, { useState } from 'react'

const HookMegaSena = () => {

    const [sorteado, setSorteado] = useState()
    const [sorteados, setSorteados] = useState([])

    function sortearNumero() {
        if (sorteados.length < 6) {

            let numeroSorteado = Math.floor(Math.random() * 60) + 1

            setSorteado(numeroSorteado)
            setSorteados([...sorteados, numeroSorteado])

        } else {
            alert("Já temos 6 úmeros sortedos");
        }

    }

  return (
    <div>

        <hr />
        <h1>Sorteador Da Mega Sena Em React</h1>
        <button onClick={sortearNumero}>   
            Sortear Numero
        </button>
        <h1>Ultimo Numero Sorteado:{sorteado}</h1>
        <h1>Lista de Sorteados {sorteados.join(" - ")}</h1>
        
    </div>
  )
}

export default HookMegaSena