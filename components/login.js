import { useSession, signIn, signOut } from "next-auth/react"

export default function ButonSession() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="bg-white flex-grow p-4">
        <p>Welcome, {session.user.name} - Signed in as {session.user.email}</p>
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div>
      <p> Not signed in</p> <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}