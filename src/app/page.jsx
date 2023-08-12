import { getClientsAPI } from "../services/clienteServices";
import { getBeneficiariosAPI } from "../services/payeesServices";
import { getPolizeAPI } from "../services/polizaServices";

//Vista Principal
export default async function HomePage() {
  const polizas = await getPolizeAPI();
  const clients = await getClientsAPI();
  const beneficiarios = await getBeneficiariosAPI();
  return (
    <>
      <div>HomePage</div>
      <div>---------------------------</div>
      <div>{JSON.stringify(polizas)}</div>
      <div>---------------------------</div>
      <div>{JSON.stringify(beneficiarios)}</div>
      <div>---------------------------</div>
      <div>{JSON.stringify(clients)}</div>
    </>
  );
}
