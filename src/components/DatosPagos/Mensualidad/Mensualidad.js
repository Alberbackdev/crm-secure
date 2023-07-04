"use client"

import { useRouter } from 'next/router';
import style from './mensualidad.module.css'


function Mensualidad() {
    const router = useRouter();


  return (
    <div className={style.container}>
        <h3 className={style.title}>Mensualidad</h3>

        <div className={style.boxes}>
            <div className={style.cardMensualidad}>
                <div className={style.cardMensualidad_top}>
                    <div className={style.cardMensualidad_mes}>
                        <h4>Enero</h4>
                        <p>Recibimos Bs.</p>
                    </div>
                    <input type='checkbox' />
                </div>
                <input type='number' placeholder='300.00' step=".01" />
            </div>
            <div className={style.cardMensualidad}>
                <div className={style.cardMensualidad_top}>
                    <div className={style.cardMensualidad_mes}>
                        <h4>Enero</h4>
                        <p>Recibimos Bs.</p>
                    </div>
                    <input type='checkbox' />
                </div>
                <input type='number' placeholder='300.00' step=".01" />
            </div>
            <div className={style.cardMensualidad}>
                <div className={style.cardMensualidad_top}>
                    <div className={style.cardMensualidad_mes}>
                        <h4>Enero</h4>
                        <p>Recibimos Bs.</p>
                    </div>
                    <input type='checkbox' />
                </div>
                <input type='number' placeholder='300.00' step=".01" />
            </div>
            <div className={style.cardMensualidad}>
                <div className={style.cardMensualidad_top}>
                    <div className={style.cardMensualidad_mes}>
                        <h4>Enero</h4>
                        <p>Recibimos Bs.</p>
                    </div>
                    <input type='checkbox' />
                </div>
                <input type='number' placeholder='300.00' step=".01" />
            </div>
            
            
        </div>
        <button type="button" className={style.buttonBack} onClick={() => router.push('/clientes/poliza')}>
            Atras
        </button>
    </div>
  )
}

export default Mensualidad