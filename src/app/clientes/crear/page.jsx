
import { FormClientData } from "@/src/components/FormClientData/FormClientData";
import { InputCodigoSeguro } from "../../../components/InputCodigoSeguro/InputCodigoSeguro";
import axios from "axios";



//This is form for new client

export default async function crear() {
    const res = await fetch("http://localhost:3000/api/clientes/polizas");
    const resp = await res.json()
    const codigoP = await resp.docs.pop().codigoPoliza;
    
    return (
      <>
        <InputCodigoSeguro data={codigoP} />
        <FormClientData data={codigoP} />
      </>
    );
}
