import style from './codigoSeguridad.module.css'

function CodigoSeguridad({setChangeComponent}) {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Codigo de Seguridad</h3>
      <form className={style.formContent}>
        <div className={style.infoChangePassword}>           
            <p className={style.textBold}>PIN</p>
            <p className={style.textInfo}>La funcion del código PIN solo la tendrá el usuario administrador. Solo se podrá usar en el caso de no recordar la clave de acceso.</p>            
        </div>
        <div className={style.group}>
          <div className={style.groupChild}>
            <label>PIN Actual</label>
            <input
              name="name"
              type="number"
              placeholder="123456"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            //   value={values.name}
            //   onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>
                Nuevo PIN  
                <b style={{fontSize: '10px', marginLeft: '150px'}}>Mínimo 6 números</b>
            </label>
            <input
              name="lastname"
              type="number"
              placeholder="123456"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            //   value={values.lastname}
            //   onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Confirmar PIN</label>
            <input
              name="lastname"
              type="number"
              placeholder="123456"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            //   value={values.lastname}
            //   onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={style.buttons}>       
          <button type="submit" className="btn-primary" onClick={() => setChangeComponent('PASSWORD')}>
            Atrás
          </button>
          <button type="submit" className="btn-primary">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  )
}

export default CodigoSeguridad