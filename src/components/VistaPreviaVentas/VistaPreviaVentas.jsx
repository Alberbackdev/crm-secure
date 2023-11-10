import Image from 'next/image'
import style from './VistaPreviaVentas.module.css'

function VistaPreviaVentas() {
    return (
        <div className={style.container}>
           <div className={style.successMessage}>
                <div className={style.circleContent}>
                    <Image
                        priority
                        src="/successIcon.png"
                        height={20}
                        width={20}
                        alt="Follow us on Twitter"
                    />
                </div>
                <div>
                    <p className={style.blueMessage}>Tu Venta esta Confirmada</p>
                    <p className={style.grayMessage}>Los datos ingresados han sido registrados correctamente!</p>
                </div>
           </div>
    
           <div className={style.detallesCliente}>
                <p className={style.title_detallesCliente}>Detalles de la Venta</p>
                <p className={style.titleInfo}>Datos del Difunto</p>
    
                <div className={`${style.dataCliente} ${style.threeInputs}`}>
                    <div className={style.field}>
                        <p className={style.title_field}>Nombres Y Apellidos</p>
                        <p className={style.data_field}>Yulihanny Patricia Mendez Aldana</p>
                    </div>
                    <div className={style.field}>
                        <p className={style.title_field}>Fecha de Nacimiento</p>
                        <p className={`${style.data_field} ${style.right}`}>24/02/2000</p>
                    </div>
                    <div className={style.field}>
                        <p className={style.title_field}>Cedula de Identidad</p>
                        <p className={`${style.data_field} ${style.right}`}>V-5785881</p>
                    </div>
                </div>               
           </div>
    
           <div className={style.detallesPoliza}>
                <p className={style.titleInfo}>Datos del Responsable del Servicio</p>
    
                <div className={`${style.dataPoliza} ${style.threeInputs}`}>
                    <div className={style.field}>
                        <p className={style.title_field}>Nombres Y Apellidos</p>
                        <p className={style.data_field}>Maria Grabiela Garcia Moron</p>
                    </div>
                    <div className={style.field}>
                        <p className={style.title_field}>Cedula de Identidad</p>
                        <p className={style.data_field}>V-5785881</p>
                    </div>
                    <div className={style.field}>
                        <p className={style.title_field}>Numero de Telefono</p>
                        <p className={`${style.data_field} ${style.right}`}>0416-80762846</p>
                    </div>
                </div>
                <div className={style.dataPoliza}>
                    <div className={style.field}>
                        <p className={style.title_field}>Parentesco</p>
                        <p className={style.data_field}>Madre</p>
                    </div>
                    <div className={style.field}>
                        <p className={`${style.title_field}`}>Direccion</p>
                        <p className={`${style.data_field} ${style.right}`}>Av. Libertador Santa Rosa</p>
                    </div>
                </div>
                <div className={style.dataPoliza}>
                    <div className={style.field}>
                        <p className={style.title_field}>Tiene Seguro el Difunto</p>
                        <p className={style.data_field}>Si</p>
                    </div>
                    <div className={style.field}>
                        <p className={`${style.title_field}`}>Nombre del Seguro</p>
                        <p className={`${style.data_field} ${style.right}`}>Basico</p>
                    </div>
                </div>
           </div>
        </div>
      )
}

export default VistaPreviaVentas