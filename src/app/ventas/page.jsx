import ButtonsActions from "@/src/components/listaClientes/buttonsActions/ButtonsActions";
import Listado from "@/src/components/listaClientes/listado/Listado";
import style from '@/src/styles/stylePages.module.css'
import { getVentasAPI } from "@/src/services/ventasServices"


export default async function Lista() {
  const res = await getVentasAPI(); // no me funciona, 
  console.log(res) // adaptar el componente Listado para que sea reutilizable para el listado de clientes y ventas
  console.log('cargando')

  return (
    <div className={style.mainPageClientes}>
      <ButtonsActions />
      <Listado data={!res ? "No hay registros": res.docs}  />
    </div>
  );
}
