import Link from "next/link";
import Layout from "../../components/Layout";
import { FormPolize } from "../../components/FormPolize";
import { FormPayees } from "../../components/FormPayees";


//This is form for new client

export default function crear() {

    return (
        <Layout>
            <div className="block absolute w-full rounded-md py-1.5 sm:max-w-xs sm:text-sm sm:leading-6">
                <FormPolize />
                <Link href={"/clientes/pago"}>
                    <button type="submit" className="btn-primary">
                        Guardar y Continuar
                    </button>
                </Link>
            </div> 
            <div className="block absolute ml-96 w-full rounded-md py-1.5 sm:max-w-xs sm:text-sm sm:leading-6">
                <FormPayees />
            </div>
        </Layout>
    )
}
