
import Beneficiarios from "@/src/components/Beneficiarios/Beneficiarios"
import { FormPolize } from "@/src/components/FormPolize/FormPolize"
import { getClientsAPI } from "@/src/services/clienteServices";
import { getBeneficiariosAPI } from "@/src/services/payeesServices";
import { getPolizeAPI } from "@/src/services/polizaServices";
import { useSearchParams } from "next/navigation";

//This is form polize and payees, for register an client

export default async function CrearPoliza({params}) {
  //usa la info de la API cliente
  const client = await getClientsAPI();
  const {data} = await getBeneficiariosAPI()
  const info = {
    cliente: !client.data ? "No hay clientes add" : client.data._id,
    poliza: !client.data.polize ? "No hay poliza add" : client.data.polize._id,
    beneficiarios: data,
  };
  console.log(info)
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "3rem",
          justifyContent: "space-around",
        }}
      >
        <FormPolize data={info} />
        <Beneficiarios data={info} />
      </div>
      {/* <FormPayees />  MODAAAL */}
    </>
  );
}