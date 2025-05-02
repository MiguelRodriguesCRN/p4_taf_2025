import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Noticias = () => {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/noticias") //Request
        .then(resposnse => setNoticias(resposnse.data))  //Responde
        .catch(error => console.error("Erro ao carregar a lista de noticias: ", erro))
        
        async function fetchData() {

            const res = await fetch(url);
            const data = await res.json();

            setNoticias(data);

        }

    }, [])

    return (
        <div>
            <h1>Lista de Noticias</h1>
            <hr />
            <ul>
                {noticias.map((noticia) => (
                    <li key={noticia.id}>
                        <h2>{noticia.titulo}</h2>
                        <p>{noticia.dataCriacao}</p>
                        <p>{noticia.texto_da_noticia}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Noticias;
