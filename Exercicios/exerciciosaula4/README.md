# Atividades da Aula 04 - Componentes em React

**Aluno:** Miguel Rodrigues Carneiro

Neste repositório estão as atividades realizadas durante a **Aula 04**, com foco no uso de **CSS Modules** e estilização dinâmica em componentes React. A aula abordou a integração de estilos CSS de maneira modular, aplicando conceitos de renderização condicional com base nas props recebidas.

---

## 📁 Estrutura das Atividades

A estrutura é composta por três componentes principais:

- `Exercicio1.jsx`
- `Exercicio2.jsx`
- `Campanha.jsx`

Cada componente implementa uma funcionalidade específica e utiliza técnicas de estilização e manipulação de dados.

---

## 📘 Exercícios

### 🎨 Exercício 1 - Exibição de Texto e Imagem

Este exercício consiste na criação de um componente simples que exibe um título, um parágrafo com texto e uma imagem.

#### Código do componente:

```jsx
import React from 'react';

const Exercicio1 = () => {
  return (
    <div>
      <h1>Exercicio 01</h1>
      <p>TESTE DE FONTE</p>
      <img src="tralalelo.jpg" />
    </div>
  );
};

export default Exercicio1;
Funcionalidades:
Exibe um título h1 com o texto "Exercicio 01".

Mostra o parágrafo com o texto "TESTE DE FONTE".

Apresenta uma imagem com o nome tralalelo.jpg (deve ser substituída por um caminho válido para a imagem).

Objetivo:
Praticar a estruturação básica de JSX.

Exibir elementos como texto e imagem em um componente React.

🎨 Exercício 2 - Estilização Inline com JSX
O segundo exercício aborda a aplicação de estilos diretamente no JSX utilizando a estilização inline.

Código do componente:
jsx
Copiar
Editar
import React from 'react';

const Exercicios2 = () => {
  return (
    <div style={{ color: '#ff0000', backgroundColor: '#0000ff', width: '200px', textAlign: 'center' }}>
      <h1>Exerci0 02</h1>
      Isso é um texte
    </div>
  );
};

export default Exercicios2;
Funcionalidades:
Aplica estilos inline diretamente na div que envolve o conteúdo.

O componente exibe o título "Exerci0 02" e o texto "Isso é um texte", com as cores de texto e fundo definidas.

Objetivo:
Explorar a aplicação de estilos inline no React.

Compreender como usar objetos JavaScript para definir estilos no JSX.

🖌️ Exercício 3 - Estilos com CSS Modules
O terceiro exercício foca na utilização de CSS Modules para aplicar estilos localizados e dinâmicos em um componente React, baseado na prop mes recebida.

Código do componente:
jsx
Copiar
Editar
import React from 'react';
import styles from './Campanha.module.css';

const Campanha = (props) => {

    function definirMensagem(mes) {
        if (mes === "setembro") {
            return "Prevenção ao suicidio";
        } else if (mes === "outubro") {
            return "Conscientização sobre o câncer de mama";
        } else if (mes === "novembro") {
            return "Prevenção e combate ao câncer de próstata";
        }
    }

    function defineCor(mes) {
        if (mes === "setembro") {
            return styles.setembro;
        } else if (mes === "outubro") {
            return styles.outubro;
        } else if (mes === "novembro") {
            return styles.novembro;
        }
    }

  return (
    <div className={defineCor(props.mes)}>
        {definirMensagem(props.mes)}
    </div>
  );
};

export default Campanha;
Funcionalidades:
O componente utiliza o CSS Module para aplicar estilos dinâmicos com base no mês informado pela prop mes.

As mensagens e as cores de fundo são alteradas conforme o mês:

Setembro: "Prevenção ao suicídio"

Outubro: "Conscientização sobre o câncer de mama"

Novembro: "Prevenção e combate ao câncer de próstata"

Objetivo:
Demonstrar o uso de CSS Modules em React para isolar estilos.

Aplicar estilos dinâmicos com base nas props do componente.

🎯 Objetivos da Aula
Compreender como usar CSS Modules para evitar conflitos de estilo entre componentes.

Praticar a estilização inline em JSX.

Explorar como aplicar estilos condicionais com base nas props.

Aprender a modularizar os estilos e tornar os componentes React mais organizados e reutilizáveis.

### Resultados dos Exercícios

![Resultado Exercícios](src/resultado/Aula04.png)