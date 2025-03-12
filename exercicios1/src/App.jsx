import React from "react";

import Adicao from "./components/Adicao";
import Subtracao from "./components/Subtracao";
import Multiplicacao from "./components/Multiplicacao";
import Divisao from "./components/Divisao";
import PrecisoEstudar from "./components/PrecisoEstudar";


function App() {

    return (

        <>

            <h1>Exercícios Aula 1 React - Prof. Kelson - Tec. Avançadas para Front</h1>
            <hr />

            <h3>Exercício 1</h3>

            <Adicao num1={100} num2={100}></Adicao>
            <br />

            <Divisao num1={50} num2={25}></Divisao>
            <br />

            <Multiplicacao num1={10} num2={10}></Multiplicacao>
            <br />

            <Subtracao num1={10} num2={5}></Subtracao>
            <br />

            <br />
            <hr />
            <h3>Exercício 2</h3>
            <p>Exercicio: No React crie um componente  chamado “PrecisoEstudar.jsx</p>

            <PrecisoEstudar nomeDaTecnologia={"TypeScript e MongoDB"}></PrecisoEstudar>
            <br />

        </>

    );

}

export default App;