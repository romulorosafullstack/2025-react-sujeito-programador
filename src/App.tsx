import "./reset.css"
import { Header } from "./components/Header";
import { Aluno } from "./components/Aluno";


// function - função
// App - nome da função
// () - inicializador da função
// {} - Bloco de código
// return - indicador de retorno da função
// () - 
// </> - fragmento do React para encapsular mais de um elemento
export default function App() {
  return (
    <>
      <Header />
      <Aluno nome="Romulo" idade={40} />
      <Aluno nome="Leonardo" idade={21} />
      <Aluno nome="Flávio" idade={32} />
    </>
  )
}
