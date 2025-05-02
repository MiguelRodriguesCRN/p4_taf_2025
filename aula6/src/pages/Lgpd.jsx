import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Lgpd = () => {

    const [dpoLgpd, setDpoLgpd] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/dpolgpd") //Request
        .then(resposnse => setDpoLgpd(resposnse.data))  //Responde
        .catch(error => console.error("Erro ao carregar a lista de dpo lgpd: ", erro))
        
        async function fetchData() {

            const res = await fetch(url);
            const data = await res.json();

            setDpoLgpd(data);

        }

    }, [])

    return (
        <div>
            <h1>Lista de DPO LGPD</h1>
            <ul>
                {dpoLgpd.map((dpoLgpd) => (
                     <li key={dpoLgpd.id}>
                        <h2>{dpoLgpd.titulo}</h2>
                        <p>{dpoLgpd.texto}</p>
                     </li>
                    ))}
                </ul>
            </div>
        );

    }
export default Lgpd;
