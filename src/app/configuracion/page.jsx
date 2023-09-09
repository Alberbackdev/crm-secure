'use client';
import { useSession, signOut } from "next-auth/react"
import ContainerPrinc from "../../components/LayoutFolder/Layout";



export default function Configuracion() {
    const { data: session } = useSession()
    return (
        <ContainerPrinc>
            <h1>Perfil</h1>
            <p>Signed in as {session?.user?.email}</p>
            <button
            className="bg-zinc-800 text-white px-4 py-2 block mb-2"
            onClick={() => {
                signOut();
            }}
            >
            Signout
            </button>
        </ContainerPrinc>
    );
}