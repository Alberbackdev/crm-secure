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
