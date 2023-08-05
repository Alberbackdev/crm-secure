import Beneficiarios from "@/src/components/Beneficiarios/Beneficiarios"
import { FormPolize } from "@/src/components/FormPolize/FormPolize"
import { getClientsAPI } from "@/src/services/clienteServices";
import { getBeneficiariosAPI } from "@/src/services/payeesServices";

//This is form for new client

export default async function crear() {

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
        <FormPolize />
        <Beneficiarios
          poliza={await getBeneficiariosAPI()}
          clientes={await getClientsAPI()}
        />
      </div>
      {/* <FormPayees />  MODAAAL */}
    </>
  );
}