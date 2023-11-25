"use client";
import style from "./listado.module.css";
import Image from "next/image";
import { deleteClientAction } from "@/src/services/clienteServices";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { putDataClientToUpdate } from "@/src/redux/slices/clientReducer";
import { useScreenSize } from "@/src/utils/useWidthScreen";
// import BarSearchMobile from "../../BarSearchMobile/BarSearchMobile";
import { putDataDifuntoToUpdate } from "@/src/redux/slices/ventasSlice/difuntoReducer"
import { deleteDifuntoAction } from "@/src/services/ventasServices/difuntoServices";
import Busqueda from "../../Busqueda/Busqueda"

export default function Listado({ data }) {
  const { width } = useScreenSize();
  const router = useRouter();
  const dispatch = useDispatch();
  const isMobile = width <= 816;
  const pathname = usePathname();
  const isVentasPage = pathname === "/ventas";

  const deleteCard = async (ev) => {
    if (isVentasPage) {
      const id = ev.target.getAttribute("value");
      await deleteDifuntoAction(ev, id);
      router.refresh();
    } else {
      // client Page
      const id = ev.target.getAttribute("value");
      await deleteClientAction(ev, id);
      router.refresh();
    }
    
  };

  const navigateToComponentSelected = (dataToSend) => {
    if( isVentasPage ) {
      dispatch(putDataDifuntoToUpdate(dataToSend));
      router.push(`/ventas/difunto`);
    } else { // client Page
      dispatch(putDataClientToUpdate(dataToSend));
      router.push(`/clientes/cliente`);
    }
  };
  
  return (
    <div className={style.listado}>
      {/* {isMobile && <BarSearchMobile />} */}
      <Busqueda />
      <div className={style.containerCards}>
      {!data ? (
        <h2>No hay registros</h2>
      ) : (
        data.map((element) => {
          return (
            <div className={style.card} key={element._id}>
              <div className={style.cardTop}>
                <div className={style.icons}>
                  <Image
                    onClick={() => navigateToComponentSelected(element)}
                    priority
                    src="/edit.png"
                    height={17}
                    width={17}
                    style={{ marginRight: "10px" }}
                    alt="Follow us on Twitter"
                  />
                  <button onClick={deleteCard}>
                    <Image
                      priority
                      src="/trash.png"
                      height={17}
                      width={17}
                      value={element._id}
                      alt="Delete"
                    />
                  </button>
                </div>
                <p>Activo</p>
              </div>

              <div className={style.dataUser}>
                <p>
                  {element.name || element.fullname} {element.lastname}
                </p>
                <p>{element.cidentified}</p>
              </div>

              <div className={style.cardBottom}>
                  <div >{/*  className={style.calendarIcon} */}
                  {/* <Image
                    priority
                    src="/calendar.png"
                    height={20}
                    width={20}
                    alt="Follow us on Twitter"
                  /> */}
                </div>
                <div className={style.dateCard}>
                  <p>{element.phone ? 'Teléfono' : 'Dirección'}</p>
                  <p style={{textAlign: 'right'}}>{element.phone || element.direccion}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
      </div>
    </div>
  )
}
