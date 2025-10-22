import "./reset.css"
import { Header } from "./components/Header";
import { Aluno } from "./components/Aluno";
import { Footer } from "./components/Footer";


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
      <Header
        title="Romulo Alinhamentyo Smartts"
      />
      <Aluno
        nome="Romulo"
        idade={40}
      />
      <Aluno
        nome="Leonardo"
        idade={21}
      />
      <Aluno
        nome="Flávio"
        idade={32}
      />
      <Footer
        brand="Smartts Utilities"
        copyright="Todos os direitos reservados"
      />
    </>
  )
}
