import ButtonsActions from "@/src/components/listaClientes/buttonsActions/ButtonsActions";
import Listado from "@/src/components/listaClientes/listado/Listado";
import { getClientsAPI } from "@/src/services/clienteServices";
import { getPolizeAPI } from "@/src/services/polizaServices";

//This is form for new client

export default async function Lista() {
  const res = await getClientsAPI();


  return (
    <div style={{ marginLeft: "41px", marginTop: "3rem" }}>
      <ButtonsActions />
      <Listado data={!res ? "No hay registros": res} />
    </div>
  );
}
