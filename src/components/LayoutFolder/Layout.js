// plantilla dentro del cuadro blanco
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "../Sidebar/Sidebar"
import style from './layout.module.css'
import Header from "../Header/Header"

//children es el nombre de la pagina que esta accediedo
export default function Layout({children}) {
  const { data: session } = useSession()
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen m-auto flex items-center">
        <div className="bg-white text-center">
          <p> Not signed in</p> <br />
          <button onClick={() => signIn()}>Sign in</button>

        </div>
      </div>
    )
    
  }
  //if a user is logged, show control panel admin
  //children is name of page
  return (
    <div className={style.container}>      
      <div className={style.contentPlantilla}> {/* Sidebar */} 
        <Nav />
      </div>
      <div className={style.children}> {/* Header y Children */}
        <Header />
        {children}
      </div>
    </div>
  )
}