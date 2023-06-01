import Layout from "../../components/Layout";
import { FormPolize } from "../../components/FormPolize";
import { FormPayees } from "../../components/FormPayees";


//This is form for new client

export default function crear() {

    return (
        <Layout>
            <FormPolize />
            <FormPayees />
        </Layout>
    )
}
