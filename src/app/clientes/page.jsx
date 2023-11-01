import ButtonsActions from "@/src/components/listaClientes/buttonsActions/ButtonsActions";
import Listado from "@/src/components/listaClientes/listado/Listado";
import { getClientsAPI } from "@/src/services/clienteServices";
import style from '@/src/styles/stylePages.module.css'
// import { getPolizeAPI } from "@/src/services/polizaServices";

//This is form for new client

export default async function Lista() {
  //const res = await getClientsAPI();


  return (
    <div className={style.mainPageClientes}>
      <ButtonsActions />
      <Listado /* data={!res ? "No hay registros": res.data}  *//>
    </div>
  );
}
