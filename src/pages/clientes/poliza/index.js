import Beneficiarios from "../../../components/Beneficiarios/Beneficiarios"
import { FormPolize } from "../../../components/FormPolize/FormPolize"
import Layout from "../../../components/LayoutFolder/Layout"


//This is form for new client

export default function crear() {

    return (
        <Layout>
            <div style={{display: "flex", width: "100%", marginTop: '3rem', justifyContent: 'space-around'}}> 
                <FormPolize />
                <Beneficiarios />
            </div>
            {/* <FormPayees />  MODAAAL */}
        </Layout>
    )
}

/* export const getServerSideProps = async (ctx) => {
    const resid = await fetch('http://localhost:3000/api/clientes/clientes')
    const idCliente = await resid.json()
    const clientId = idCliente.pop()

    return {
        props: {
            clientId
        }
    }
} */