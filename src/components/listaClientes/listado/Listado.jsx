
import style from './listado.module.css'
import Image from 'next/image';

export default function Listado(data) {
  console.log(data.data)

  return (
    <div className={style.listado}>
      {data.data.map((element) => {
        return (
          <div className={style.card} key={element._id}>
            <div className={style.cardTop}>
              <p>Activo</p>
              <div className={style.icons}>
                <Image
                  priority
                  src="/edit.png"
                  height={17}
                  width={17}
                  style={{ marginRight: "10px" }}
                  alt="Follow us on Twitter"
                />
                <Image
                  priority
                  src="/trash.png"
                  height={17}
                  width={17}
                  alt="Follow us on Twitter"
                />
              </div>
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
                <p>Telefono</p>
                <p>{element.phone}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

