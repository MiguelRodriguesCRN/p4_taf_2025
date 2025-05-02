# Atividades da Aula 05 - Manipulação de Dados com React

**Aluno:** Miguel Rodrigues Carneiro

Neste repositório, estão as atividades realizadas durante a Aula 05, com foco na manipulação de dados em React. A aula abordou o uso do useState para gerenciar estados e useEffect para buscar dados de uma API. Também foi utilizado o pacote json-server para simular a API localmente.

---

## Estrutura das Atividades

- App.jsx: Componente principal que importa e renderiza o componente ListaDeAlunos.
- ListaDeAlunos.jsx: Componente responsável por exibir uma lista de alunos recebidos de uma API.

---

## Exercício: Lista de Alunos com useState e useEffect

### Descrição

Este exercício implementa um componente que exibe uma lista de alunos, com os dados recebidos de uma API utilizando o hook useEffect. Os dados são armazenados em um estado com useState e renderizados em uma tabela.

### Funcionalidades

- O componente realiza uma requisição assíncrona para a API (endpoint http://localhost:3000/alunos) e armazena os dados de alunos no estado.
- Os dados dos alunos são exibidos em uma tabela HTML com as colunas de Matrícula, Nome e Email.
- Cada aluno é exibido em uma linha da tabela com as suas informações correspondentes.

### Instalação do json-server

Para simular a API localmente, utilizamos o pacote json-server. Execute o seguinte comando para instalar o json-server e rodar a API local:

- npm install json-server

Depois, crie o arquivo db.json com os dados de alunos e execute o servidor com o comando:

- json-server --watch db.json --port 3000

Agora, a API estará disponível em http://localhost:3000/alunos.

---

## Componentes

### Componente ListaDeAlunos

- Importa React, useEffect e useState.
- Realiza a requisição para a API e armazena os dados no estado.
- Renderiza os dados em uma tabela HTML.

### Componente App

- Importa o componente ListaDeAlunos e o renderiza.

---

## Dados dos Alunos

Os dados dos alunos são carregados a partir de uma API (simulada com http://localhost:3000/alunos) que retorna o seguinte JSON:

{
    "alunos": [
        {
            "id": 1,
            "nome": "Miguel Rodrigues",
            "email": "miguelrodriguescrn@gmail.com"
        },
        {
            "id": 2,
            "nome": "Miguel Auguato",
            "email": "miguelaugustovna@gmail.com"
        },
        {
            "id": 3,
            "nome": "Ana Cristina",
            "email": "anacristinacrn@gmail.com"
        }
    ]
}

---

## Objetivo

- Praticar o uso de useState e useEffect para manipulação de dados assíncronos.
- Exibir dados em uma tabela HTML de maneira dinâmica com React.
- Explorar a renderização condicional e o uso de chaves únicas (key) ao renderizar listas.

---

## Objetivos da Aula

- Aprender a manipular dados em React utilizando useState e useEffect.
- Trabalhar com APIs para buscar dados e exibi-los de forma dinâmica no componente.
- Explorar o conceito de renderização de listas em React utilizando .map().

---

## Resultados Esperados

Ao rodar o código, a aplicação deverá exibir a seguinte tabela com os dados dos alunos:
Matrícula

Nome

Email

1

Miguel Rodrigues

miguelrodriguescrn@gmail.com

2

Miguel Auguato

miguelaugustovna@gmail.com

3

Ana Cristina

anacristinacrn@gmail.com

## Resultados dos Exercícios

![Resultado Exercícios](src/resultado/Aula03.png)