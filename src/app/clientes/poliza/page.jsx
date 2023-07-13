import Beneficiarios from "@/src/components/Beneficiarios/Beneficiarios"
import { FormPolize } from "@/src/components/FormPolize/FormPolize"



//This is form for new client

export default function crear() {

    return (
        <>
            <div style={{display: "flex", width: "100%", marginTop: '3rem', justifyContent: 'space-around'}}> 
                <FormPolize/>
                <Beneficiarios />
            </div>
            {/* <FormPayees />  MODAAAL */}
        </>
    )
}