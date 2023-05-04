import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "./Nav"


export default function Layout({children}) {
  const { data: session } = useSession()
  const WhiteBackgd = "bg-white flex-grow p-2 px-4 rounded-lg w-screen"
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
  
  return (
    <div className = "bg-blue-900 w-screen h-screen flex">
    <Nav />
      <div className={WhiteBackgd}>
        <p>{children}</p>
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </div>
  )
}