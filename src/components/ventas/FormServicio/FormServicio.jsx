"use client";
import { useRouter } from "next/navigation";
import style from "./FormServicio.module.css";
import { useForm } from "@/src/utils/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  dataServicioToCreate,
  putDataServicioToUpdate,
  resetServicioSlice,
} from "@/src/redux/slices/ventasSlice/servicioReducer";
import { precioBCV } from "@/src/utils/getDolarPrice";

function FormServicio() {
  const [error, setError] = useState("");
  // state es el reducer y con el punto se accede al nombre se accede al slice
  const router = useRouter();
  //llama a la funcion para actualizar el estado del input

  const { data, updatingServicioData } = useSelector((state) => state.servicio); // state es el reducer y con el punto se accede al nombre se accede al slice
  const dispatch = useDispatch();
  const { values, handleInputChange, reset } = useForm(data);
  
  useEffect(() => {
    //cambio de dolar a bolivares en el precio total
    const totalenBsD = values?.preciodolarataud * values?.tipodecambio
    // resta de deuda en dolares
    const deudaTotalDolar = values?.preciodolarataud - values?.abonopagoataud;
    // resta de deuda en bs
    const deudaTotalBsD = deudaTotalDolar / values.tipodecambio;
      
    const dataToSend = {
      ...values,
      preciobsataud: totalenBsD,
      restapagoataud: deudaTotalDolar,
    };
      
    updatingServicioData
      ? dispatch(putDataServicioToUpdate(dataToSend))
      : dispatch(dataServicioToCreate(dataToSend)); 
  }, [dispatch, updatingServicioData, values]);

  useEffect(() => {
    async function getPrecioBCV() {
      const precioDolar = await precioBCV;
      handleInputChange({
        target: { name: "tipodecambio", value: precioDolar },
      });
    }
    getPrecioBCV();
  }, []);

  //console.log(values)

  
  const cancelButton = () => {
    reset();
    dispatch(resetServicioSlice());
    router.push("/ventas/difunto");
  };

  return (
    <div className={style.container}>
      <form className={style.formContent}>
        <h1 className={style.title}>
          Ingrese los Datos del Servicio y del Pago
        </h1>
        <div className={`${style.group} ${style.threeInputs}`}>
          {" "}
          {/* primera fila del formulario */}
          <div className={style.groupChild}>
            <label>Tipo de Ataud (Urna)</label>
            <input
              name="tipodeataud"
              type="text"
              required
              placeholder="Tapa Redonda"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.tipodeataud}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.tipoCambio}>
            <p className={style.descripcion}>Tipo de Cambio</p>
            <p className={style.data} style={{ textAlign: "right" }}>
              {values.tipodecambio}
            </p>
          </div>
          <div className={style.groupChild}>
            <label>N° Orden de Servicio</label>
            <input
              name="nroservicio"
              type="text"
              required
              placeholder="0448"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.nroservicio}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={style.group}>
          {" "}
          {/* segunda fila del formulario */}
          <div className={style.groupChild}>
            <label>Formato de Pago</label>
            <select
              name="formatodepago"
              required
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.formatodepago}
              onChange={handleInputChange}
            >
              <option value="Transferencia">Transferencia</option>
              <option value="Pago_Movil">Pago Movil</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Punto_de_Venta">Punto de Venta</option>
            </select>
          </div>
          <div className={style.groupChild}>
            <label>Precio Ataud / Dolar</label>
            <input
              name="preciodolarataud"
              type="text"
              required
              placeholder="10 Dolares"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.preciodolarataud}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Fecha</label>
            <input
              name="fecha"
              required
              type="date"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.fecha}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${style.group} ${style.threeInputs}`}>
          {" "}
          {/* tercera fila del formulario */}
          <div className={style.groupChild}>
            <label>En Bs</label>
            <input
              name="preciobsataud"
              type="number"
              step=".01"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={data.preciobsataud}
              disabled
            />
          </div>
          <div className={style.groupChild}>
            <label>Abono</label>
            {/* <p>{data.abonopagoataud * values.tipodecambio}Bs.D</p> */}
            <input
              name="abonopagoataud"
              type="number"
              required
              step=".01"
              placeholder="200,00"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.abonopagoataud}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Resta</label>
            {/* <p>{data.restapagoataud * values.tipodecambio}Bs.D</p> */}
            <input
              name="restapagoataud"
              step=".01"
              required
              type="number"
              placeholder="380,00"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={data.restapagoataud}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={style.full_input}>
          {" "}
          {/* cuarta fila del formulario */}
          <label>Por servicios funerarios la Divina Misericordia, C.A</label>
          <input
            name="comentarioadd"
            type="text"
            required
            placeholder="Llenar campo"
            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.comentarioadd}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.full_input}>
          {" "}
          {/* quinta fila del formulario */}
          <label>Ubicado en:</label>
          <input
            name="ubicacionventa"
            type="text"
            required
            placeholder="Valera"
            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.ubicacionventa}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.buttons}>
          <button type="button" className="btn-primary" onClick={cancelButton}>
            Atras
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormServicio;
