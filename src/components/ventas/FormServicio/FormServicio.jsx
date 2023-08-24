"use client"
import { useRouter } from 'next/navigation'
import style from './FormServicio.module.css'

function FormServicio() {
    const router = useRouter()
    const values = {};


    return (
        <div className={style.container}>
        <form className={style.formContent}>
            <h1 className={style.title}>Ingrese los Datos del Servicio y del Pago</h1>               
            <div className={style.full_input}>
                <label>Tipo de Ataud (Urna)</label>                          
                <input
                    name="name"
                    type="text"
                    placeholder="Tapa Redonda"
                    className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.name}
                    // onChange={handleInputChange}
                />
            </div>
            <div className={style.group}>
                <div className={style.groupChild}>
                    <label>Por Bs</label>                          
                    <input
                        name="name"
                        type="number"
                        placeholder="V-57581234"
                        step=".01"
                        className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.name}
                        // onChange={handleInputChange}
                    />
                </div>
                <div className={style.groupChild}>
                    <label>Abono</label>
                    <input
                        name="lastname"
                        type="number"
                        step=".01"
                        placeholder="200,00"
                        className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.lastname}
                        // onChange={handleInputChange}
                    />
                </div>
                <div className={style.groupChild}>
                    <label>Resta</label>
                    <input
                        name="lastname"
                        step=".01"
                        type="number"
                        placeholder="380,00"
                        className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.lastname}
                        // onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className={style.group}>
                <div className={style.groupChild}>
                    <label>Formato de Pago</label>                          
                    <select                         className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
>
                        <option value="">Transferencia</option>
                        <option value="">Pago Movil</option>
                        <option value="">Efectivo</option>
                        <option value="">Punto de Venta</option>
                    </select>
                </div>
                <div className={style.groupChild}>
                    <label>Fecha</label>                          
                    <input
                        name="name"
                        type="date"
                        placeholder="Av. Libertador, Santa rosa."
                        className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.name}
                        // onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className={style.full_input}>
                <label>Por servicios funerarios la Divina Misericordia, C.A</label>                          
                <input
                    name="name"
                    type="text"
                    placeholder="Llenar campo"
                    className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.name}
                    // onChange={handleInputChange}
                />
            </div> 
            <div className={style.full_input}>
                <label>Ubicado en:</label>                          
                <input
                    name="name"
                    type="text"
                    placeholder="Valera"
                    className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.name}
                    // onChange={handleInputChange}
                />
            </div>     
            <div className={style.buttons}>   
                <button type="button" className="btn-primary" onClick={() => router.push('/ventas/responsable')}>
                    Atras
                </button>                            
            </div>
        </form>
    </div>
      )
}

export default FormServicio