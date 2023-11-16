"use client";
import Link from "next/link";
import style from "./listado.module.css";
import Image from "next/image";
import { deleteClientAction } from "@/src/services/clienteServices";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { putDataClientToUpdate } from "@/src/redux/slices/clientReducer";
import { useScreenSize } from "@/src/utils/useWidthScreen";
import BarSearchMobile from "../../BarSearchMobile/BarSearchMobile";

export default function Listado({ data }) {
  const { width } = useScreenSize();
  const router = useRouter();
  const dispatch = useDispatch();
  const isMobile = width <= 816;
  console.log(data)

  const deleteCard = async (ev) => {
    const id = ev.target.getAttribute("value");
    await deleteClientAction(ev, id);
    router.refresh();
  };

  const navigateToComponentSelected = (dataClient) => {
    dispatch(putDataClientToUpdate(dataClient));
    router.push(`/clientes/cliente`);
  };

  return (
    <div className={style.listado}>
      {isMobile && <BarSearchMobile />}
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
                <p>{element.cidentified}</p>
                <p>
                  {element.name} {element.lastname}
                </p>
              </div>

              <div className={style.cardBottom}>
                <div className={style.calendarIcon}>
                  <Image
                    priority
                    src="/calendar.png"
                    height={20}
                    width={20}
                    alt="Follow us on Twitter"
                  />
                </div>
                <div className={style.dateCard}>
                  <p>Teléfono</p>
                  <p>{element.phone}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  )
}
