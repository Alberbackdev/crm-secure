import Beneficiarios from "@/src/components/Beneficiarios/Beneficiarios"
import { FormPolize } from "@/src/components/FormPolize/FormPolize"
import { getClientsAPI } from "@/src/services/clienteServices";
import { getBeneficiariosAPI } from "@/src/services/payeesServices";
import { getPolizeAPI } from "@/src/services/polizaServices";

//This is form polize and payees, for register an client

export default async function CrearPoliza() {
  
  //usa la info de la API cliente
  const data = await getClientsAPI();
  const finish = data.pop()
  const info = {
    cliente: finish._id,
    poliza: !finish.polize ? "No hay poliza add" : finish.polize._id,
    beneficiarios: await getBeneficiariosAPI(),
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