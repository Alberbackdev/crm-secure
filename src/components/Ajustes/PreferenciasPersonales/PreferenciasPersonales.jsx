import Image from 'next/image'
import style from './PreferenciasPersonales.module.css'


function PreferenciasPersonales() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Datos Personales</h3>
      <form className={style.formContent}>
        <div className={style.profilePicture}>
            <Image 
                width={65}
                height={65}
                alt='profile-picture'
                src={'/profile-picture.png'}
                className={style.avatar}
            />
            <div>
                <p className={style.textBold}>Foto de Perfil</p>
                <p className={style.textInfo}>Tamaño maximo 2MB, formatos: JPG, PNG, SVG.</p>
            </div>
        </div>
        <div className={style.group}>
          <div className={style.groupChild}>
            <label>Tu Nombre</label>
            <input
              name="name"
              type="text"
              placeholder="Patricia Godoy"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            //   value={values.name}
            //   onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Correo Electronico</label>
            <input
              name="lastname"
              type="text"
              placeholder="mari_humbold@gmail.com"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            //   value={values.lastname}
            //   onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={style.group}>
          <div className={style.groupChild}>
            <label>Cedula de Identidad</label>
            <input
              name="name"
              type="text"
              placeholder="V- 5786881"
              className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            //   value={values.name}
            //   onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Numero de Telefono</label>
            <input
              name="lastname"
              type="text"
              placeholder="0416-1122334"
              className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            //   value={values.lastname}
            //   onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={style.group}>
          <div className={style.groupChild}>
            <label>Dirección</label>
            <input
              name="cidentified"
              type="number"
              placeholder="Av. Libertador, Santa rosa."
              className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            //   value={values.cidentified}
            //   onChange={handleInputChange}
            />
          </div>
          <div className={style.groupChild}>
            <label>Moneda por Defecto</label>
            <input
              name="phone"
              type="number"
              placeholder="Bolivar Soberano (VES)"
              className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            //   value={values.phone}
            //   onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={style.group}>
          <div className={style.groupChild}>
            <label>Moneda de Cambio</label>
            <input
              name="cidentified"
              type="number"
              placeholder="Dolares $"
              className="block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            //   value={values.cidentified}
            //   onChange={handleInputChange}
            />
          </div>      
        </div>
        <div className={style.buttons}>       
          <button type="submit" className="btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  )
}

export default PreferenciasPersonales