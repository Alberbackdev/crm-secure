
import { FormClientData } from "@/src/components/FormClientData/FormClientData";
import { InputCodigoSeguro } from "../../../components/InputCodigoSeguro/InputCodigoSeguro";
import axios from "axios";


//This is form for new client

export default async function crear() {
  const res = await axios.get("http://localhost:3000/api/clientes/polizas");
  const polizaId = await res.data.pop()._id;
  console.log(polizaId)
  
  return (
    <>
      <InputCodigoSeguro />
      <FormClientData data={polizaId}/>
    </>
  );
}
