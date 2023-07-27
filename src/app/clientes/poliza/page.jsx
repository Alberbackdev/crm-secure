import Beneficiarios from "@/src/components/Beneficiarios/Beneficiarios"
import { FormPolize } from "@/src/components/FormPolize/FormPolize"



//This is form for new client

export default async function crear() {
    const res = await fetch("http://localhost:3000/api/clientes/beneficiarios");
    const resp = await res.json()
    const payee = await resp.docs.pop();


    return (
        <>
            <div style={{display: "flex", width: "100%", marginTop: '3rem', justifyContent: 'space-around'}}> 
                <FormPolize />
                <Beneficiarios data={payee} />
            </div>
            {/* <FormPayees />  MODAAAL */}
        </>
    )
}