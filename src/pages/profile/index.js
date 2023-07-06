
import { useSession, signOut } from "next-auth/react"
import Layout from "../../components/LayoutFolder/Layout"



export default function Profile() {
    const { data: session } = useSession()
    return (<Layout>
        Perfil
        <div>
            <p>Signed in as {session?.user?.email}</p>
            <button type="button" className="bg-blue-900 text-white rounded-md py-1 px-2" onClick={() => signOut()}>
                Sign Out
            </button>
        </div>
    </Layout>
    )
}