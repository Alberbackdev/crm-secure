import ButtonsActions from "@/src/components/listaClientes/buttonsActions/ButtonsActions";
import Listado from "@/src/components/listaClientes/listado/Listado";
import style from '@/src/styles/stylePages.module.css'

import { getDifuntosAPI } from "@/src/services/ventasServices/difuntoServices";


export default async function Lista() {
  const res = await getDifuntosAPI(); // no me funciona, 
  console.log(res.data) // adaptar el componente Listado para que sea reutilizable para el listado de clientes y ventas
  //console.log('cargando')

  return (
    <div className={style.mainPageClientes}>
      <ButtonsActions />
      <Listado data={!res ? "No hay registros": res.data}  />
    </div>
  );
}
