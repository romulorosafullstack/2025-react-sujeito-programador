interface AlunoProps {
  nome: string;
  idade: number
}

export function Aluno({ nome, idade }: AlunoProps) {
  return (
    <>
      {/*Com as props passadas como argumentos posso chamar pra que exiba pelo componente Aluno*/}
      <h2>Aluno: {nome}</h2>
      <h2>Idade: {idade}</h2>
    </>
  )
}