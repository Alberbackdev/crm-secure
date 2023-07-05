
import { useRouter } from 'next/router'
import style from './formPolize.module.css'
import { useForm } from "../../utils/useForm";
import { TypePolizeOptions, VendedoresOptions } from "../../utils/optionsForm";
import { createPolizeAction } from "../../services/polizaServices";

//This is form for new client

export const FormPolize = () => {
    const router = useRouter()
    //llama a la funcion para actualizar el estado del las entradas
    const { values, handleInputChange, reset } = useForm({ type_polize: "", seller: "", dateofcontract: "", city_contract: "" })
    //actua como actualizador y reseteo de forms
    const sendPolize = (ev) => createPolizeAction(ev, values, reset)

    const validateNext = () => router.push('/clientes/pago')


    const tiposLabel = TypePolizeOptions.map((l, i) => <option value={l.value} key={i}>{l.label}</option>)
    const vendedorLabel = VendedoresOptions.map((l, i) => <option value={l.value} key={i} >{l.label}</option>)

    return (
        <div className={style.container}>
            <h1 className={style.title}>Ingrese los Datos de la Poliza</h1>
            <form onSubmit={sendPolize} className={style.formContent}>
                
                <div className={style.field}>
                    <label>Tipo de Plan</label>
                    <select
                        name="type_polize"
                        required
                        className={style.inputForm}
                        value={values.type_polize}
                        onChange={handleInputChange}>
                        <option>Seleccione...</option>
                        {
                            tiposLabel
                        }
                    </select>                                      
                </div>

                <div className={style.field}>
                    <label>Nombre del Cobrador/Vendedor</label>                       
                    <select
                        name="seller"
                        required
                        className={style.inputForm}
                        value={values.seller}
                        onChange={handleInputChange}>
                        <option>Seleccione...</option>
                        {
                            vendedorLabel
                        }

                    </select>                  
                </div>
                <div className={style.field}>
                    <label>Fecha de Contrato</label>
                    <input
                        name="dateofcontract"
                        type="date"
                        className={style.inputForm}
                        value={values.dateofcontract}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={style.field}>
                    <label>Ciudad</label>
                    <input
                        name="city_contract"
                        type="text"
                        placeholder="Av. 6 entre calles 9 y 10..."
                        className={style.inputForm}
                        value={values.city_contract}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={style.buttons}>
                    <button type="button" className="btn-primary" onClick={() => router.push('/clientes/crear')}>
                        Atras
                    </button>
                    <button type="submit" className="btn-primary" onClick={validateNext}>
                        Siguiente
                    </button>
                </div>
            </form>
        </div>
    );
};
