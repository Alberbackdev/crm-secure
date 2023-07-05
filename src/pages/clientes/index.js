//interfaz de usuario para CRUD de clientes

import Link from "next/link"
import Layout from "../../components/LayoutFolder/Layout"
import { Card } from "../../components/Card/Card"

//show form for add new client

export default function Home({ clientes }) {

    console.log(clientes)
    return (
        <Layout>
            <Link 
            className="bg-blue-900 text-white rounded-md py-1 px-2" 
            href={'/clientes/crear'}
            > 
                Add New Client
            </Link>
        </Layout>
        )
}

export const getServerSideProps = async (ctx) => {
    const res = await fetch('http://localhost:3000/api/clientes/clientes')
    const clientes = await res.json()

    return {
        props: {
            clientes,
        }
    }
}