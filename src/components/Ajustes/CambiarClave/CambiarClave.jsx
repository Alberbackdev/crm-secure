import style from './CambiarClave.module.css'

function CambiarClave() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Contraseña e Inicio de sesion</h3>
      <form className={style.formContent}>
        <div className={style.infoChangePassword}>           
            <p className={style.textBold}>Cambiar Contraseña</p>
            <p className={style.textInfo}>Protege tus datos creando una contraseña que sea compleja y tenga la longitud sufuciente. Debe resultarte fácil de recordar pero difícil de adivinar para los demas.</p>            
        </div>
        <div className={style.group}>
          <div className={style.groupChild}>
            <label>Contraseña Actual</label>
            <input
              name="name"
              type="password"
              placeholder="########"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            //   value={values.name}
            //   onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>
                Nueva Contraseña 
                <b style={{fontSize: '10px', marginLeft: '85px'}}>Mínimo 8 caracteres</b>
            </label>
            <input
              name="lastname"
              type="password"
              placeholder="########"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            //   value={values.lastname}
            //   onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Confirmar Contraseña</label>
            <input
              name="lastname"
              type="password"
              placeholder="########"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            //   value={values.lastname}
            //   onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={style.buttons}>       
          <button type="submit" className="btn-primary">
            Guardar Contraseña
          </button>
        </div>
      </form>
    </div>
  )
}

export default CambiarClave