"use client";
import { useRouter } from "next/navigation";
import style from "./FormDifunto.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "@/src/utils/useForm";
import { dataDifuntoToCreate, resetDifuntoSlice } from "@/src/redux/slices/ventasSlice/difuntoReducer";
import { updateDifuntoAction } from "@/src/services/ventasServices/difuntoServices"
import { getResponsableAPI } from "@/src/services/ventasServices/responsableServices"
import { putDataResponsableToUpdate } from "@/src/redux/slices/ventasSlice/responsableReducer"


function FormDifunto() {
  const {data, updatingDifuntoData} = useSelector((state) => state.difunto); // state es el reducer y con el punto se accede al nombre se accede al slice
  const router = useRouter();
  const dispatch = useDispatch();

  const { values, handleInputChange, reset } = useForm(data);

  //actua como actualizador y reseteo de forms
  const sendDifunto = async(ev) => {
    ev.preventDefault();
    if(updatingDifuntoData) { // aqui se esta actualizado un registro por ende se manda al backend
      await updateDifuntoAction(values);
    } else{ // aqui se esta creando un registro por ende se manda al slice
      dispatch(dataDifuntoToCreate(values));     
    } 
    router.push("/ventas/responsable");   
  };

  const cancelButton = () => {
    reset();
    dispatch(resetDifuntoSlice());
    router.push("/ventas");
  };

  useEffect(() => {
    if(updatingDifuntoData) {
      const getResponsableData = async () => {
        const {data: response} = await getResponsableAPI(data._id);
        dispatch(putDataResponsableToUpdate(response.data));
      }
      getResponsableData();
    }
  }, [])
  

  return (
    <div className={style.container}>
      <form onSubmit={sendDifunto} className={style.formContent}>
        <h1 className={style.title}>Ingrese los Datos</h1>       

        <div className={`${style.group} ${style.threeInputs}`}>
          <div className={style.groupChild}>
            <label>Nombres y Apellidos</label>
            <input
              name="fullname"
              type="text"
              placeholder="Maria Grabiela Garcia Moron"        
              value={values.fullname}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.full_input}>
          <label>Dirección donde vivia</label>
          <input
            name="direccion"
            type="text"
            placeholder="Av. Libertador, Santa rosa."
            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.direccion}
            onChange={handleInputChange}
          />
        </div>
        </div>

        <div className={`${style.group} ${style.threeInputs}`}>
          <div className={style.groupChild}>
            <label>Cedula de Identidad</label>
            <input
              name="cidentified"
              type="text"
              placeholder="V-57581234"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.cidentified}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Fecha de Nacimiento</label>
            <input
              name="dateofbirth"
              type="date"
              placeholder="Apellidos"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.dateofbirth}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${style.group} ${style.threeInputs}`}>
          <div className={`${style.groupChild} ${style.typeNumber}`}>
            <label>Edad</label>
            <input
              name="edad"
              type="number"
              min={0}
              placeholder="0"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.edad}
              onChange={handleInputChange}
            />
          </div>
          <div className={`${style.groupChild} ${style.typeNumber}`}>
            <label>N° Hijos</label>
            <input
              name="nrohijos"
              type="number"
              placeholder="0"
              min={0}
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.nrohijos}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Nombre del Conyugue</label>
            <input
              name="nameconyugue"
              type="text"
              placeholder="Nombre del Conyugue"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.nameconyugue}
              onChange={handleInputChange}
            />
          </div>
        </div>        
        <div className={style.full_input}>
          <label>Lugar donde Fallecio</label>
          <input
            name="lugarfallecimiento"
            type="text"
            placeholder="Av. Libertador, Santa rosa."
            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.lugarfallecimiento}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.buttons}>
          <button type="button" className="btn-primary" onClick={cancelButton}>
            Cancelar
          </button>
          <button type="submit" className="btn-primary">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormDifunto;
