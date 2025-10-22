{/* HOOK useState */}
{/* - Usar quando precisar de comportamento dinâmico */}
{/* 1) importar o hook useState do react */ }
import "./reset.css"
import { useState } from "react";

export default function App() {

  // DECLARANDO ESTADOS
  // const - constante
  // [aluno, setAluno] = Array de estados [estadoInicial, estadoAtualizado]
  // = Atribuição
  // useState("") - cria estado inicial, ("") no caso como vazio
  const [aluno, setAluno] = useState("")
  const [idade, setIdade] = useState("")


  // function - função
  // mostrarAluno - nome
  // () - inicializador sewm param
  // {} - Bloco de código que será executado
  // alert(input) - Função que exibe um alerta passando o valor do estado input
  function mostrarAluno() {
    alert(`ALUNO: ${aluno}\niDADE: ${idade} anos`);
  }


  return (
    <>
      <h1>Estudando UseState</h1>
      <h2>Aluno: {aluno}</h2>
      <h3>Idade: {idade}</h3>

      <input
        type="text"
        placeholder="Digite seu nome"
        // Valor do input recebe o valor inicial do estado input
        value={aluno}
        // onChange - Evento disparado quando o input é alterado
        // {} - Função executada quando o evento é disparado
        // (e) - Parâmetro do evento
        // => - Arrow function
        // setInput(e.target.value) - Atualiza o estado input com estadoAtualizado = e.target.value
        onChange={(e) => setAluno(e.target.value)}
      />

      <br />

      <input
        type="text"
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />

      <br />

      {/* button - Botão */}
      {/* onClick - método que executa algo mediante um clique */}
      {/* {mostrarAluno} - função */}
      <button onClick={mostrarAluno}>
        Mostrar Aluno
      </button>


    </>
  )
}
