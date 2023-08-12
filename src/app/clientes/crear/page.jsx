
import { FormClientData } from "@/src/components/FormClientData/FormClientData";
import { InputCodigoSeguro } from "../../../components/InputCodigoSeguro/InputCodigoSeguro";
import { getPolizeAPI } from "@/src/services/polizaServices";


//This is form for new client

export default async function CrearCliente() {
  const data = await getPolizeAPI();
  const res = data.pop()?._id
  console.log(res);
  
  return (
    <>
      <InputCodigoSeguro />
      <FormClientData data={!data ? `No hay registros` : res} />
    </>
  );
}
