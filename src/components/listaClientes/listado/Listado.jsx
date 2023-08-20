"use client"
import Link from 'next/link';
import style from './listado.module.css'
import Image from 'next/image';
import { deleteClientAction } from '@/src/services/clienteServices';
import { useRouter } from 'next/navigation';

export default function Listado({data}) {
  const router = useRouter()
  console.log(data)
  
  const deleteClient = async(ev) => {
    const id = ev.target.getAttribute("value");
    await deleteClientAction(ev, id);
    router.refresh();
  };

  return (
    <div className={style.listado}>
      {data.map((element) => {
        return (
          <div className={style.card} key={element._id}>
            <div className={style.cardTop}>
              <div className={style.icons}>
                <Image
                  priority
                  src="/edit.png"
                  height={17}
                  width={17}
                  style={{ marginRight: "10px" }}
                  alt="Follow us on Twitter"
                />
                <button onClick={deleteClient}>
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
            <Link href={`/clientes/cliente/${element._id}`} >
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
                  <p>Telefono</p>
                  <p>{element.phone}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

