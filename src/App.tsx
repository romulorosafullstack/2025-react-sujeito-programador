{/* HOOK useState */}
{/* - Usar quando precisar de comportamentos dinâmicos */ }

{/* 1) importar o hook useState do react */ }
import "./reset.css"
import { useState } from "react";

export default function App() {

  // DECLARANDO ESTADOS
  // const - constante
  // [aluno, setAluno] = Array de estados [estadoInicial, estadoAtualizado]
  // = Atribuição
  // useState("") - cria estado inicial, ("") no caso como vazio
  const [nome, setNome] = useState<string | number>("")
  const [idade, setIdade] = useState("")

  // TIPAGEM DE ESTADOS
  // - Podemos usar um tipo específico de dado ou mesmo diferentes tipos de dados num state
  // - Caso não seja declarado o tipo de dado, ele vai se assumir com o tipo iniciado/accert type ("") string / (1234) number...
  const [alunoNome, setAlunoNome] = useState<string | number>("Sem nenhum nome")
  const [alunoIdade, setAlunoIdade] = useState<string | number>("Sem nenhuma idade")

  // function - função
  // mostrarAluno - nome
  // () - inicializador sewm param
  // {} - Bloco de código que será executado
  // alert(input) - Função que exibe um alerta passando o valor do estado input
  function mostrarAluno() {
    // Atualiza o estado aluno com o novo valoir de nome
    setAlunoNome(nome);
    setAlunoIdade(idade);
  }


  return (
    <>
      <h1>Estudando UseState</h1>

      <input
        type="text"
        placeholder="Digite seu nome"
        // Valor do input recebe o valor inicial do estado input
        value={nome}
        // onChange - Evento disparado quando o input é alterado
        // {} - Função executada quando o evento é disparado
        // (e) - Parâmetro do evento
        // => - Arrow function
        // setInput(e.target.value) - Atualiza o estado input com estadoAtualizado = e.target.value
        onChange={(e) => setNome(e.target.value)}
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

      <h3>Bem-vindo: {alunoNome}</h3>
      <p>Idade: {alunoIdade} anos</p>
    </>
  )
}
