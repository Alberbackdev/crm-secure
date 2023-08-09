
import { FormClientData } from "@/src/components/FormClientData/FormClientData";
import { InputCodigoSeguro } from "../../../components/InputCodigoSeguro/InputCodigoSeguro";
import { getPolizeAPI } from "@/src/services/polizaServices";


//This is form for new client

export default async function crear() {
  const data = await getPolizeAPI();
  const polizaId = data.pop()._id;
  
  return (
    <>
      <InputCodigoSeguro />
      <FormClientData data={polizaId}/>
    </>
  );
}
