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
      <Aluno nome = "Romulo" />
      <Aluno nome = "Leonardo" />
      <Aluno nome = "Flávio" />
    </>
  )
}

// Pra poder usar props declaro uma interface pro component Aluno
interface AlunoProps {
  nome: string;
}

// No mesmo arquivo crio o componente/função Aluno
// Para ver funcionando, chamo a função dentro do component App
// Com a interface AlunoProps criada passo a prop nome na função Aluno
function Aluno({nome}: AlunoProps) {
  return (
    // Com a prop passada como argumento posso chamar pra que exiba pelo componente Aluno
    <h2>Aluno: {nome}</h2>
  )
}
