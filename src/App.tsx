// COMPONENT APP
// Component em forma de functoion

// export default - por padrão pode ser enxergada/utilizada em outro componentes
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
      <h1>Projeto Romulo</h1>
      // Chamo a função Aluno
      <Aluno />
    </>
  )
}

// No mesmo arquivo crio o componente/função Aluno
// Para ver funcionando, chamo a função dentro do component App
function Aluno(){
  return (
    <h2>Aluno: Romulo Rosa</h2>
  )
}
