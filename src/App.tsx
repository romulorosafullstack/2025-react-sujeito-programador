// COMPONENT APP
// Component em forma de function
// OBS: Component com Props - Recomenda-se somente para componets que sejam aproveitados mais de uma vez


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

      // Chamo a função Aluno usando props e passando os valores refrentes a nome e idade como argumentos
      <Aluno nome="Romulo" idade={40} />
      <Aluno nome="Leonardo" idade={21} />
      <Aluno nome="Flávio" idade={32} />
    </>
  )
}

// Pra poder usar props na função, declaro uma interface pro component Aluno
interface AlunoProps {
  nome: string;
  idade: number
}

// No mesmo arquivo crio o componente/função Aluno
// Para ver funcionando, chamo a função dentro do component App
// Com a interface AlunoProps criada passo suas props na função Aluno
function Aluno({nome, idade}: AlunoProps) {
  return (
    <>
      // Com as props passadas como argumentos posso chamar pra que exiba pelo componente Aluno
      <h2>Aluno: {nome}</h2>
      <h2>Idade: {idade}</h2>
    </>
  )
}
