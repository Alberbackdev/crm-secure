import { getClientsAPI } from "../services/clienteServices";
import { getBeneficiariosAPI } from "../services/payeesServices";
import { getPolizeAPI } from "../services/polizaServices";

//Vista Principal
export default async function HomePage() {
  return (
    <>
      <h1>Sesión Iniciada</h1>
    </>
  );
}
