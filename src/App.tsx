{/* HOOK useState */}
{/* - Usar quando precisar de comportamentos dinâmicos e mutável sem atualizar a página */}
{/* - Todo state precisa ser declarado dentro do componente*/}
import { useState } from "react";
//import "./reset.css"

interface UserProps{
  nome: string;
  cargo: string
}


export default function App() {
  const [user, setUser] = useState<UserProps>({
    nome: "Romulo",
    cargo: "Front-End",
  })

  function handleLogin() {
    setUser({
      nome: "Romulo",
      cargo: "Front-End",
    })
  }

  function handleLogout() {
    setUser({
      nome: "visitante",
      cargo: "",
    })
  }


  return (
    <>
      <h1>Estudando UseState</h1>
      <button onClick={handleLogin}>Entrar</button>
      <button onClick={handleLogout}>Sair</button>
      <h2>Olá {user.nome}!</h2>
      <h3>{user.cargo}</h3>
  
    </>
  )
}
