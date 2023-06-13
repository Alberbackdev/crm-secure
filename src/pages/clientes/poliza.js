import { FormPayees } from "../../components/FormPayees/FormPayees"
import { FormPolize } from "../../components/FormPolize/FormPolize"
import Layout from "../../components/LayoutFolder/Layout"



//This is form for new client

export default function crear() {

    return (
        <Layout>
            <FormPolize />
            <FormPayees />
        </Layout>
    )
}
