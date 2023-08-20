import { getClientsAPI } from "../services/clienteServices";
import { getBeneficiariosAPI } from "../services/payeesServices";
import { getPolizeAPI } from "../services/polizaServices";

//Vista Principal
export default async function HomePage() {
  const polizas = await getPolizeAPI();
  const { data } = await getClientsAPI();
  const beneficiarios = await getBeneficiariosAPI();
  return (
    <>
      <div>HomePage</div>
      <div>---------------------------</div>
      <div>{JSON.stringify(polizas.data)}</div>
      <div>---------------------------</div>
      <div>{JSON.stringify(beneficiarios.data)}</div>
      <div>---------------------------</div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}
