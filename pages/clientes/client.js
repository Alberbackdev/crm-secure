//interfaz de usuario para CRUD de clientes
import Layout from "../../components/Layout"
import Link from "next/link"

//show form for add new client

export default function Home() {

    return(
    <Layout>
        <Link className="bg-blue-900 text-white rounded-md py-1 px-2" href={'/clientes/newclient'}> Add New Client</Link>
    </Layout>)
}