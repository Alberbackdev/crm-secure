// plantilla dentro del cuadro blanco
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "./sidebar"

//children es el nombre de la pagina que esta accediedo
export default function Layout({children}) {
  const { data: session } = useSession()
  const WhiteBackgd = "bg-white flex-grow p-2 px-4 rounded-lg w-screen";
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="bg-white text-center">
          <p> Not signed in</p> <br />
          <button onClick={() => signIn('github')}>Sign in</button>

        </div>
      </div>
    )
    
  }
  //if a user is logged, show control panel admin
  //children is name of page
  return (
    <div className = "bg-blue-900 w-screen h-screen flex">
    <Nav />
      <div className={WhiteBackgd}>
        <p>{children}</p>
      </div>
    </div>
  )
}