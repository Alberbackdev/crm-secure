"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import style from './formResponsable.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '@/src/utils/useForm';
import { dataResponsableToCreate, resetResponsableSlice } from '@/src/redux/slices/ventasSlice/responsableReducer';
import { getServicioAPI } from '@/src/services/ventasServices/servicioServices'
import { updateResponsableAction } from '@/src/services/ventasServices/responsableServices'
import { putDataServicioToUpdate } from '@/src/redux/slices/ventasSlice/servicioReducer'


function FormResponsable() {
    const valuesDifunto = useSelector((state) => state.difunto.data); // state es el reducer y con el punto se accede al nombre se accede al slice
    const {data, updatingResponsableData} = useSelector((state) => state.responsable); // state es el reducer y con el punto se accede al nombre se accede al slice
    const router = useRouter();
    const dispatch = useDispatch();

    //llama a la funcion para actualizar el estado del input
    const { values, handleInputChange, reset } = useForm(data);

    //actua como actualizador y reseteo de forms
    const sendResponsable = async(ev) => {
      ev.preventDefault();
      if(updatingResponsableData) { // aqui se esta actualizado un registro por ende se manda al backend
        const {data} = await updateResponsableAction(values);
        console.log('se actualizo el responsable', data)
      } else{ // aqui se esta creando un registro por ende se manda al slice
        dispatch(dataResponsableToCreate(values));      
      }      
      router.push("/ventas/servicio"); //next page process
    };

    const cancelButton = () => {
      reset();
      dispatch(resetResponsableSlice());
      router.push("/ventas/difunto");
    };

    useEffect(() => {
      if(updatingResponsableData) {
        const getServicioData = async () => {
          const {data: response} = await getServicioAPI(valuesDifunto._id);
          dispatch(putDataServicioToUpdate(response.data));
        }
        getServicioData();
      }
    }, [])

    //cambiar los name de cada input para coincidir con los values del reducer y lo mismo con el formDifunto
  return (
    <div className={style.container}>
      <form onSubmit={sendResponsable} className={style.formContent}>
        <h1 className={style.title}>Ingrese los Datos</h1>
        <div className={`${style.group} ${style.flexInputs}`}>
          <div className={style.groupChild}>
            <label>Nombres y Apellidos</label>
            <input
              name="fullname"
              type="text"
              required
              placeholder="Maria Grabiela Garcia Moron"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.fullname}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Fecha de Nacimiento</label>
            <input
              name="dateofbirth"
              type="date"
              required
              placeholder="Apellidos"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.dateofbirth}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${style.group} ${style.flexInputs}`}>
          <div className={style.groupChild}>
            <label>Cedula de Identidad</label>
            <input
              name="cidentified"
              type="text"
              required
              placeholder="V-57581234"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.cidentified}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Numero de Telefono</label>
            <input
              name="telefono"
              type="text"
              required
              placeholder="0416-80762846"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.telefono}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${style.group} ${style.flexInputs}`}>
          <div className={style.groupChild}>
            <label>Parentesco</label>
            <input
              name="parentesco"
              type="text"
              required
              placeholder="Madre"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.parentesco}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Dirección</label>
            <input
              name="direccion"
              type="text"
              required
              placeholder="Av. Libertador, Santa rosa."
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.direccion}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${style.full_input} ${style.divtypeRadio}`}>
          <label>Tiene seguro el difunto</label>
          <div className={`${style.typeRadio}`}>
            <label htmlFor="si">Si</label>
            <input
              name="seguro_difunto"
              type="radio"
              id="si"
              onChange={() => {
                document.getElementById("segurodifunto").disabled = false;
              }}
            />
          </div>
          <div className={`${style.typeRadio}`}>
            <label htmlFor="no">No</label>
            <input
              name="seguro_difunto"
              type="radio"
              id="no"
              checked
              onChange={() => {
                document.getElementById("segurodifunto").disabled = true;
              }}
            />
          </div>
        </div>
        <div className={style.full_input}>
          <label>Nombre del Seguro</label>
          <input
            name="segurodifunto"
            type="text"
            required
            placeholder="Basico"
            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.segurodifunto}
            id="segurodifunto"
            disabled
            onChange={handleInputChange}
          />
        </div>
        <div className={style.buttons}>
          <button type="button" className="btn-primary" onClick={cancelButton}>
            Atras
          </button>
          <button type="submit" className="btn-primary">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormResponsable