import Beneficiarios from "@/src/components/Beneficiarios/Beneficiarios"
import { FormPolize } from "@/src/components/FormPolize/FormPolize"
import { getClientsAPI } from "@/src/services/clienteServices";
import { getBeneficiariosAPI } from "@/src/services/payeesServices";

//This is form polize and payees, for register an client

export default async function CrearPoliza() {
  
  //usa la info de la API cliente
  const { data } = await getClientsAPI();
  console.log(data?.pop()?._id);
  const info = {
    cliente: data?.pop()?._id,
    poliza: data?.pop()?.polize?._id,
    beneficiarios: await getBeneficiariosAPI(),
  };

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
        <FormPolize/>
        <Beneficiarios data={[info]} />
      </div>
      {/* <FormPayees />  MODAAAL */}
    </>
  );
}