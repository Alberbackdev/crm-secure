"use client"
import { usePathname, useRouter } from 'next/navigation'
import style from './CardRightDatosVentas.module.css'
import NumerosServicios from "@/src/components/ventas/NumeroServicios/NumerosServicios";
import { useDispatch, useSelector } from 'react-redux';
import { resetDifuntoSlice } from '@/src/redux/slices/ventasSlice/difuntoReducer';
import { resetResponsableSlice } from '@/src/redux/slices/ventasSlice/responsableReducer';
import { resetServicioSlice } from '@/src/redux/slices/ventasSlice/servicioReducer';


function CardRightDatosVentas() {
    const router = useRouter();
    const pathname = usePathname();
    const isFacturaPage = pathname === '/facturas/ventas';
    const isConfirmarPage = pathname.includes('confirmar');
    const dispatch = useDispatch();
    

    const valuesDifunto = useSelector((state) => state.difunto.data);
    const valuesResponsable = useSelector((state) => state.responsable.data);
    const { updatingServicioData, data: valuesServicio } = useSelector(
      (state) => state.servicio
    ); // state es el reducer y con el punto se accede al nombre se accede al slice

    /* const total = +valuesServicio.full_payment_bs;
    const totalDolar = +valuesServicio.pagoata; */

    const cleanAllSlices = () => {
      // limpiar los slices
      dispatch(resetDifuntoSlice());
      dispatch(resetResponsableSlice());
      dispatch(resetServicioSlice);
    };
//aqui falta agregar los services para crear la data en la BD y probar
    const nextButton = async () => {
      // verificar si estan editando para que no trate de crear registros
      try {
        if (updatingServicioData) {
          // aca hacer el registro solamente de pago
          await createPagoAction({
            ...valuesPago,
            difuntoId: valuesDifunto._id,
            responsableId: valuesResponsable._id,
          });
        } else {
          // aca estan creando, por ende se hacen los tres registros
          const { data } = await createClientAction(valuesDifunto);
          const { data: dataPoliza } = await createPolizeAction({
            ...valuesResponsable,
            clientId: data.newClient._id,
          });
          await createPagoAction({
            ...valuesPago,
            clientId: data.newClient._id,
            polizaId: dataPoliza.data._id,
          });
        }

        isConfirmarPage
          ? router.push("/facturas/cliente")
          : router.push("/clientes/confirmar");
      } catch (error) {
        console.log(error);
      }
    };

    const cancelButton = () => {
      if (isConfirmarPage) {
        cleanAllSlices();
        router.push("/ventas");
      } else {
        router.push("/ventas/responsable");
      }
    };
    
    const fecha = new Date(valuesServicio.fecha);
    const opciones = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const fechaFormateada = fecha.toLocaleDateString("es-ES", opciones);
    console.log(fechaFormateada);


    return (
      <div className={style.container}>
        <div className={style.contentNumServicios}>
          <h4 className={style.title}>Datos del Pago</h4>
          <div className={style.contentTop}>
            <div>
              <p className={style.data}>{valuesServicio.nroservicio}</p>
            </div>
          </div>
        </div>

        <h4 className={style.title}>Datos del Pago</h4>
        <div className={style.contentTop}>
          <div>
            <p className={style.descripcion}>Fecha</p>
            <p className={style.data}>
              {valuesServicio.ubicacionventa + ", " + fechaFormateada}
            </p>
          </div>
          <p className={style.descripcion}>Ataud (Urna) Tipo:</p>
          <p className={style.data}>{valuesServicio.tipodeataud}</p>
          <p className={style.descripcion}>Responsable:</p>
          <p className={style.data}>{valuesResponsable.fullname}</p>
        </div>

        <div className={style.contentCenter}>
          <p className={style.title}>Monto y Pago</p>
          <div className={style.mesesPagados}>
            <div className={style.mesPagado}>
              <p className={style.descripcion}>Abono</p>
              <p className={style.montoPagado}>
                ${valuesServicio.abonopagoataud} USD
              </p>
            </div>
            <div className={style.mesPagado}>
              <p className={style.descripcion}>Resta</p>
              <p className={style.montoPagado}>
                ${valuesServicio.restapagoataud} USD
              </p>
            </div>
          </div>
          <div className={style.montoEnMoneda}>
            <div className={`${style.mesPagado_center} ${style.monedaBs}`}>
              <p>Total Pagado</p>
              <p>{valuesServicio.abonopagoataud}</p>
            </div>
          </div>
        </div>
        {!isFacturaPage && (
          <div className={style.contentBottom}>
            <button
              type="button"
              onClick={() =>
                isConfirmarPage
                  ? router.push("/facturas/ventas")
                  : router.push("/ventas/servicio")
              }
              className={style.confirmBtn}
              style={{
                backgroundColor: isConfirmarPage ? "#289056" : "#2B308B",
              }}
            >
              {isConfirmarPage ? "Descargar" : "Confirmar"}
            </button>
            <p
              className={style.cancelarBtn}
              onClick={() => router.push("/ventas/servicio")}
            >
              {isConfirmarPage ? "Salir" : "Cancelar Venta"}
            </p>
          </div>
        )}
      </div>
    );
}

export default CardRightDatosVentas