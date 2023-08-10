import Beneficiarios from "@/src/components/Beneficiarios/Beneficiarios"
import { FormPolize } from "@/src/components/FormPolize/FormPolize"
import { getClientsAPI } from "@/src/services/clienteServices";
import { getBeneficiariosAPI } from "@/src/services/payeesServices";

//This is form polize and payees, for register an client

export default async function CrearPoliza() {
  
  //usa la info de la API cliente
  const res = await getClientsAPI();
  const resp = await res.json();
  const info = {
    cliente: resp?.pop()?._id,
    poliza: resp?.pop()?.polize?._id,
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
        <FormPolize data={info} />
        <Beneficiarios data={[info]} />
      </div>
      {/* <FormPayees />  MODAAAL */}
    </>
  );
}