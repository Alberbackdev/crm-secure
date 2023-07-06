import { FormClientData } from "../../../components/FormClientData/FormClientData";
import Layout from "../../../components/LayoutFolder/Layout";


//This is form for new client

export default function crear() {

    return (
        <Layout>
            <FormClientData />
        </Layout>
    )
}

/* export const getServerSideProps = async (ctx) => {
    const res = await fetch('http://localhost:3000/api/clientes/polize')
    const codigoPoliza = await res.json('')

    return {
        props: {
            codigoPoliza,
        }
    }
} */