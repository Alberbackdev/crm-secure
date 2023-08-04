
import { FormClientData } from "@/src/components/FormClientData/FormClientData";
import { InputCodigoSeguro } from "../../../components/InputCodigoSeguro/InputCodigoSeguro";
import axios from "axios";


//This is form for new client

export default async function crear() {
    const res = await axios.get("http://localhost:3000/api/clientes/polizas");
    const codigoP = await res.docs;
    console.log(codigoP)
    
    return (
      <>
        <InputCodigoSeguro data={codigoP} />
        <FormClientData data={codigoP} />
      </>
    );
}
